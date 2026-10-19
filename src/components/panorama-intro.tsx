import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import { useNavigate } from "@tanstack/react-router";

import { site } from "@/content";

const titleLines = ["FISCHER", "FARMS"];
const easing = [0.16, 1, 0.3, 1] as const;

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  caption: string;
};

export function PanoramaIntro() {
  const reducedMotion = useReducedMotion();
  const navigate = useNavigate();
  const [entered, setEntered] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const particles = useMemo(() => Array.from({ length: 26 }, (_, index) => ({
    id: index,
    left: `${(index * 37 + 11) % 100}%`,
    top: `${(index * 53 + 7) % 100}%`,
    duration: 8 + (index % 7) * 1.7,
    delay: (index % 6) * -1.2,
  })), []);

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const { innerWidth, innerHeight } = window;
    setPointer({ x: (event.clientX / innerWidth - 0.5) * 24, y: (event.clientY / innerHeight - 0.5) * 24 });
  };

  const handleButtonMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (reducedMotion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    setButtonOffset({ x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 12, y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 12 });
  };

  useEffect(() => {
    if (!entered) return;
    const transitionId = window.setTimeout(() => {
      navigate({ to: "/home" });
    }, reducedMotion ? 0 : 800);
    return () => window.clearTimeout(transitionId);
  }, [entered, navigate, reducedMotion]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const galleryItems: GalleryItem[] = [
    { src: site.images.strawberryPortrait, alt: "A Fischer Farms grower planting in a field with a hand trowel", label: "Photo 01 · Planting by hand", caption: "Care begins at the soil." },
    { src: site.images.fieldPortrait, alt: "A Fischer Farms grower setting young plants into the soil", label: "Photo 02 · Growing together", caption: "Every season starts with the land." },
  ];

  return (
    <AnimatePresence>
      <motion.section className="panorama-intro" aria-label="Fischer Farms entry" onPointerMove={handlePointerMove}>
        <div className="intro-dust" aria-hidden="true">{particles.map((particle) => <i key={particle.id} style={{ left: particle.left, top: particle.top, animationDuration: `${particle.duration}s`, animationDelay: `${particle.delay}s` }} />)}</div>
        <motion.header className="intro-topbar" initial={reducedMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 0.6 }}>
          <span>Fischer Farms</span><span>North Dakota · USA</span>
        </motion.header>
        <motion.div className="intro-glow" aria-hidden="true" animate={reducedMotion ? false : { opacity: [0.3, 0.75, 0.3], scale: [0.94, 1.06, 0.94] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="intro-line" initial={reducedMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reducedMotion ? 0 : 0.8, ease: easing }} />
        <motion.div className="intro-reveal" initial={reducedMotion ? false : { clipPath: "inset(50% 0 50% 0)" }} animate={{ clipPath: "inset(0% 0 0% 0)" }} transition={{ duration: reducedMotion ? 0 : 1, delay: reducedMotion ? 0 : 0.8, ease: easing }}>
          <motion.div className="intro-copy" animate={reducedMotion ? false : { x: pointer.x, y: pointer.y }} transition={{ x: { type: "spring", stiffness: 50, damping: 20 }, y: { type: "spring", stiffness: 50, damping: 20 } }}>
            <motion.h1 aria-label={site.brand} animate={reducedMotion ? false : { scale: [1, 1.015, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>{titleLines.map((line, lineIndex) => <span className="intro-title-line" key={line}>{line.split("").map((letter, index) => <motion.span className="intro-letter" key={`${letter}-${index}`} initial={reducedMotion ? false : { y: "115%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 1 + lineIndex * 0.6 + (lineIndex === 0 ? index : line.length - 1 - index) * 0.06, ease: easing }}>{letter}</motion.span>)}</span>)}</motion.h1>
            <motion.div className="intro-divider" initial={reducedMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 2.05, ease: easing }} />
            <motion.p className="intro-subtitle" initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 2.2, ease: easing }}>Organic Farm · Honey · Farm Stay · Strawberries</motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="intro-gallery" aria-label="Fischer Farms photo gallery" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 2.4 }}>
          {galleryItems.map((item, index) => <motion.button key={item.label} type="button" className="intro-photo" onClick={() => setActiveImage(item)} initial={reducedMotion ? false : { clipPath: "inset(0 0 100% 0)", y: 40, scale: 1.08 }} animate={{ clipPath: "inset(0 0 0% 0)", y: 0, scale: 1 }} transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 2.55 + index * 0.15, ease: easing }}>
            <motion.img src={item.src} alt={item.alt} animate={reducedMotion ? false : { scale: [1, 1.06, 1] }} transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />
            <span className="intro-photo-shade" aria-hidden="true" /><span className="intro-photo-label">{item.label}</span><span className="intro-photo-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
          </motion.button>)}
        </motion.div>
        <motion.article className="intro-story" initial={reducedMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reducedMotion ? 0 : 0.8, ease: easing }}>
          <p className="intro-story-kicker">— {site.introStory.eyebrow} —</p><h2>{site.introStory.headline}</h2>
          {site.introStory.paragraphs.map((paragraph) => <motion.p key={paragraph} initial={reducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reducedMotion ? 0 : 0.65, ease: easing }}>{paragraph}</motion.p>)}
          <div className="intro-stats">{[["04", "Revenue pillars"], ["365", "Days of land"], ["01", "Family"]].map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div>
          <motion.button className="intro-enter" type="button" onPointerMove={handleButtonMove} onPointerLeave={() => setButtonOffset({ x: 0, y: 0 })} onClick={() => setEntered(true)} animate={{ x: buttonOffset.x, y: buttonOffset.y }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>Explore the farm</motion.button>
        </motion.article>
        <motion.p className="intro-credit" initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 2.8, ease: easing }}>WADE &amp; BREANN FISCHER</motion.p>
        <motion.div className="intro-curtain" aria-hidden="true" initial={{ clipPath: "inset(100% 0 0 0)" }} animate={entered ? { clipPath: "inset(0% 0 0 0)" } : false} transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.65, 0, 0.35, 1] }} />
        <AnimatePresence>{activeImage ? <motion.dialog className="intro-lightbox" open aria-label={activeImage.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveImage(null)}><motion.div initial={{ scale: .94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: .94, opacity: 0 }} onClick={(event) => event.stopPropagation()}><button type="button" aria-label="Close enlarged photo" onClick={() => setActiveImage(null)}><X size={20} /></button><img src={activeImage.src} alt={activeImage.alt} /><p>{activeImage.caption}</p></motion.div></motion.dialog> : null}</AnimatePresence>
      </motion.section>
    </AnimatePresence>
  );
}