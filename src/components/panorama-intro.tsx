import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState, type MouseEvent } from "react";

import { site } from "@/content";

const titleLines = ["FISCHER", "FARMS"];
const easing = [0.16, 1, 0.3, 1] as const;

export function PanoramaIntro() {
  const reducedMotion = useReducedMotion();
  const [entered, setEntered] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });
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

  return (
    <AnimatePresence>
      <motion.section className="panorama-intro" aria-label="Fischer Farms entry" onPointerMove={handlePointerMove}>
        <div className="intro-dust" aria-hidden="true">{particles.map((particle) => <i key={particle.id} style={{ left: particle.left, top: particle.top, animationDuration: `${particle.duration}s`, animationDelay: `${particle.delay}s` }} />)}</div>
        <motion.div className="intro-glow" aria-hidden="true" animate={reducedMotion ? undefined : { opacity: [0.3, 0.75, 0.3], scale: [0.94, 1.06, 0.94] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="intro-line" initial={reducedMotion ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reducedMotion ? 0 : 0.8, ease: easing }} />
        <motion.div className="intro-reveal" initial={reducedMotion ? false : { clipPath: "inset(50% 0 50% 0)" }} animate={{ clipPath: "inset(0% 0 0% 0)" }} transition={{ duration: reducedMotion ? 0 : 1, delay: reducedMotion ? 0 : 0.8, ease: easing }}>
          <motion.div className="intro-copy" animate={reducedMotion ? undefined : { x: pointer.x, y: pointer.y, scale: [1, 1.015, 1] }} transition={{ x: { type: "spring", stiffness: 50, damping: 20 }, y: { type: "spring", stiffness: 50, damping: 20 }, scale: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}>
            <h1 aria-label={site.brand}>{titleLines.map((line, lineIndex) => <span className="intro-title-line" key={line}>{line.split("").map((letter, index) => <motion.span className="intro-letter" key={`${letter}-${index}`} initial={reducedMotion ? false : { y: "115%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 1 + lineIndex * 0.6 + (lineIndex === 0 ? index : line.length - 1 - index) * 0.06, ease: easing }}>{letter}</motion.span>)}</span>)}</h1>
            <motion.p className="intro-subtitle" initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 2.2, ease: easing }}>ORGANIC STRAWBERRY FARM · NORTH DAKOTA</motion.p>
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 2.5, ease: easing }}>
              <motion.button className="intro-enter" type="button" onPointerMove={handleButtonMove} onPointerLeave={() => setButtonOffset({ x: 0, y: 0 })} onClick={() => setEntered(true)} animate={{ x: buttonOffset.x, y: buttonOffset.y }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>ENTER</motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.p className="intro-credit" initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 2.8, ease: easing }}>WADE &amp; BREANN FISCHER</motion.p>
        <motion.div className="intro-curtain" aria-hidden="true" initial={{ clipPath: "inset(100% 0 0 0)" }} animate={entered ? { clipPath: "inset(0% 0 0 0)" } : undefined} transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.65, 0, 0.35, 1] }} />
        {entered && <motion.div className="intro-coming" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: reducedMotion ? 0 : 0.55 }}><p>Coming soon…</p></motion.div>}
      </motion.section>
    </AnimatePresence>
  );
}