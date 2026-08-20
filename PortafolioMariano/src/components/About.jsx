import { motion } from "framer-motion";
import { personalInfo, education, experience } from "../data/portfolio";
import { FiBriefcase, FiBook, FiUser } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-navy-950 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Sobre mí
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
            Quién soy
          </h2>
        </motion.div>

        {/* Grid Container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          {/* Top: Profile Bio (Spans full width) */}
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FiUser className="text-indigo-400" size={20} />
              <h3 className="text-white font-bold text-xl">Perfil</h3>
            </div>
            <div className="glass rounded-3xl p-6 md:p-8 border-l-4 border-l-indigo-500 shadow-xl bg-white/[0.01]">
              <p className="text-slate-300 leading-relaxed text-base md:text-lg font-light">
                {personalInfo.bio}
              </p>
            </div>
          </motion.div>

          {/* Bottom Left: Education */}
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FiBook className="text-indigo-400" size={20} />
              <h3 className="text-white font-bold text-xl">Educación</h3>
            </div>
            <div className="space-y-4">
              {education.map((ed, i) => (
                <div key={i} className="glass rounded-2xl p-5 hover:border-indigo-500/20 transition-all duration-300 shadow-md">
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-base leading-snug">
                      {ed.title}
                    </p>
                    <p className="text-slate-400 text-sm font-medium mt-1">{ed.institution}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="text-xs text-slate-500 font-medium">{ed.period}</span>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                          ed.status === "Cursando último año"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-white/5 text-slate-400 border border-white/10"
                        }`}
                      >
                        {ed.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Right: Experience */}
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FiBriefcase className="text-emerald-400" size={20} />
              <h3 className="text-white font-bold text-xl">Experiencia</h3>
            </div>
            <div className="space-y-4">
              {experience.map((exp, i) => (
                <div key={i} className="glass rounded-2xl p-5 hover:border-emerald-500/20 transition-all duration-300 shadow-md">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-white font-bold text-base leading-snug">
                          {exp.title}
                        </p>
                        {exp.current && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                            Actual
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-400 text-sm font-semibold mt-1">
                        {exp.company}
                      </p>
                      <p className="text-slate-500 text-xs mt-1">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="mt-4 space-y-2 ml-4">
                    {exp.description.map((d, j) => (
                      <li key={j} className="text-slate-300 text-sm flex gap-2 leading-relaxed">
                        <span className="text-indigo-400 mt-0.5 shrink-0 select-none">▸</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
