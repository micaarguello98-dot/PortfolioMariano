import { useState } from "react";
import { motion } from "framer-motion";
import { skills, skillCategories } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const categoryColors = {
  Diseño: {
    bar: "from-indigo-500 to-violet-500",
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    active: "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30",
  },
  Contenido: {
    bar: "from-emerald-500 to-teal-500",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    active: "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30",
  },
  Producción: {
    bar: "from-violet-500 to-indigo-500",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    active: "bg-violet-500 text-white shadow-lg shadow-violet-500/30",
  },
};

function SkillBar({ skill, index }) {
  const colors = categoryColors[skill.category];
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05 }}
      className="glass rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-white font-medium text-sm">{skill.name}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full border ${colors.badge}`}
          >
            {skill.category}
          </span>
        </div>
        <span className="text-slate-400 text-sm font-medium">{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("Todos");
  const categories = ["Todos", ...skillCategories];

  const filtered =
    active === "Todos" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="section-padding bg-navy-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
            Habilidades
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
            Mis skills
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Herramientas y tecnologías que manejo en diseño, producción de contenido y gestión de marca.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => {
            const colors = cat !== "Todos" ? categoryColors[cat] : null;
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? cat === "Todos"
                      ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30"
                      : colors.active
                    : "glass text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={active}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
