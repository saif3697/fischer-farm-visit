import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { site } from "@/content";
import { Button } from "@/components/ui/button";

type ExperienceKey = keyof typeof site.experiences;

export function ExperiencePage({ experience }: { experience: ExperienceKey }) {
  const content = site.experiences[experience];
  const reducedMotion = useReducedMotion();
  const titleWords = content.title.split(" ");

  return <>
    <section className={`experience-hero experience-hero-${experience}`}>
      <motion.img src={content.image} alt={content.imageAlt} animate={reducedMotion ? undefined : { scale: [1.04, 1, 1.04] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
      <div className="experience-scrim" />
      <div className="experience-lights" aria-hidden="true">{Array.from({ length: 14 }, (_, index) => <i key={index} style={{ left: `${(index * 17 + 7) % 100}%`, top: `${(index * 31 + 13) % 100}%`, animationDelay: `${index * -0.7}s` }} />)}</div>
      <motion.div className="experience-hero-content" initial={reducedMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}>
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{titleWords.map((word, index) => <motion.span key={`${word}-${index}`} initial={reducedMotion ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ delay: reducedMotion ? 0 : 0.16 + index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>{word} </motion.span>)}</h1>
        <p>{content.text}</p>
        <Button asChild variant="hero" size="lg"><Link to="/visit">Plan your experience <ArrowRight aria-hidden="true" /></Link></Button>
      </motion.div>
    </section>
    <section className="experience-intro">
      <p className="eyebrow">Fischer Farms</p>
      <h2>Made slowly.<br />Remembered deeply.</h2>
      <p>{content.text}</p>
    </section>
    <section className="experience-moments" aria-label={`${experience} highlights`}>
      {content.moments.map((moment, index) => <motion.article key={moment} initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : index * 0.1 }}>
        <span>0{index + 1}</span><Sparkles aria-hidden="true" size={18} /><h3>{moment}</h3><p>{moment === "Soil" ? "The foundation for every season begins below the surface." : "A thoughtful part of the Fischer Farms experience, shaped by the seasons."}</p>
      </motion.article>)}
    </section>
    {experience === "investment" && <section className="investment-note"><p className="eyebrow">A meaningful conversation</p><h2>Investing in land, family, experience, and future seasons.</h2><p>Opportunities, availability, and terms are shared directly with Fischer Farms. This page is not an offer or a promise of financial return.</p><Button asChild variant="farm" size="lg"><Link to="/visit">Start a conversation <ArrowRight aria-hidden="true" /></Link></Button></section>}
    <section className="experience-closing"><p className="eyebrow">Come closer</p><h2>{experience === "harvest" ? "From soil to table." : experience === "camping" ? "Make room for the sky." : "A place for what matters."}</h2><Button asChild variant="farm" size="lg"><Link to="/visit">Plan a visit <ArrowRight aria-hidden="true" /></Link></Button></section>
  </>;
}