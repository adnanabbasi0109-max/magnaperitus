import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, User } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import PageMeta from "../components/PageMeta";
import { LegalDivider } from "../components/LawVisuals";

/* ──────────────────────────────────────────────
   Reusable fade-in wrapper driven by viewport
   ────────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Data
   ────────────────────────────────────────────── */
const states = [
  "Madhya Pradesh",
  "Chhattisgarh",
  "Rajasthan",
  "Uttar Pradesh",
  "Delhi",
];

const philosophies = [
  {
    numeral: "01",
    title: "Justice as a Craft",
    text: "We believe the practice of law is a craft — one that demands not merely academic knowledge, but the artistry that comes from years at the bench and bar. Every brief we draft, every argument we present, is shaped by this conviction.",
  },
  {
    numeral: "02",
    title: "Regional Mastery, National Standards",
    text: "Our roots in Central India are our strength. We bring intimate knowledge of local courts, regulatory bodies, and business ecosystems — while holding ourselves to the standards of the finest national practices.",
  },
  {
    numeral: "03",
    title: "The Lawyer as Counsellor, Not Just Advocate",
    text: "The best legal outcomes are not won in courtrooms alone. They are built through trust, through deep understanding of a client's world, and through counsel that anticipates challenges before they arise.",
  },
];

/* ──────────────────────────────────────────────
   About Page Component
   ────────────────────────────────────────────── */
