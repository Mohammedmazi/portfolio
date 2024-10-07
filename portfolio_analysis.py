import json
import datetime
import mstarpy
from collections import defaultdict
from scipy.optimize import newton

print("Loading JSON file...")
with open("pror.json", "r") as file:
    data = json.load(file)

print("File loaded. Preparing data...")

portfolio = defaultdict(list)

for entry in data['data']:
    for transaction in entry['dtTransaction']:
        folio = transaction['folio']
        scheme = transaction['scheme']
        isin = transaction['isin']
        trxn_units = float(transaction['trxnUnits'])
        trxn_price = float(transaction['purchasePrice']) if transaction['purchasePrice'] else 0
        trxn_amount = float(transaction['trxnAmount'])
        trxn_date = datetime.datetime.strptime(transaction['trxnDate'], '%d-%b-%Y')

        if trxn_units != 0 and trxn_price != 0:
            portfolio[(folio, scheme)].append({
                'date': trxn_date,
                'units': trxn_units,
                'price': trxn_price,
                'amount': trxn_amount,
                'isin': isin
            })

print("Transactions processed. Portfolio built.")

def apply_fifo(scheme_transactions):
    buy_stack = []
    sell_transactions = []

    for transaction in scheme_transactions:
        if transaction['units'] > 0:
            buy_stack.append(transaction)
        else:
            units_to_sell = abs(transaction['units'])
            while units_to_sell > 0 and buy_stack:
                oldest_purchase = buy_stack[0]
                if oldest_purchase['units'] > units_to_sell:
                    oldest_purchase['units'] -= units_to_sell
                    units_to_sell = 0
                else:
                    units_to_sell -= oldest_purchase['units']
                    buy_stack.pop(0)

            sell_transactions.append(transaction)
    
    return buy_stack, sell_transactions

def fetch_nav(isin):
    print(f"Fetching NAV for ISIN: {isin}...")
    fund = mstarpy.Funds(term=isin, country="in")
    end_date = datetime.datetime.now()
    start_date = end_date - datetime.timedelta(days=365)
    history = fund.nav(start_date=start_date, end_date=end_date, frequency="daily")
    print(f"NAV fetched for {isin}")
    return history[-1]['nav']

print("Starting portfolio calculations...")

total_value = 0
total_gain = 0
cashflows = []

for (folio, scheme), transactions in portfolio.items():
    print(f"Processing folio: {folio}, scheme: {scheme}")
    remaining_units, sales = apply_fifo(sorted(transactions, key=lambda x: x['date']))
    current_nav = fetch_nav(transactions[0]['isin'])
    
    folio_value = sum([t['units'] * current_nav for t in remaining_units])
    acquisition_cost = sum([t['units'] * t['price'] for t in remaining_units])
    
    total_value += folio_value
    total_gain += (folio_value - acquisition_cost)

    for t in transactions:
        cashflows.append({
            'date': t['date'],
            'amount': -t['amount']
        })

cashflows.append({
    'date': datetime.datetime.now(),
    'amount': total_value
})

print(f"Total Portfolio Value: ₹ {total_value:.2f}")
print(f"Total Portfolio Gain: ₹ {total_gain:.2f}")

def xirr(cashflows):
    def npv(rate):
        return sum([cf['amount'] / ((1 + rate) ** ((cf['date'] - cashflows[0]['date']).days / 365)) for cf in cashflows])

    return newton(npv, 0.1)

try:
    portfolio_xirr = xirr(cashflows)
    print(f"Portfolio XIRR: {portfolio_xirr * 100:.2f}%")
except Exception as e:
    print(f"XIRR calculation failed: {str(e)}")
