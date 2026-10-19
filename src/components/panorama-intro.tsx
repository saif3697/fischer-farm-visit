import { Link, useRouter } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { site } from "@/content";
import { Button } from "@/components/ui/button";

const letters = site.brand.split("");

export function PanoramaIntro() {
  const router = useRouter();
  const reducedMotion = useReducedMotion();
  const [exiting, setExiting] = useState(false);
  const [counter, setCounter] = useState(0);

  const enterFarm = () => {
    if (exiting) return;
    sessionStorage.setItem("fischer_intro_seen", "true");
    setExiting(true);
    const transitionId = window.setTimeout(() => { void router.navigate({ to: "/home" }); }, reducedMotion ? 0 : 900);
    return () => window.clearTimeout(transitionId);
  };

  useEffect(() => {
    if (sessionStorage.getItem("fischer_intro_seen")) {
      void router.navigate({ to: "/home", replace: true });
      return;
    }
    if (reducedMotion) {
      setCounter(100);
      return;
    }
    const startedAt = performance.now();
    let frameId = 0;
    const update = (time: number) => {
      setCounter(Math.min(100, Math.round(((time - startedAt) / 4200) * 100)));
      if (time - startedAt < 4200) frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    const advanceId = window.setTimeout(() => {
      sessionStorage.setItem("fischer_intro_seen", "true");
      void router.navigate({ to: "/home" });
    }, 10000);
    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(advanceId);
    };
  }, [reducedMotion, router]);

  const cinematic = !reducedMotion;
  return (
    <AnimatePresence>
      <motion.section className="panorama-intro" aria-label="Fischer Farms introduction" exit={{ opacity: 0 }}>
        <motion.div className="intro-line" initial={cinematic ? { scaleX: 0 } : false} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} />
        <motion.img
          className="intro-image"
          src={site.images.intro}
          alt="Golden-hour strawberry field at Fischer Farms"
          initial={cinematic ? { clipPath: "inset(50% 0 50% 0)", scale: 1.25, x: "-4%" } : false}
          animate={exiting ? { scale: 1.4, filter: "blur(14px)", opacity: 0 } : { clipPath: "inset(0% 0 0% 0)", scale: 1, x: "0%" }}
          transition={exiting ? { duration: 0.9, ease: [0.65, 0, 0.35, 1] } : { duration: 1.4, delay: cinematic ? 1.6 : 0, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div className="intro-scrim" animate={exiting ? { clipPath: "inset(0 0 100% 0)" } : { clipPath: "inset(0 0 0 0)" }} transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }} />
        <motion.p className="intro-corner intro-brand" initial={cinematic ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ delay: 4.2 }}>FISCHER FARMS</motion.p>
        <motion.p className="intro-corner intro-counter" initial={cinematic ? { opacity: 0 } : false} animate={{ opacity: 1 }} transition={{ delay: 4.2 }}>{String(counter).padStart(2, "0")}</motion.p>
        <div className="intro-copy">
          <h1 aria-label={site.brand}>
            {letters.map((letter, index) => <motion.span key={`${letter}-${index}`} initial={cinematic ? { y: "110%", opacity: 0 } : false} animate={exiting ? { y: "110%", opacity: 0 } : { y: "0%", opacity: 1 }} transition={{ duration: 0.65, delay: cinematic ? 2.2 + index * 0.055 : 0, ease: [0.16, 1, 0.3, 1] }}>{letter === " " ? "\u00a0" : letter}</motion.span>)}
          </h1>
          <motion.p className="intro-farms" initial={cinematic ? { opacity: 0, letterSpacing: "0.4em" } : false} animate={exiting ? { opacity: 0, y: 24 } : { opacity: 1, letterSpacing: "0.18em", y: 0 }} transition={{ duration: 0.8, delay: cinematic ? 2.9 : 0 }}>FARMS</motion.p>
          <motion.div className="intro-divider" initial={cinematic ? { scaleX: 0 } : false} animate={{ scaleX: 1 }} transition={{ duration: 0.65, delay: cinematic ? 3.3 : 0 }} />
          <motion.p className="intro-subtitle" initial={cinematic ? { opacity: 0, y: 14 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: cinematic ? 3.5 : 0 }}>ORGANIC STRAWBERRY FARM · NORTH DAKOTA · WADE &amp; BREANN</motion.p>
          <motion.div initial={cinematic ? { opacity: 0, y: 16 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: cinematic ? 4 : 0 }}>
            <Button variant="intro" size="lg" onClick={enterFarm}>Enter the farm</Button>
          </motion.div>
        </div>
        <Button variant="text" className="intro-skip" onClick={enterFarm}>Skip <span aria-hidden="true">→</span></Button>
        <Link className="sr-only" to="/home">Skip the introduction and enter Fischer Farms</Link>
      </motion.section>
    </AnimatePresence>
  );
}