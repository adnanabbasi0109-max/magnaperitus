import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Clock, Globe, Lock } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
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
   Contact detail items data
   ────────────────────────────────────────────── */
const contactItems = [
  {
    icon: MapPin,
    label: "Office Location",
    lines: ["B-160, Shahpura, Bhopal,", "Madhya Pradesh 462039"],
  },
  {
    icon: Globe,
    label: "Regional Presence",
    lines: [
      "Madhya Pradesh \u00B7 Chhattisgarh \u00B7 Rajasthan \u00B7 Uttar Pradesh \u00B7 Delhi",
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["office@magnaperitus.in"],
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["+91 0755 242 1810"],
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Monday \u2013 Saturday, 10:00 AM \u2013 6:00 PM"],
  },
];

/* ──────────────────────────────────────────────
   Contact Page Component
   ────────────────────────────────────────────── */
export default function Contact() {
  return (
    <>
      {/* ─── PAGE META ─── */}
      <PageMeta
        title="Contact"
        description="Get in touch with Magnaperitus — Bhopal's premier law firm for expert legal counsel."
        path="/contact"
      />

      {/* ═══════════════════════════════════════
          1. PAGE HERO
          ═══════════════════════════════════════ */}
      <section className="relative py-32 pt-40 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/handshake-business.jpg"
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
            CONTACT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="font-display mt-4 text-6xl font-bold text-ivory md:text-7xl"
          >
            Get in Touch
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
            className="font-body mx-auto mt-6 max-w-3xl text-xl text-ivory/70"
          >
            We welcome your enquiry. Whether you need legal counsel, wish to
            discuss a matter, or simply want to learn more about how we can
            assist you &mdash; reach out to us.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. MAIN CONTACT SECTION
          ═══════════════════════════════════════ */}
      <section className="bg-ivory py-20 relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 relative z-10">
          {/* ── Left Column: Contact Details ── */}
          <FadeIn>
            <div>
              <LegalDivider className="w-48 h-auto mb-6 opacity-40" />
              <h2 className="font-display text-3xl font-semibold text-navy">
                Reach Us
              </h2>
              <div className="my-6 h-[2px] w-16 bg-gold" />

              {/* Contact items */}
              {contactItems.map((item, i) => (
                <div key={item.label} className="mb-8 flex items-start gap-4">
                  <item.icon className="mt-1 text-gold" size={24} />
                  <div>
                    <p className="font-ui text-xs uppercase tracking-wider text-charcoal/50">
                      {item.label}
                    </p>
                    {item.lines.map((line, j) => (
                      <p
                        key={j}
                        className="font-body text-lg text-charcoal"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Google Maps embed */}
              <div className="mt-4 overflow-hidden rounded-lg shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234212.7547481523!2d77.26!3d23.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="300"
                  border="0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Magnaperitus office location — Bhopal, Madhya Pradesh"
                />
              </div>
            </div>
          </FadeIn>

          {/* ── Right Column: Contact Form ── */}
          <FadeIn delay={0.15}>
            <div>
              <h2 className="font-display text-3xl font-semibold text-navy">
                Send Your Query
              </h2>
              <div className="my-6 h-[2px] w-16 bg-gold" />

              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. CONFIDENTIALITY NOTE
          ═══════════════════════════════════════ */}
      <section className="bg-ivory-dark py-12">
        <FadeIn className="mx-auto max-w-3xl px-6 text-center">
          <Lock className="mx-auto mb-4 text-gold" size={32} />
          <p className="font-body text-lg italic text-charcoal">
            All communications with Magnaperitus are strictly confidential.
          </p>
        </FadeIn>
      </section>
    </>
  );
}
