import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  FileText,
  Shield,
  Globe,
} from "lucide-react";
import PageMeta from "../components/PageMeta";
import SectionHeading from "../components/SectionHeading";
import { LegalDivider } from "../components/LawVisuals";

/* ─── DATA ─── */

const offerings = [
  {
    title: "Company Incorporation & Registration",
    sub: "Pvt Ltd, LLP, OPC \u2014 complete setup support",
  },
  {
    title: "Regulatory Compliance & Licensing",
    sub: "Industry-specific permits, FSSAI, MSME registration",
  },
  {
    title: "Contract Drafting & Review",
    sub: "Founder agreements, NDAs, vendor contracts, SaaS terms",
  },
  {
    title: "Intellectual Property Protection",
    sub: "Trademark registration, IP strategy, enforcement",
  },
  {
    title: "Fundraising & Investment Documentation",
    sub: "Term sheets, SHA, convertible notes, due diligence support",
  },
  {
    title: "Employment Law & HR Compliance",
    sub: "Offer letters, policies, POSH compliance, labour law advisory",
  },
  {
    title: "Tax Planning & GST Advisory",
    sub: "Structure optimization, GST registration, compliance calendar",
  },
  {
    title: "Dispute Resolution & Litigation",
    sub: "Commercial disputes, recovery, arbitration support",
  },
];

const roadmapSteps = [
  {
    step: 1,
    title: "Business Structure Selection",
    desc: "Choosing the right entity \u2014 Pvt Ltd, LLP, Partnership, or Sole Proprietorship",
  },
  {
    step: 2,
    title: "Incorporation & Registration",
    desc: "Company registration, PAN, TAN, GST, and statutory registrations",
  },
  {
    step: 3,
    title: "Compliance Framework Setup",
    desc: "Board resolutions, statutory registers, compliance calendars",
  },
  {
    step: 4,
    title: "Contracts & Agreements",
    desc: "Founder agreements, employment contracts, vendor terms",
  },
  {
    step: 5,
    title: "Intellectual Property",
    desc: "Trademark applications, copyright registration, trade secret protocols",
  },
  {
    step: 6,
    title: "Growth & Scale",
    desc: "Investment documentation, regulatory scaling, expansion advisory",
  },
];

const schemes = [
  {
    title: "Start-Up India Registration",
    desc: "DPIIT recognition, tax benefits, self-certification compliance",
  },
  {
    title: "MSME Registration & Benefits",
    desc: "Udyam registration, priority sector lending, government tender preference",
  },
  {
    title: "State-Level Incentives",
    desc: "MP, CG, RJ, UP \u2014 state-specific subsidies, land allotment, capital grants",
  },
  {
    title: "Ease of Doing Business",
    desc: "Single-window clearances, e-governance facilitation, regulatory navigation",
  },
];

const digitalFeatures = [
  {
    Icon: Globe,
    title: "Digital Registrations",
    desc: "Online company formation, GST, MSME portals",
  },
  {
    Icon: Shield,
    title: "Data Compliance",
    desc: "Privacy policies, data protection, IT Act compliance",
  },
  {
    Icon: FileText,
    title: "E-Filing & Records",
    desc: "Digital signatures, e-filing, electronic record management",
  },
];

/* ─── REUSABLE ANIMATED WRAPPER ─── */

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

/* ─── TIMELINE STEP ─── */

