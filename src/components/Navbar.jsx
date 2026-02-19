import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Practice Areas", path: "/practice-areas" },
  { name: "Start-Up Hub", path: "/startup-hub" },
  { name: "Family Law", path: "/family-law" },
  { name: "Contact", path: "/contact" },
];

// Framer Motion variants for the mobile overlay
const overlayVariants = {
  closed: {
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const drawerVariants = {
  closed: {
    x: "100%",
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
  open: {
    x: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: 30 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15 + i * 0.07,
      duration: 0.35,
      ease: "easeOut",
    },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  // Scroll listener -- flip `scrolled` when past 50 px
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Set initial state in case the page is already scrolled (e.g. on refresh)
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Determine whether the navbar should show its solid background.
  // On the homepage, it starts transparent and becomes solid on scroll.
  // On every other page, it is always solid.
  const showSolid = isHome ? scrolled : true;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        showSolid
          ? "bg-navy shadow-lg shadow-navy-dark/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* ─── Logo ─── */}
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Magnaperitus"
            className="h-28 w-auto md:h-32"
          />
        </Link>

        {/* ─── Desktop Nav Links ─── */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-ui relative text-sm tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-gold"
                      : "text-ivory/80 hover:text-gold-light"
                  }`}
                >
                  {link.name}
                  {/* Gold underline for active link */}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-gold"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ─── Mobile Hamburger Button ─── */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="relative z-50 flex items-center justify-center rounded-md p-2 text-gold transition-colors duration-300 hover:text-gold-light lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X size={26} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={26} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ─── Mobile Full-Screen Overlay Drawer ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark backdrop */}
            <motion.div
              key="backdrop"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-navy-dark/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-navy lg:hidden"
            >
              {/* Decorative gold line */}
              <div className="gold-rule mb-10 w-24" />

              <ul className="flex flex-col items-center gap-7">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.li
                      key={link.path}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className={`font-display text-2xl tracking-wide transition-colors duration-300 ${
                          isActive
                            ? "text-gold"
                            : "text-ivory/70 hover:text-gold-light"
                        }`}
                      >
                        {link.name}
                        {isActive && (
                          <span className="mx-auto mt-1 block h-[2px] w-full bg-gold" />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Subtitle at the bottom of the drawer */}
              <div className="gold-rule mt-10 w-24" />
              <p className="font-ui mt-6 text-xs tracking-[0.3em] text-gold-light/50">
                Lex&nbsp;&middot;&nbsp;Integritas&nbsp;&middot;&nbsp;Excellentia
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
