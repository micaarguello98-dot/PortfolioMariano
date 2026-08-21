import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { projects, videos } from "../data/portfolio";
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ─── Project Card (compacta / cuadrada) ──────────────────────────────────────
function ProjectCard({ project, onOpenGallery }) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass rounded-2xl overflow-hidden group flex flex-col w-full h-full"
    >
      {/* Imagen cuadrada */}
      <div className="h-48 relative flex items-center justify-center overflow-hidden">
        {project.image ? (
          <>
            <div
              className="absolute inset-0 scale-110"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(40px) brightness(0.4) saturate(1.2)",
              }}
            />
            <img
              src={project.image}
              alt={project.title}
              className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
            <span className="text-6xl select-none relative z-10">{project.emoji}</span>
          </>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-all"
          >
            <FiExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-sm mb-1">{project.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed flex-1 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-3">
          {project.gallery ? (
            <button
              onClick={() => onOpenGallery(project)}
              className="w-full text-center btn-primary text-xs py-1.5 cursor-pointer font-semibold"
            >
              {project.demoLabel || "Visualizar"}
            </button>
          ) : (
            <a href={project.demo} target="_blank" rel="noreferrer" className="block w-full text-center btn-primary text-xs py-1.5">
              {project.demoLabel || "Visualizar"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Video Card (compacta / cuadrada) ────────────────────────────────────────
function VideoCard({ video, onPlay }) {
  const thumbnail = video.thumbnail || `https://img.youtube.com/vi/${video.interviews?.[0]?.url?.split("v=")[1]}/maxresdefault.jpg`;
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass rounded-2xl overflow-hidden group flex flex-col w-full h-full"
    >
      <div
        className="h-48 relative flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => onPlay(video)}
      >
        <img src={thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative flex items-center justify-center">
            <span className="absolute w-16 h-16 rounded-full bg-white/10 animate-ping" />
            <div className="relative w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-2xl">
              <FiPlay className="text-rose-600 ml-0.5" size={16} fill="currentColor" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-sm mb-1">{video.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed flex-1 line-clamp-2">{video.description}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {video.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">{tag}</span>
          ))}
        </div>
        <div className="mt-3">
          <button
            onClick={() => onPlay(video)}
            className="w-full text-center btn-primary text-xs py-1.5 cursor-pointer font-semibold flex items-center justify-center gap-2"
          >
            <FiPlay size={12} /> Ver entrevistas
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Video Modal ──────────────────────────────────────────────────────────────
function VideoModal({ video, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = "unset"; window.removeEventListener("keydown", handleKey); };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/90 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="glass bg-navy-950/95 rounded-3xl p-6 md:p-8 max-w-md w-full relative z-10 shadow-2xl border border-white/10"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer">
          <FiX size={18} />
        </button>
        <div className="mb-6">
          <span className="text-rose-400 text-xs font-semibold uppercase tracking-widest">Producción Audiovisual</span>
          <h3 className="text-white font-bold text-xl mt-1">{video.title}</h3>
          <p className="text-slate-400 text-sm mt-1">{video.description}</p>
        </div>
        <div className="space-y-3">
          {video.interviews?.map((interview, i) => (
            <a key={i} href={interview.url} target="_blank" rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                  <FiPlay className="text-rose-400 ml-0.5" size={12} fill="currentColor" />
                </div>
                <div>
                  <span className="text-white text-sm font-medium group-hover:text-rose-300 transition-colors">{interview.title}</span>
                  {interview.role && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-medium">{interview.role}</span>}
                </div>
              </div>
              <FiExternalLink className="text-slate-500 group-hover:text-rose-400 transition-colors shrink-0" size={16} />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Gallery Modal ────────────────────────────────────────────────────────────
function GalleryModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  const handleNext = () => { setDirection(1); setCurrentIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1)); };
  const handlePrev = () => { setDirection(-1); setCurrentIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1)); };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 150 : -150, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.25 }, scale: { duration: 0.25 } } },
    exit: (dir) => ({ x: dir < 0 ? 150 : -150, opacity: 0, scale: 0.95, transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.25 }, scale: { duration: 0.25 } } }),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/90 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="glass bg-navy-950/95 rounded-3xl p-4 md:p-6 max-w-4xl w-full max-h-[90vh] flex flex-col relative z-10 shadow-2xl border border-white/10"
      >
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer z-20">
          <FiX size={20} />
        </button>
        <div className="relative flex-1 flex items-center justify-center min-h-[50vh] md:min-h-[70vh] bg-black/40 rounded-2xl border border-white/5 overflow-hidden p-4 mt-8">
          <button onClick={handlePrev} className="absolute left-4 z-10 p-3 rounded-full bg-black/40 border border-white/5 text-white/70 hover:text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg">
            <FiChevronLeft size={24} />
          </button>
          <div className="w-full h-full max-h-[70vh] flex items-center justify-center relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={currentIndex} src={project.gallery[currentIndex]} custom={direction}
                variants={slideVariants} initial="enter" animate="center" exit="exit"
                alt={`Diseño ${currentIndex + 1}`} className="max-w-full max-h-[70vh] object-contain rounded-xl select-none"
              />
            </AnimatePresence>
          </div>
          <button onClick={handleNext} className="absolute right-4 z-10 p-3 rounded-full bg-black/40 border border-white/5 text-white/70 hover:text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg">
            <FiChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {project.gallery.map((_, index) => (
            <button key={index} onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex ? "bg-violet-500 w-6" : "w-2.5 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Projects Section (Carousel) ─────────────────────────────────────────────
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  const allCards = [
    ...projects.map((p) => ({ type: "project", data: p })),
    ...videos.map((v) => ({ type: "video", data: v })),
  ];
  const total = allCards.length;

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, total - 1));
    setActiveIndex(clamped);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[activeIndex];
    if (card) card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeIndex]);

  return (
    <section id="proyectos" className="section-padding bg-navy-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Portafolio</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">Mis proyectos</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Trabajos y proyectos en los que he aplicado mis habilidades en diseño y producción digital.
          </p>
        </motion.div>

        {/* ── DESKTOP: grid completo, sin overflow ───────────────────── */}
        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {allCards.map((item) =>
            item.type === "project" ? (
              <ProjectCard key={`p-${item.data.id}`} project={item.data} onOpenGallery={setSelectedProject} />
            ) : (
              <VideoCard key={`v-${item.data.id}`} video={item.data} onPlay={setActiveVideo} />
            )
          )}
        </div>

        {/* ── MOBILE: carrusel 1 card a la vez ──────────────────────────── */}
        <div className="md:hidden">
          <div className="relative">
            {/* Track */}
            <div
              ref={trackRef}
              className="flex overflow-x-auto snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {allCards.map((item) => (
                <div
                  key={item.type === "project" ? `p-${item.data.id}` : `v-${item.data.id}`}
                  className="snap-center flex-shrink-0 w-[85vw] max-w-sm mx-2"
                >
                  {item.type === "project" ? (
                    <ProjectCard project={item.data} onOpenGallery={setSelectedProject} />
                  ) : (
                    <VideoCard video={item.data} onPlay={setActiveVideo} />
                  )}
                </div>
              ))}
            </div>

            {/* Flechas */}
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-8 z-10 p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer shadow-lg"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === total - 1}
              className="absolute right-0 top-1/2 -translate-y-8 z-10 p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer shadow-lg"
            >
              <FiChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {allCards.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex ? "bg-violet-500 w-6" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <GalleryModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
      <AnimatePresence>
        {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
      </AnimatePresence>
    </section>
  );
}



