import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/alpha-practice-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Doctors", path: "/doctors" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (window.innerWidth < 1024) {
        if (currentScrollY <= 20) {
          setMobileNavVisible(true);
        } else if (currentScrollY < lastScrollY) {
          setMobileNavVisible(true);
        } else if (!open) {
          setMobileNavVisible(false);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    if (open) setMobileNavVisible(true);
  }, [open]);

  const handleNavClick = (path: string) => {
    setOpen(false);

    if (path.startsWith("/#")) {
      if (path === "/#appointment") {
        if (location.pathname === "/") {
          document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate("/?book=true");
        }
      } else {
        const id = path.slice(2);
        if (location.pathname === "/") {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
          navigate(`/${path.slice(1)}`);
        }
      }

      return;
    }

    navigate(path);
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 overflow-x-clip transition-all duration-300 lg:top-0 ${
        mobileNavVisible ? "top-0" : "-top-32"
      } ${
        scrolled ? "bg-background py-2 lg:glass lg:shadow-card lg:py-2" : "bg-background py-2 lg:bg-transparent lg:py-2"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-3 top-2 bottom-1 rounded-[1.75rem] border border-white/70 bg-white/88 shadow-[0_18px_44px_rgba(15,23,42,0.08)] backdrop-blur-md lg:hidden" />
      <div className="pointer-events-none absolute left-3 top-2 h-16 w-28 rounded-[1.4rem] bg-gradient-to-r from-primary/18 via-primary/10 to-transparent blur-md lg:hidden" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:hidden" />
      <div className="pointer-events-none absolute inset-x-5 bottom-0 h-4 bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0 blur-xl lg:hidden" />
      <div className="container relative mx-auto flex items-center justify-between px-4 lg:px-4">
        <Link to="/" className="flex items-center relative top-0 lg:-top-2">
          <div className="relative rounded-[1.35rem] border border-primary/10 bg-white/70 px-2 py-1 shadow-[0_8px_30px_rgba(37,99,235,0.08)] backdrop-blur-sm lg:rounded-[1.75rem] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
            <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-r from-primary/16 via-primary/8 to-transparent blur-sm lg:hidden" />
            <img src={logo} alt="Alpha Practice logo" className="relative h-20 sm:h-24 lg:h-24 xl:h-28 w-auto object-contain" />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.path}
              onClick={() => handleNavClick(l.path)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+923322225742" className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Phone className="h-4 w-4" /> +92 332 2225742
          </a>
          <Button asChild>
            <Link to="/#appointment" onClick={() => handleNavClick("/#appointment")}>Book Appointment</Link>
          </Button>
        </div>

        <button className="relative rounded-full border border-primary/15 bg-white/88 p-2 text-primary shadow-[0_10px_24px_rgba(37,99,235,0.14)] backdrop-blur-sm transition-colors hover:bg-primary/10 lg:hidden" onClick={() => setOpen(!open)}>
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/12 to-transparent" />
          {open ? <X className="relative z-10 h-6 w-6" /> : <Menu className="relative z-10 h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[80] lg:hidden">
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 w-full bg-foreground/35 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 flex h-full w-[84vw] max-w-sm flex-col border-l border-border bg-background shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">Navigation</p>
                  <p className="mt-1 text-sm text-muted-foreground">Explore Alpha Practice</p>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-border p-2 text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-between overflow-y-auto px-5 py-6">
                <div className="space-y-3">
                  {navLinks.map((l) => (
                    <button
                      key={l.label}
                      type="button"
                      onClick={() => handleNavClick(l.path)}
                      className="flex w-full items-center justify-between rounded-2xl border border-border bg-card px-4 py-4 text-left text-base font-medium text-foreground shadow-sm active:scale-[0.99]"
                    >
                      <span>{l.label}</span>
                      <span className="text-lg leading-none text-muted-foreground">+</span>
                    </button>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl bg-secondary/70 p-4">
                  <a href="tel:+923322225742" className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Phone className="h-4 w-4 text-primary" /> +92 332 2225742
                  </a>
                  <button
                    type="button"
                    onClick={() => handleNavClick("/#appointment")}
                    className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-sm"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
