import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";

const roles = personalInfo.roles;

function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = words[index % words.length];
    if (!deleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeoutRef.current = setTimeout(
        () =>
          setDisplayed((prev) =>
            deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
          ),
        deleting ? 50 : 90
      );
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, index, words]);

  return (
    <span className="gradient-text font-semibold">
      {displayed}
      <span className="animate-pulse text-indigo-400">|</span>
    </span>
  );
}

// Floating shape
function FloatingShape({ className, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    />
  );
}

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-navy-950 pt-20"
    >
      {/* Background shapes */}
      <FloatingShape
        className="w-96 h-96 bg-indigo-600 -top-20 -left-20"
        delay={0}
      />
      <FloatingShape
        className="w-80 h-80 bg-emerald-600 bottom-10 right-10"
        delay={2}
      />
      <FloatingShape
        className="w-64 h-64 bg-violet-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        delay={4}
      />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center gap-8 md:gap-10">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight"
        >
          Hola, soy{" "}
          <span className="gradient-text block md:inline">
            {personalInfo.shortName}
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 font-light"
        >
          <Typewriter words={roles} />
        </motion.p>

        {/* Location + Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 text-slate-500 text-sm"
        >
          <span className="flex items-center gap-1">
            <FiMapPin size={14} className="text-indigo-400" />
            {personalInfo.location}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-600" />
          <span className="flex items-center gap-1">
            <FiMail size={14} className="text-emerald-400" />
            {personalInfo.email}
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-4 md:mt-8"
        >
          <button
            onClick={() => handleScroll("#proyectos")}
            className="btn-primary px-7 py-3 text-base"
          >
            Ver proyectos
          </button>
          <a
            href={personalInfo.cv}
            target="_blank"
            rel="noreferrer"
            download="Mariano Arguello CV 2025.pdf"
            className="btn-secondary flex items-center gap-2 px-7 py-3 text-base"
          >
            <FiDownload size={16} />
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
