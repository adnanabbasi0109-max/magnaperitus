import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Award, Users, Scale } from "lucide-react";

import PageMeta from "../components/PageMeta";
import { LegalDivider } from "../components/LawVisuals";
import SectionHeading from "../components/SectionHeading";
import StatCounter from "../components/StatCounter";
import PracticeAreaCard from "../components/PracticeAreaCard";
import practiceAreas from "../data/practiceAreas";

/* ──────────────────────────────────────────────
   Animation variants
   ────────────────────────────────────────────── */

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

/* ──────────────────────────────────────────────
   Reusable scroll-triggered wrapper
   ────────────────────────────────────────────── */

function InViewSection({ children, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   HOME PAGE COMPONENT
   ══════════════════════════════════════════════ */

export default function Home() {
  const firmName = "MAGNAPERITUS";

  return (
    <>
      <PageMeta
        title="Home"
        description="Magnaperitus — Bhopal's foremost full-service law firm, commanding Central India's most complex legal landscapes with precision, integrity, and innovation."
        path="/"
      />

      <HeroSection firmName={firmName} />
      <QuickStatsBar />
      <AboutSnippet />
      <PracticeAreasGrid />
      <WhyMagnaperitus />
      <LeadershipSpotlight />
      <SectorsServed />
      <FooterCTA />
    </>
  );
}

/* ──────────────────────────────────────────────
   1. HERO SECTION
   ────────────────────────────────────────────── */

function HeroSection({ firmName }) {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* ── Full-bleed courthouse background image ── */}
      <div className="absolute inset-0">
        <img
          src="/images/courthouse-columns.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark navy overlay for readability */}
        <div className="absolute inset-0 bg-navy/80" />
        {/* Gold gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-transparent" />
      </div>

      {/* ── Large visible gold corner frames ── */}
      <div className="absolute top-6 left-6 w-32 h-32 border-l-2 border-t-2 border-gold/30 pointer-events-none z-10" />
      <div className="absolute top-6 right-6 w-32 h-32 border-r-2 border-t-2 border-gold/30 pointer-events-none z-10" />
      <div className="absolute bottom-6 left-6 w-32 h-32 border-l-2 border-b-2 border-gold/30 pointer-events-none z-10" />
      <div className="absolute bottom-6 right-6 w-32 h-32 border-r-2 border-b-2 border-gold/30 pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full py-20 md:py-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12">
          {/* Text content */}
          <div className="w-full lg:w-[65%]">
            <motion.h1
              className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory font-bold tracking-wide"
              initial={{ opacity: 0, y: 50, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {firmName}
            </motion.h1>

            <motion.div
              className="w-24 h-[3px] bg-gold mt-6 mb-6"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            />

            <motion.p
              className="font-display text-2xl md:text-3xl text-gold italic"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
            >
              Justice Navigated. Excellence Delivered.
            </motion.p>

            <motion.p
              className="text-ivory/70 font-body text-lg max-w-xl mt-6"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1.6}
            >
              Bhopal&rsquo;s foremost full-service law firm, commanding Central
              India&rsquo;s most complex legal landscapes with precision,
              integrity, and innovation.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mt-10"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={2.0}
            >
              <Link
                to="/contact"
                className="inline-block bg-gold text-navy font-ui font-semibold px-8 py-3 rounded hover:bg-gold-light transition"
              >
                Get in Touch
              </Link>
              <Link
                to="/practice-areas"
                className="inline-block border-2 border-gold/60 text-gold font-ui font-semibold px-8 py-3 rounded hover:bg-gold/10 transition"
              >
                Our Practice Areas
              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="font-ui text-xs uppercase tracking-[0.2em] text-gold/60 mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   2. QUICK STATS BAR
   ────────────────────────────────────────────── */

function QuickStatsBar() {
  return (
    <section className="stats-gradient py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter end={15} suffix="+" label="Years of Legal Excellence" />
          <StatCounter end={5} label="States of Presence" />
          <StatCounter end={12} suffix="+" label="Practice Areas" />
          <StatCounter end={10} suffix="+" label="Courts & Tribunals" />
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   3. ABOUT SNIPPET
   ────────────────────────────────────────────── */

function AboutSnippet() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-ivory py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading title="About Magnaperitus" centered />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center"
        >
          {/* LEFT — Law library image */}
          <motion.div variants={fadeUp} custom={0.1}>
            <div className="relative">
              <img
                src="/images/library-shelves.jpg"
                alt="Law library"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
              {/* Gold accent border overlay */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-gold/40 rounded-lg pointer-events-none" />
            </div>
          </motion.div>

          {/* RIGHT — Text content */}
          <div>
            <motion.p
              className="font-body text-lg text-charcoal/80 leading-relaxed"
              variants={fadeUp}
              custom={0.2}
            >
              Founded on the principle that legal excellence demands not just
              knowledge but mastery, Magnaperitus has established itself as Central
              India&rsquo;s premier full-service law firm. From our headquarters in
              Bhopal, we serve clients across five states with the depth of a
              regional specialist and the sophistication of a national practice.
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              variants={fadeUp}
              custom={0.4}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
            >
              {[
                { icon: MapPin, text: "5 States of Presence" },
                { icon: Award, text: "15+ Years of Excellence" },
                { icon: Users, text: "Full-Service Legal Team" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center justify-center gap-3 bg-ivory-dark rounded-lg px-4 py-3 border border-gold/20"
                >
                  <item.icon size={20} className="text-gold flex-shrink-0" />
                  <span className="font-ui text-sm text-navy font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} custom={0.6} className="mt-8">
              <Link
                to="/about"
                className="inline-block bg-gold text-navy font-ui font-semibold px-8 py-3 rounded hover:bg-gold-light transition"
              >
                Meet Our Team
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   4. PRACTICE AREAS GRID
   ────────────────────────────────────────────── */

function PracticeAreasGrid() {
  const displayedAreas = practiceAreas.slice(0, 6);

  return (
    <section className="bg-ivory-dark py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header with gavel image */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center mb-14">
          <div>
            <SectionHeading
              title="Our Practice Areas"
              subtitle="Comprehensive legal services across the full spectrum of law"
            />
          </div>
          <div className="hidden lg:block">
            <img
              src="/images/gavel-justice.jpg"
              alt="Scales of Justice"
              className="w-64 h-44 object-cover rounded-lg shadow-lg border border-gold/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedAreas.map((area, index) => (
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

        <InViewSection className="text-center mt-12">
          <motion.div variants={fadeUp} custom={0.3}>
            <Link
              to="/practice-areas"
              className="inline-block bg-gold text-navy font-ui font-semibold px-8 py-3 rounded hover:bg-gold-light transition"
            >
              View All Practice Areas
            </Link>
          </motion.div>
        </InViewSection>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   5. WHY MAGNAPERITUS
   ────────────────────────────────────────────── */

const whyReasons = [
  {
    numeral: "01",
    title: "Regional Depth, National Vision",
    icon: MapPin,
    text: "With a commanding presence across five states and active practice before multiple High Courts and national tribunals, Magnaperitus combines deep regional knowledge with the strategic vision of a national practice.",
  },
  {
    numeral: "02",
    title: "End-to-End Legal Solutions",
    icon: Scale,
    text: "From initial consultation to final resolution, we provide seamless legal support across litigation, corporate advisory, regulatory compliance, and beyond \u2014 ensuring no aspect of your legal needs goes unaddressed.",
  },
  {
    numeral: "03",
    title: "Innovation in Legal Practice",
    icon: Award,
    text: "We embrace modern legal methodologies while honouring the traditions of the profession. Our approach combines technology-enabled research, strategic case management, and client-centric communication.",
  },
];

function WhyMagnaperitus() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Full-bleed courtroom background */}
      <div className="absolute inset-0">
        <img
          src="/images/courtroom.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading title="Why Magnaperitus" centered light />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14"
        >
          {whyReasons.map((reason) => (
            <motion.div
              key={reason.numeral}
              variants={fadeUp}
              className="bg-navy-light/60 backdrop-blur-sm rounded-lg p-8 border border-gold/20"
            >
              <div className="w-12 h-12 rounded-full bg-gold/15 flex items-center justify-center mb-6">
                <reason.icon size={24} className="text-gold" />
              </div>
              <span className="font-display text-4xl text-gold/40 block mb-2">
                {reason.numeral}
              </span>
              <h3 className="font-display text-2xl text-ivory font-bold mb-4">
                {reason.title}
              </h3>
              <p className="font-body text-ivory/70 leading-relaxed">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   6. LEADERSHIP SPOTLIGHT
   ────────────────────────────────────────────── */

function LeadershipSpotlight() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-ivory py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center"
        >
          {/* Left — office / law books image */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="hidden lg:flex flex-col items-center"
          >
            <div className="relative">
              <img
                src="/images/law-books.jpg"
                alt="Law books"
                className="w-56 h-72 object-cover rounded-lg shadow-xl border-2 border-gold/30"
              />
              <div className="absolute -bottom-2 -left-2 w-full h-full border-2 border-gold/20 rounded-lg pointer-events-none" />
            </div>
          </motion.div>

          {/* Right — text content */}
          <div className="border-l-2 border-gold pl-8">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="font-ui text-sm uppercase tracking-[0.3em] text-gold mb-4"
            >
              The Mind Behind Magnaperitus
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={0.15}
              className="font-display text-5xl md:text-6xl text-navy font-bold"
            >
              Shantanoo Saxena
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.3}
              className="font-ui text-lg text-gold-dark mt-2"
            >
              Founder &amp; Lead Counsel
            </motion.p>

            <motion.hr
              variants={fadeIn}
              custom={0.45}
              className="gold-rule my-8 max-w-md"
            />

            <motion.p
              variants={fadeUp}
              custom={0.5}
              className="text-charcoal/80 font-body text-lg max-w-3xl leading-relaxed"
            >
              A lawyer of rare distinction, Shantanoo Saxena has built Magnaperitus
              from the ground up &mdash; establishing it as an institution of legal
              thought and service in the heart of Central India. His practice spans
              litigation, arbitration, corporate advisory, and policy engagement,
              making him one of the most versatile legal minds in the region.
            </motion.p>

            <motion.div variants={fadeUp} custom={0.7} className="mt-10">
              <Link
                to="/about#leadership"
                className="inline-block bg-navy text-gold border-2 border-gold/40 px-8 py-3 font-ui font-semibold hover:bg-gold hover:text-navy transition"
              >
                Read Full Profile
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   7. CLIENTS & SECTORS SERVED
   ────────────────────────────────────────────── */

const sectors = [
  "Corporates",
  "Start-ups",
  "Infrastructure",
  "Energy",
  "Real Estate",
  "Matrimonial",
  "Government Undertakings",
  "MSMEs",
];

function SectorsServed() {
  const marqueeItems = [...sectors, ...sectors];

  return (
    <section className="bg-navy-light py-16 overflow-hidden relative">
      {/* Visible gold borders */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute left-[15%] top-[20%] w-[200px] h-[200px] gold-orb" />
      <div className="absolute right-[10%] bottom-[10%] w-[150px] h-[150px] gold-orb" />

      <div className="max-w-6xl mx-auto px-6 mb-10">
        <SectionHeading title="Sectors We Serve" centered light />
      </div>

      <div className="relative mt-8">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-light to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-light to-transparent z-10 pointer-events-none" />

        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {marqueeItems.map((sector, i) => (
            <span
              key={i}
              className="font-ui text-lg text-ivory/50 uppercase tracking-widest mx-8 inline-block flex-shrink-0"
            >
              {sector}
              <span className="mx-8 text-gold">&middot;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   8. FOOTER CTA SECTION
   ────────────────────────────────────────────── */

function FooterCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/legal-office.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Corner frames */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-gold/30 pointer-events-none z-10" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-gold/30 pointer-events-none z-10" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-gold/30 pointer-events-none z-10" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-gold/30 pointer-events-none z-10" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <LegalDivider className="w-72 md:w-96 h-auto mx-auto mb-10 opacity-60" />

        <motion.h2
          variants={fadeUp}
          custom={0}
          className="font-display text-4xl md:text-5xl text-ivory"
        >
          Let&rsquo;s resolve what matters.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-ivory/60 font-body text-lg mt-4"
        >
          Connect with Central India&rsquo;s premier legal team today.
        </motion.p>

        <motion.div variants={fadeUp} custom={0.4} className="mt-8">
          <Link
            to="/contact"
            className="inline-block bg-gold text-navy font-ui font-semibold px-10 py-4 rounded text-lg hover:bg-gold-light transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
