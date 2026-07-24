import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import {
  FiMenu,
  FiX,
  FiInstagram,
} from "react-icons/fi";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black/85 backdrop-blur-xl border-b border-white/5 shadow-2xl"
    >
      <nav className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-between">
        {/* Logo + Status */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNav("#hero")}
            className="flex items-center"
          >
            <img src="/logo12.jpeg" alt="Logo" className="h-12 w-auto object-contain rounded-lg" />
          </motion.button>
          
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  active === link.href ? "text-indigo-400" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-indigo-400 transition-all duration-300 ${
                    active === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Socials + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
          >
            <FiInstagram size={18} />
          </a>
          <button
            onClick={() => handleNav("#contacto")}
            className="ml-2 btn-primary text-sm px-4 py-2"
          >
            Contacto
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`text-sm font-medium transition-colors ${
                      active === link.href ? "text-indigo-400" : "text-slate-300"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
