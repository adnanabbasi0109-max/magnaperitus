import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Scale,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Start-Up Hub", to: "/startup-hub" },
  { label: "Family Law", to: "/family-law" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory relative">
      {/* Gold divider at top — thicker for visibility */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 -- Firm Info & Tagline */}
          <div className="space-y-5">
            <div>
              <Link to="/">
                <img
                  src="/images/logo.png"
                  alt="Magnaperitus"
                  className="h-32 w-auto"
                />
              </Link>
            </div>

            <p className="font-display text-ivory text-lg italic leading-relaxed">
              &ldquo;Justice Navigated. Excellence Delivered.&rdquo;
            </p>

            <p className="font-body text-ivory/70 text-sm leading-relaxed">
              Magnaperitus is a full-service law firm committed to delivering
              strategic, results-driven legal counsel. We combine deep domain
              expertise with an unwavering dedication to client success across
              diverse areas of law.
            </p>

            <div className="flex items-center gap-1 text-gold/60">
              <Scale size={16} />
              <span className="font-ui text-xs tracking-wider uppercase">
                Advocates &amp; Legal Consultants
              </span>
            </div>
          </div>

          {/* Column 2 -- Quick Links */}
          <div>
            <h3 className="font-display text-gold text-xl font-semibold mb-6 tracking-wide">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="font-ui text-ivory/80 text-sm hover:text-gold transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="h-px w-0 bg-gold group-hover:w-4 transition-all duration-300" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 -- Contact & Social */}
          <div>
            <h3 className="font-display text-gold text-xl font-semibold mb-6 tracking-wide">
              Contact Us
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-gold mt-0.5 shrink-0"
                />
                <div>
                  <p className="font-body text-ivory/90 text-sm">
                    Bhopal, Madhya Pradesh
                  </p>
                  <p className="font-ui text-ivory/50 text-xs mt-1">
                    Presence: MP &middot; CG &middot; RJ &middot; UP &middot;
                    Delhi
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href="mailto:contact@magnaperitus.in"
                  className="font-ui text-ivory/90 text-sm hover:text-gold transition-colors duration-300"
                >
                  contact@magnaperitus.in
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="font-ui text-ivory/90 text-sm hover:text-gold transition-colors duration-300"
                >
                  +91 XXXXX XXXXX
                </a>
              </li>
            </ul>

            {/* Social media placeholders */}
            <div>
              <h4 className="font-ui text-ivory/50 text-xs uppercase tracking-wider mb-3">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/60 hover:border-gold hover:text-gold hover:bg-gold/10 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="font-ui text-ivory/40 text-xs leading-relaxed text-center">
            This website is for informational purposes only and does not
            constitute legal advice. Viewing this website or contacting us does
            not create an attorney-client relationship.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy-dark">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-ui text-ivory/50 text-xs">
            &copy; 2025 Magnaperitus. All Rights Reserved.
          </p>
          <p className="font-ui text-ivory/40 text-xs">
            Bhopal, Madhya Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