function TimelineStep({ step, title, desc, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0"
    >
      {/* ── Mobile layout (always left-aligned) ── */}
      <div className="md:hidden flex items-start gap-5 w-full">
        {/* Gold marker */}
        <div className="relative z-10 flex-shrink-0 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg">
            <span className="font-ui text-sm font-bold text-navy">{step}</span>
          </div>
          {index < roadmapSteps.length - 1 && (
            <div className="w-[2px] h-16 bg-gold/30 mt-2" />
          )}
        </div>

        {/* Content */}
        <div className="pt-1">
          <h4 className="font-display text-xl text-navy font-semibold">
            {title}
          </h4>
          <p className="font-body text-charcoal/70 text-sm mt-1">{desc}</p>
        </div>
      </div>

      {/* ── Desktop layout (alternating left/right) ── */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 w-full items-start">
        {/* Left content */}
        <div className={`${isEven ? "text-right pr-4" : ""}`}>
          {isEven && (
            <div>
              <h4 className="font-display text-xl text-navy font-semibold">
                {title}
              </h4>
              <p className="font-body text-charcoal/70 text-sm mt-1">{desc}</p>
            </div>
          )}
        </div>

        {/* Center timeline with gold marker */}
        <div className="relative flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-lg z-10">
            <span className="font-ui text-sm font-bold text-navy">{step}</span>
          </div>
          {index < roadmapSteps.length - 1 && (
            <div className="w-[2px] flex-1 min-h-[60px] bg-gold/30 mt-2" />
          )}
        </div>

        {/* Right content */}
        <div className={`${!isEven ? "pl-4" : ""}`}>
          {!isEven && (
            <div>
              <h4 className="font-display text-xl text-navy font-semibold">
                {title}
              </h4>
              <p className="font-body text-charcoal/70 text-sm mt-1">{desc}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── MAIN COMPONENT ─── */

export default function StartupHub() {
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
        title="Start-Up Hub"
        description="Legal partner for start-ups and MSMEs in Central India \u2014 from incorporation to scaling."
        path="/startup-hub"
      />

      {/* ─── 1. PAGE HERO ─── */}
      <section className="relative overflow-hidden py-32 pt-40">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/legal-office.jpg"
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
            START-UP HUB
          </p>

          <h1 className="font-display text-6xl md:text-7xl text-ivory font-bold">
            Your Legal Partner from Day One.
          </h1>

          <div className="w-24 h-[2px] bg-gold mx-auto mt-6 mb-6" />

          <p className="text-ivory/70 font-body text-xl max-w-3xl mx-auto">
            Magnaperitus provides end-to-end legal support for entrepreneurs,
            start-ups, and MSMEs &mdash; removing barriers and empowering young
            businesses to scale with confidence.
          </p>
        </motion.div>
      </section>

      {/* ─── 2. WHAT WE OFFER YOUNG ENTREPRENEURS ─── */}
      <section className="bg-ivory py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionHeading title="What We Offer Young Entrepreneurs" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-14">
            {offerings.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-gold flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-display text-lg text-navy font-semibold">
                      {item.title}
                    </h4>
                    <p className="font-body text-charcoal/70 text-sm mt-1">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. LEGAL COMPLIANCE ROADMAP ─── */}
      <section className="bg-ivory-dark py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="Legal Compliance Roadmap"
            subtitle="A step-by-step journey for new businesses"
          />

          <div className="mt-16 relative">
            {/* Vertical connecting line — desktop only */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold/20 -translate-x-1/2" />

            {roadmapSteps.map((s, i) => (
              <TimelineStep
                key={s.step}
                step={s.step}
                title={s.title}
                desc={s.desc}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. GOVERNMENT SCHEMES & SUBSIDIES ─── */}
      <section className="relative overflow-hidden bg-ivory py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="Government Schemes & Subsidies"
            subtitle="We help you access what you're entitled to"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {schemes.map((scheme, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-8 shadow-sm border-t-2 border-gold h-full">
                  <h4 className="font-display text-xl text-navy font-semibold">
                    {scheme.title}
                  </h4>
                  <p className="font-body text-charcoal/70 text-sm mt-3 leading-relaxed">
                    {scheme.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. E-GOVERNANCE & DIGITAL COMPLIANCE ─── */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/contract-signing.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <SectionHeading
            title="E-Governance & Digital Compliance"
            light={true}
          />

          <FadeIn className="mt-8">
            <p className="text-ivory/80 font-body text-lg max-w-3xl mx-auto text-center leading-relaxed">
              Central India&rsquo;s business landscape is rapidly digitizing.
              Magnaperitus helps start-ups and MSMEs navigate the evolving
              e-governance ecosystem &mdash; from online registrations and
              digital signatures to compliance with data protection norms and
              electronic record-keeping requirements.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {digitalFeatures.map((feat, i) => (
              <FadeIn key={i} delay={i * 0.15} className="text-center">
                <feat.Icon className="text-gold mx-auto" size={48} />
                <h4 className="font-display text-xl text-ivory font-semibold mt-5">
                  {feat.title}
                </h4>
                <p className="text-ivory/60 font-body text-sm mt-2 leading-relaxed">
                  {feat.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CTA SECTION ─── */}
      <section className="bg-gold py-20">
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center px-6"
        >
          <LegalDivider className="w-64 md:w-80 h-auto mx-auto mb-8 opacity-60" />
          <h2 className="font-display text-4xl md:text-5xl text-navy font-bold">
            Ready to Build Something Great?
          </h2>

          <Link
            to="/contact"
            className="inline-block bg-navy text-ivory font-ui font-semibold px-10 py-4 rounded hover:bg-navy-light transition mt-8"
          >
            Book a Startup Consultation
          </Link>
        </motion.div>
      </section>
    </>
  );
}
