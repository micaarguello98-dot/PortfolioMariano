import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import {
  FiMail,
  FiInstagram,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const socialLinks = [
  {
    icon: FiInstagram,
    href: personalInfo.socials.instagram,
    label: "Instagram",
    color: "hover:text-pink-400",
  },
];

const contactInfo = [
  {
    icon: FiMail,
    label: "Correo Electrónico",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    glow: "group-hover:shadow-indigo-500/10 group-hover:border-indigo-500/30",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: personalInfo.phone,
    href: "https://wa.me/5491165226293",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    glow: "group-hover:shadow-emerald-500/10 group-hover:border-emerald-500/30",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="pt-6 pb-10 md:pt-8 md:pb-12 scroll-mt-16 bg-navy-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center mb-6"
        >
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">
            Contacto
          </span>
          <h2 className="mt-1 text-4xl md:text-5xl font-extrabold text-white">
            Hablemos
          </h2>
          <p className="mt-2 text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            ¿Tenés un proyecto en mente o querés trabajar juntos? Escribime, estoy disponible.
          </p>
        </motion.div>

        {/* Contact Info grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6"
        >
          {contactInfo.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "WhatsApp" ? "_blank" : undefined}
              rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`glass rounded-3xl p-5 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-lg relative overflow-hidden ${item.glow}`}
            >
              {/* Radial gradient background highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Container */}
              <div className={`${item.bg} ${item.color} p-3.5 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                <item.icon size={24} />
              </div>
              
              {/* Label */}
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-1 font-semibold">
                {item.label}
              </p>
              
              {/* Value */}
              <p className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors break-all leading-relaxed">
                {item.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Social links bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="glass rounded-3xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/5 bg-navy-950/40"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-white font-semibold text-sm">Seguime en Instagram</h4>
            <p className="text-slate-500 text-xs mt-0.5">hablemos o mirá mis últimos trabajos!</p>
          </div>
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                className={`p-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 transition-all duration-300 ${color} hover:border-white/20 hover:scale-110 hover:bg-white/10 shadow-md`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