export default function About() {
  return (
    <>
      {/* ─── PAGE META ─── */}
      <PageMeta
        title="About"
        description="Learn about Magnaperitus — Central India's premier full-service law firm headquartered in Bhopal."
        path="/about"
      />

      {/* ═══════════════════════════════════════
          1. PAGE HERO
          ═══════════════════════════════════════ */}
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

        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-ui text-sm uppercase tracking-[0.3em] text-gold"
          >
            ABOUT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="font-display mt-4 text-6xl font-bold text-ivory md:text-7xl"
          >
            Magnaperitus
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mx-auto mt-6 h-[2px] w-20 origin-center bg-gold"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="font-body mx-auto mt-6 max-w-2xl text-xl text-ivory/70"
          >
            Latin for &ldquo;Great Expert&rdquo; &mdash; a name that embodies
            our founding philosophy.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. THE FIRM
          ═══════════════════════════════════════ */}
      <section className="bg-ivory py-20 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="The Firm" />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
            <FadeIn className="space-y-6">
              <p className="font-body text-lg leading-relaxed text-charcoal">
                Magnaperitus is a full-service law firm headquartered in Bhopal,
                Madhya Pradesh, with an active presence across Central India
                &mdash; spanning the states of Madhya Pradesh, Chhattisgarh,
                Rajasthan, Uttar Pradesh, and Delhi. The name Magnaperitus &mdash;
                Latin for &ldquo;Great Expert&rdquo; &mdash; reflects the
                firm&rsquo;s founding philosophy: that legal excellence is not
                merely a function of knowledge, but of the mastery that comes from
                years of disciplined practice, strategic thinking, and unwavering
                commitment to the client&rsquo;s cause.
              </p>

              <p className="font-body text-lg leading-relaxed text-charcoal">
                The firm has built its reputation through consistent
                representation before the nation&rsquo;s most demanding judicial
                and quasi-judicial forums, including various High Courts, the
                National Green Tribunal, Arbitration Tribunals, Electricity
                Regulatory Commissions, Consumer Courts, the Commercial Tax
                Appellate Board, the Income Tax Appellate Authority, the National
                Company Law Tribunal, District Courts, and Family Courts. This
                breadth of practice gives Magnaperitus a rare, integrated
                understanding of the law &mdash; enabling the firm to offer advice
                that is not merely technically sound, but strategically informed.
              </p>
            </FadeIn>

            {/* Law image sidebar */}
            <FadeIn delay={0.2} className="hidden lg:block">
              <div className="relative">
                <img
                  src="/images/gavel-justice.jpg"
                  alt="Scales of justice"
                  className="w-full h-[350px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-3 -left-3 w-full h-full border-2 border-gold/30 rounded-lg pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. OUR REACH
          ═══════════════════════════════════════ */}
      <section className="bg-ivory-dark py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading title="Our Reach" />

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {states.map((state, i) => (
              <FadeIn key={state} delay={i * 0.1}>
                <div className="flex flex-col items-center rounded-lg bg-ivory p-6 text-center shadow-sm">
                  <MapPin className="mb-3 text-gold" size={28} />
                  <span className="font-ui text-sm font-medium tracking-wide text-navy">
                    {state}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="font-ui mt-8 text-center text-sm tracking-wider text-charcoal/60">
              Headquartered in Bhopal &middot; Active across Central India
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. OUR PHILOSOPHY
          ═══════════════════════════════════════ */}
      <section className="bg-ivory py-20 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Our Philosophy" />

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
            {philosophies.map((item, i) => (
              <FadeIn key={item.numeral} delay={i * 0.15}>
                <div>
                  <span className="font-display text-6xl font-bold text-gold/20">
                    {item.numeral}
                  </span>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="font-body mt-4 leading-relaxed text-charcoal/80">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. LEADERSHIP — Shantanoo Saxena
          ═══════════════════════════════════════ */}
      <section id="leadership" className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/library-shelves.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          {/* ── Header ── */}
          <FadeIn className="text-center">
            <p className="font-ui text-sm uppercase tracking-[0.3em] text-gold">
              THE MIND BEHIND MAGNAPERITUS
            </p>
            <h2 className="font-display mt-4 text-5xl font-bold text-ivory md:text-6xl">
              Shantanoo Saxena
            </h2>
            <p className="font-ui mt-3 text-lg text-gold-light">
              Founder &amp; Lead Counsel
            </p>
            <div className="mx-auto my-8 h-[2px] w-20 bg-gold" />
          </FadeIn>

          {/* ── Two-column: Photo + Bio ── */}
          <div className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Photo placeholder */}
            <FadeIn delay={0.1} className="lg:col-span-2">
              <div className="relative flex aspect-[3/4] items-center justify-center rounded-lg border border-gold/20 bg-navy-light overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(201,168,76,1) 10px, rgba(201,168,76,1) 11px)' }} />
                {/* Radial glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.03]" />
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <div className="w-24 h-24 rounded-full border-2 border-gold/30 flex items-center justify-center bg-navy">
                    <User className="text-gold" size={48} />
                  </div>
                  <span className="font-display text-gold/60 text-lg italic">Shantanoo Saxena</span>
                  <span className="font-ui text-gold/30 text-xs uppercase tracking-wider">Founder & Lead Counsel</span>
                </div>
              </div>
            </FadeIn>

            {/* Bio */}
            <FadeIn delay={0.25} className="lg:col-span-3">
              <div className="font-body space-y-6 text-lg leading-relaxed text-ivory/80">
                <p>
                  Shantanoo Saxena is a lawyer of rare distinction &mdash; a
                  professional whose practice is as much defined by the depth of
                  his legal intellect as it is by the conviction with which he
                  represents every client who walks through his door. As the
                  founder and principal of Magnaperitus, he has spent years
                  building not just a law firm, but an institution of legal
                  thought and service in the heart of Central India.
                </p>

                <p>
                  Saxena&rsquo;s courtroom presence is marked by meticulous
                  preparation, sharp argumentation, and an ability to distil
                  complex legal questions into their essential truth &mdash; a
                  quality that has earned him the trust of courts, clients, and
                  counterparts alike. His practice spans litigation, arbitration,
                  corporate advisory, and policy engagement, making him one of
                  the most versatile legal minds in the region.
                </p>

                <p>
                  Beyond the courtroom, Shantanoo Saxena has been a quiet
                  architect of legal frameworks for businesses, startups, and
                  public sector undertakings across Central India &mdash; guiding
                  them not merely through the law as it exists, but through the
                  law as it should be understood in the context of their specific
                  ambitions and risks.
                </p>

                <p>
                  He leads with the conviction that a great lawyer is, first and
                  foremost, a trusted counsellor &mdash; someone who sees the
                  full arc of a client&rsquo;s journey and stands steadfastly
                  beside them at every turn.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ── Pull Quote ── */}
          <FadeIn delay={0.15} className="py-12">
            <LegalDivider className="mx-auto mb-8 w-full max-w-md" />
            <blockquote className="mx-auto max-w-4xl text-center">
              <p className="font-display text-2xl italic leading-relaxed text-gold md:text-3xl">
                &ldquo;The law is not a maze to be navigated around. It is a
                framework to be understood, respected, and wielded &mdash; with
                precision, and always in service of justice.&rdquo;
              </p>
              <footer className="font-ui mt-4 text-sm tracking-wider text-gold-light">
                &mdash; Shantanoo Saxena
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
