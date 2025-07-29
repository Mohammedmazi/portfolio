
'use client'
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
    
     <Navbar />
    <section id="hero"  >
     
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/mazinwebsite.png"
          alt="Hero Background"
          className="w-full h-full object-cover object-[45%_center]"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-9xl font-bold mb-4">
          Hi, I&apos;m Mohammed Mazin
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-4">
          Full-Stack Developer | AI & Blockchain Developer
        </h2>
        <p className="text-base md:text-lg font-light max-w-2xl">
          Building intelligent, scalable, real-time applications using modern web stacks, AI models, and decentralized systems.
        </p>

        <div className="mt-6 flex gap-4">
          <a href="#projects">
            <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition duration-300">
              View Projects
            </button>
          </a>
          <a href="/mohammedmazinresume2025.pdf" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
              View Resume
            </button>
          </a>
        </div>
      </div>
    </div>
    </section>
    <section id="about" className="bg-black text-white py-20 px-6" data-aos="fade-up">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
    <p className="text-lg md:text-xl font-light leading-relaxed">
      I’m Mohammed Mazin, a full-stack developer with a strong passion for building AI-powered applications, real-time systems, and blockchain-integrated solutions. With experience across the MERN stack, machine learning, and smart contracts, I bridge innovation and functionality in every product I build.
    </p>
  </div>
</section>

<section id="projects" className="bg-black text-white py-20 px-6" data-aos="fade-up" data-aos-delay="100">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h2>

    <div className="grid md:grid-cols-2 gap-10">
      {/* Project Card 1 */}
      <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-[1.02] transition">
        <h3 className="text-2xl font-semibold mb-2">Signify – AI Sign Language Web App</h3>
        <p className="text-gray-300 text-sm mb-2">
          Real-time ASL detection with NLP correction and speech synthesis.
        </p>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Tech:</strong> Python, MediaPipe, FastAPI, React.js, gTTS
        </p>
      </div>

      {/* Project Card 2 */}
      <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-[1.02] transition">
        <h3 className="text-2xl font-semibold mb-2">College Grievance Redressal Portal</h3>
        <p className="text-gray-300 text-sm mb-2">
          Anonymous complaint system with secure role-based login using JWT.
        </p>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Tech:</strong> MongoDB, Express.js, React.js, Node.js, JWT
        </p>
      </div>

      {/* Project Card 3 */}
      <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-[1.02] transition">
        <h3 className="text-2xl font-semibold mb-2">Emotion Detection Web App</h3>
        <p className="text-gray-300 text-sm mb-2">
          NLP-powered emotion analysis app deployed on Heroku.
        </p>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Tech:</strong> Python, Flask, IBM Watson, Heroku
        </p>
      </div>

      {/* Project Card 4 */}
      <div className="bg-gray-900 p-6 rounded-lg shadow hover:scale-[1.02] transition">
        <h3 className="text-2xl font-semibold mb-2">Ship Proxy System</h3>
        <p className="text-gray-300 text-sm mb-2">
          Secure proxy architecture tunneling HTTP/S over persistent TCP.
        </p>
        <p className="text-sm text-gray-400 mb-2">
          <strong>Tech:</strong> Python, Sockets, TCP, Docker
        </p>
      </div>
    </div>
  </div>
</section>

<section
  id="contact"
  className="bg-black text-white py-20 px-6"
  data-aos="fade-up"
>
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Contact</h2>
    <p className="text-lg mb-4">
      Let&apos;s connect and build something great.
    </p>
    <div className="space-y-2 text-gray-300">
      <p>
        📧 Email:{" "}
        <a
          href="mailto:mohammedmaz786@gmail.com"
          className="underline hover:text-white"
        >
          mohammedmaz786@gmail.com
        </a>
      </p>
      <p>📞 Phone: +91-9633804445</p>
      <p>
        🔗 GitHub:{" "}
        <a
          href="https://github.com/Mohammedmazi"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          github.com/Mohammedmazi
        </a>
      </p>
      <p>
        💼 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/mohammed-mazin-a30623225/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          linkedin.com/in/mohammed-mazin
        </a>
      </p>
    </div>
  </div>
</section>



    </>
  );
}
