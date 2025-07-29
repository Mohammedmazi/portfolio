"use client";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 ext-white py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mazin</h1>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gray-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
