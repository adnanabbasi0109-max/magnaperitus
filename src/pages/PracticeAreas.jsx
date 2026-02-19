import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { LegalDivider } from "../components/LawVisuals";
import PageMeta from "../components/PageMeta";
import PracticeAreaCard from "../components/PracticeAreaCard";
import practiceAreas from "../data/practiceAreas";

export default function PracticeAreas() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <PageMeta
        title="Practice Areas"
        description="Explore our 12+ practice areas spanning litigation, corporate law, family law, and more."
        path="/practice-areas"
      />

      {/* ─── PAGE HERO ─── */}
      <section className="relative py-32 pt-40 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/courthouse-columns.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-48 h-48 border-l-2 border-t-2 border-gold/20 pointer-events-none z-10" />
        <div className="absolute bottom-0 right-0 w-48 h-48 border-r-2 border-b-2 border-gold/20 pointer-events-none z-10" />

        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <p className="font-ui text-sm uppercase tracking-[0.3em] text-gold mb-4">
            PRACTICE AREAS
          </p>

          <h1 className="font-display text-6xl md:text-7xl text-ivory font-bold">
            Comprehensive Legal Services
          </h1>

          <div className="w-24 h-[2px] bg-gold mx-auto mt-6 mb-6" />

          <p className="text-ivory/70 font-body text-xl max-w-3xl mx-auto">
            Magnaperitus offers comprehensive legal services across the full
            spectrum of civil, commercial, regulatory, and personal law.
          </p>
        </motion.div>
      </section>

      {/* ─── PRACTICE AREAS GRID ─── */}
      <section className="bg-ivory py-20 relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 relative z-10">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard
              key={area.id}
              icon={area.icon}
              title={area.title}
              shortDescription={area.shortDescription}
              description={area.description}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/courtroom.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>

        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center px-6 relative z-10"
        >
          <LegalDivider className="w-64 md:w-80 h-auto mx-auto mb-8 opacity-60" />
          <h2 className="font-display text-4xl text-ivory">
            Need Legal Guidance?
          </h2>

          <p className="font-body text-lg text-ivory/70 mt-4">
            Our team is ready to assist you across any of these practice areas.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-gold text-navy font-ui font-semibold px-10 py-4 rounded hover:bg-gold-light transition mt-8"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </>
  );
}
