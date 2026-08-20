import { personalInfo } from "../data/portfolio";
import { FiInstagram, FiHeart, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & Bio column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo12.jpeg" 
                alt="Logo" 
                className="h-10 w-auto object-contain rounded-xl border border-white/10" 
              />
              <div>
                <p className="text-white font-bold tracking-wide text-lg">{personalInfo.name}</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
              Apasionado por la producción digital, identidad visual de marca y soluciones interactivas creadas con dedicación y detalle.
            </p>
          </div>

          {/* Navigation Links column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest">Navegación</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-250 cursor-pointer flex items-center group"
                  >
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-indigo-400 mr-0 group-hover:mr-2 rounded transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Instagram column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest">Contacto directo</h4>
            <ul className="space-y-3 text-slate-400 text-sm font-light">
              <li className="flex items-center gap-2.5">
                <FiMail className="text-indigo-400 shrink-0" size={15} />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-emerald-400 shrink-0" size={15} />
                <a href="https://wa.me/5491165226293" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMapPin className="text-violet-400 shrink-0" size={15} />
                <span>{personalInfo.location}</span>
              </li>
            </ul>

            {/* Social network wrapper */}
            <div className="pt-2">
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-pink-400 hover:border-pink-500/30 hover:bg-white/10 transition-all duration-300 shadow-md group"
              >
                <FiInstagram size={16} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-medium">Seguime en Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and signature */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            Hecho con <FiHeart size={12} className="text-rose-500 fill-rose-500 animate-pulse" /> por Micaela Arg
          </p>
        </div>
      </div>
    </footer>
  );
}
