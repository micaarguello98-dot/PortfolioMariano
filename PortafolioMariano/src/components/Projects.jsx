import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { projects, videos } from "../data/portfolio";
import { FiExternalLink, FiX, FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

function ProjectCard({ project, onOpenGallery }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass rounded-3xl overflow-hidden group flex flex-col"
    >
      {/* Banner image or gradient banner */}
      <div
        className="h-40 relative flex items-center justify-center overflow-hidden"
      >
        {project.image ? (
          <>
            {/* Blurred background — elimina los espacios negros */}
            <div
              className="absolute inset-0 scale-110"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(40px) brightness(0.4) saturate(1.2)",
              }}
            />
            {/* Imagen principal sobre el fondo */}
            <img
              src={project.image}
              alt={project.title}
              className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
            <span className="text-6xl select-none relative z-10">{project.emoji}</span>
          </>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 z-10">
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
        <h3 className="text-white font-semibold text-base mb-1.5">{project.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-3">
          {project.gallery ? (
            <button
              onClick={() => onOpenGallery(project)}
              className="flex-1 text-center btn-primary text-xs py-2 cursor-pointer font-semibold"
            >
              {project.demoLabel || "Visualizar"}
            </button>
          ) : (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center btn-primary text-xs py-2"
            >
              {project.demoLabel || "Visualizar"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function VideoCard({ video, onPlay }) {
  const thumbnail = video.thumbnail || `https://img.youtube.com/vi/${video.interviews?.[0]?.url?.split('v=')[1]}/maxresdefault.jpg`;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass rounded-3xl overflow-hidden group flex flex-col"
    >
      {/* Thumbnail with play button */}
      <div
        className="h-40 relative flex items-center justify-center overflow-hidden cursor-pointer"
        onClick={() => onPlay(video)}
      >
        <img
          src={thumbnail}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative flex items-center justify-center">
            <span className="absolute w-16 h-16 rounded-full bg-white/10 animate-ping" />
            <div className="relative w-11 h-11 rounded-full bg-white/90 flex items-center justify-center shadow-2xl">
              <FiPlay className="text-rose-600 ml-0.5" size={16} fill="currentColor" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-base mb-1.5">{video.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed flex-1">{video.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {video.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-3">
          <button
            onClick={() => onPlay(video)}
            className="flex-1 text-center btn-primary text-xs py-2 cursor-pointer font-semibold flex items-center justify-center gap-2"
          >
            <FiPlay size={12} />
            Ver entrevistas
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function VideoModal({ video, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="glass bg-navy-950/95 rounded-3xl p-6 md:p-8 max-w-md w-full relative z-10 shadow-2xl border border-white/10"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
        >
          <FiX size={18} />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-rose-400 text-xs font-semibold uppercase tracking-widest">Producción Audiovisual</span>
          <h3 className="text-white font-bold text-xl mt-1">{video.title}</h3>
          <p className="text-slate-400 text-sm mt-1">{video.description}</p>
        </div>

        {/* Interview links */}
        <div className="space-y-3">
          {video.interviews?.map((interview, i) => (
            <a
              key={i}
              href={interview.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0">
                  <FiPlay className="text-rose-400 ml-0.5" size={12} fill="currentColor" />
                </div>
                <div>
                  <span className="text-white text-sm font-medium group-hover:text-rose-300 transition-colors">{interview.title}</span>
                  {interview.role && (
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-medium">{interview.role}</span>
                  )}
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

function GalleryModal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === project.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.gallery.length - 1 : prevIndex - 1
    );
  };

  // Keyboard navigation
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
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="glass bg-navy-950/95 rounded-3xl p-4 md:p-6 max-w-4xl w-full max-h-[90vh] flex flex-col relative z-10 shadow-2xl border border-white/10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95 transition-all cursor-pointer z-20"
        >
          <FiX size={20} />
        </button>

        {/* Carousel Area */}
        <div className="relative flex-1 flex items-center justify-center min-h-[50vh] md:min-h-[70vh] bg-black/40 rounded-2xl border border-white/5 overflow-hidden p-4 mt-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 z-10 p-3 rounded-full bg-black/40 border border-white/5 text-white/70 hover:text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Image Display */}
          <div className="w-full h-full max-h-[70vh] flex items-center justify-center relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={currentIndex}
                src={project.gallery[currentIndex]}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                alt={`Diseño ${currentIndex + 1}`}
                className="max-w-full max-h-[70vh] object-contain rounded-xl select-none"
              />
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 z-10 p-3 rounded-full bg-black/40 border border-white/5 text-white/70 hover:text-white hover:bg-black/60 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {project.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "bg-violet-500 w-6" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="proyectos" className="section-padding bg-navy-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
            Portafolio
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
            Mis proyectos
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Trabajos y proyectos en los que he aplicado mis habilidades en diseño y producción digital.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenGallery={setSelectedProject}
            />
          ))}
          {videos.map((video) => (
            <VideoCard key={`video-${video.id}`} video={video} onPlay={setActiveVideo} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <GalleryModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
