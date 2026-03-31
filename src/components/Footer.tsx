import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Facebook, Instagram, Music2 } from "lucide-react";
import logo from "@/assets/alpha-practice-logo.png";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1AspcnPB1D/" },
  { icon: Instagram, href: "https://www.instagram.com/alpha__practice?igsh=N2N5emo3dzU2Yjdk" },
  { icon: Music2, href: "https://www.tiktok.com/@alphapractice?_r=1&_t=ZS-955Wd9xdYQb" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/80">
    <div className="container mx-auto px-4 py-10 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        <div>
          <div className="mb-4">
            <img src={logo} alt="Alpha Practice logo" className="h-24 sm:h-28 lg:h-28 xl:h-32 w-auto object-contain" />
          </div>
          <p className="text-sm leading-relaxed">
            Providing premium dental and skin care services in Rawalpindi with modern technology and compassion.
          </p>
          <div className="flex gap-3 mt-5">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { l: "Home", p: "/" },
              { l: "About Us", p: "/about" },
              { l: "Services", p: "/services" },
              { l: "Doctors", p: "/doctors" },
              { l: "Gallery", p: "/gallery" },
              { l: "Contact", p: "/contact" },
            ].map((link) => (
              <Link key={link.l} to={link.p} className="hover:text-primary-foreground transition-colors">
                {link.l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Opening Hours</h4>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between"><span>Mon - Thu</span><span>2PM - 10PM</span></div>
            <div className="flex justify-between"><span>Friday</span><span>3PM - 7PM</span></div>
            <div className="flex justify-between"><span>Saturday</span><span>2PM - 10PM</span></div>
            <div className="flex justify-between"><span>Sunday</span><span>Off</span></div>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact Info</h4>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /><span>2nd Floor Plaza 19, Overseas 5 Commercial, Bahria Phase 8, Rawalpindi</span></div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><span>WhatsApp: 0332-2225742</span></div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><span>PTCL: 051-2752441</span></div>
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /><span>Mon-Thu & Sat: 2PM-10PM, Fri: 3PM-7PM, Sun: Off</span></div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-5 sm:py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/50">
        <span>&copy; 2026 Alpha Practice. All rights reserved.</span>
        <span>Developed by Auto Fyn Ai.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
