import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Users,
  Scale,
  MessageCircle,
  Lock,
  ArrowRight,
} from "lucide-react";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { LegalDivider } from "../components/LawVisuals";

/* ─── DATA ─── */

const areas = [
  {
    icon: Heart,
    title: "Divorce & Separation",
    description:
      "Contested and mutual consent divorce proceedings with sensitivity and discretion.",
  },
  {
    icon: Users,
    title: "Child Custody & Visitation",
    description:
      "Negotiating and litigating custody arrangements that prioritize the child\u2019s welfare.",
  },
  {
    icon: Scale,
    title: "Maintenance & Alimony",
    description:
      "Securing fair maintenance orders for spouses and dependents.",
  },
  {
    icon: Shield,
    title: "Domestic Violence Protection",
    description:
      "Protection orders, support, and legal remedies under the DV Act.",
  },
  {
    icon: MessageCircle,
    title: "Mediation & Counselling",
    description:
      "Alternative dispute resolution to preserve relationships where possible.",
  },
  {
    icon: Lock,
    title: "Property & Asset Division",
    description:
      "Equitable distribution of matrimonial property and financial assets.",
  },
];

const approach = [
  {
    num: "01",
    title: "Legal Advocacy with Heart",
    description:
      "We fight for our clients\u2019 rights with the full force of the law \u2014 but we never lose sight of the human being at the centre of every case.",
  },
  {
    num: "02",
    title: "Counselling-Integrated Practice",
    description:
      "Our in-house counsellors work alongside our lawyers, providing emotional support and helping clients make clear-headed decisions during turbulent times.",
  },
  {
    num: "03",
    title: "Resolution Over Conflict",
    description:
      "Where possible, we pursue mediation and amicable resolution. When litigation is necessary, we advocate with conviction and compassion in equal measure.",
  },
];

/* ─── COMPONENT ─── */

export default function FamilyLaw() {
  /* Intersection-observer refs */
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: areasRef, inView: areasInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: approachRef, inView: approachInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: privacyRef, inView: privacyInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: quoteRef, inView: quoteInView } = useInView({
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
        title="Family Law Centre"
        description="Compassionate and confidential legal support for family matters \u2014 divorce, custody, mediation, and more."
        path="/family-law"
      />

      {/* ─── 1. PAGE HERO ─── */}
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
            FAMILY LAW CENTRE
          </p>

          <h1 className="font-display text-6xl md:text-7xl text-ivory font-bold">
            Compassion Meets Counsel.
          </h1>

          <div className="w-24 h-[2px] bg-gold mx-auto mt-6 mb-6" />

          <p className="text-ivory/70 font-body text-xl max-w-3xl mx-auto">
            When family matters demand legal attention, they deserve more than
            strategy &mdash; they require empathy, discretion, and genuine
            understanding.
          </p>
        </motion.div>

      </section>

      {/* ─── 2. DEDICATED TEAM SECTION ─── */}
      <section className="bg-ivory py-20">
        <div className="px-6">
          <SectionHeading title="A Dedicated Team of Counsellors & Lawyers" />

          <motion.div
            ref={teamRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="max-w-4xl mx-auto mt-10 space-y-6"
          >
            <p className="font-body text-lg text-charcoal leading-relaxed">
              At Magnaperitus, our Family Law Centre is staffed by professionals
              who understand that family disputes are unlike any other legal
              matter. The emotional stakes are as high as the legal ones, and
              resolution requires sensitivity as much as it requires legal
              acumen.
            </p>

            <p className="font-body text-lg text-charcoal leading-relaxed">
              Our team includes both qualified lawyers and trained counsellors
              who work together to provide holistic support &mdash; ensuring that
              our clients receive the legal strategy they need alongside the
              emotional guidance they deserve. Every consultation is conducted
              with the utmost confidentiality and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. AREAS WE COVER ─── */}
      <section className="bg-ivory-dark py-20 relative overflow-hidden">
        <div className="px-6 relative z-10">
          <SectionHeading title="Areas We Cover" />

          <motion.div
            ref={areasRef}
            initial="hidden"
            animate={areasInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12"
          >
            {areas.map((area) => (
              <motion.div
                key={area.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className="bg-ivory rounded-lg p-8 shadow-sm text-center"
              >
                <area.icon className="text-gold size-10 mx-auto" />
                <h3 className="font-display text-xl text-navy font-semibold mt-4">
                  {area.title}
                </h3>
                <p className="font-body text-sm text-charcoal/70 mt-2">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 4. OUR APPROACH ─── */}
      <section className="bg-ivory py-20 relative overflow-hidden">
        <div className="px-6">
          <SectionHeading title="Our Approach" />

          <motion.div
            ref={approachRef}
            initial="hidden"
            animate={approachInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mt-12"
          >
            {approach.map((item) => (
              <motion.div
                key={item.num}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className="text-center"
              >
                <p className="font-display text-6xl text-gold/20">
                  {item.num}
                </p>
                <h3 className="font-display text-xl text-navy font-semibold mt-2">
                  {item.title}
                </h3>
                <p className="font-body text-charcoal/80 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 5. CONFIDENTIALITY ASSURANCE ─── */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/law-books.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <motion.div
          ref={privacyRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            privacyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center px-6"
        >
          <Lock className="size-16 text-gold mx-auto" />

          <h2 className="font-display text-4xl text-ivory mt-6">
            Your Privacy, Our Promise
          </h2>

          <div className="w-20 h-[2px] bg-gold mx-auto mt-4 mb-4" />

          <p className="text-ivory/80 font-body text-lg max-w-2xl mx-auto text-center mt-6 leading-relaxed">
            Every consultation, communication, and case detail is treated with
            absolute confidentiality. Our family law practice operates under
            strict privacy protocols, ensuring that your personal matters remain
            protected at every stage.
          </p>
        </motion.div>
      </section>

      {/* ─── 6. PULL QUOTE ─── */}
      <section className="bg-ivory py-16">
        <motion.div
          ref={quoteRef}
          initial={{ opacity: 0, y: 20 }}
          animate={
            quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-6 text-center"
        >
          <LegalDivider className="w-56 md:w-72 h-auto mx-auto opacity-50" />

          <blockquote className="font-display text-2xl md:text-3xl text-navy italic max-w-4xl mx-auto text-center leading-relaxed my-8">
            &ldquo;Family matters deserve more than legal strategy &mdash; they
            demand compassion, discretion, and genuine understanding.&rdquo;
          </blockquote>

          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </motion.div>
      </section>

      {/* ─── 7. CTA SECTION ─── */}
      <section className="bg-gold/10 py-20">
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center px-6"
        >
          <h2 className="font-display text-4xl text-navy">
            We&rsquo;re Here for You
          </h2>

          <p className="font-body text-lg text-charcoal/80 mt-4">
            Schedule a confidential consultation with our Family Law Centre.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-gold text-navy font-ui font-semibold px-10 py-4 rounded hover:bg-gold-dark hover:text-ivory transition mt-8"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </>
  );
}
