import { Twitter, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-base border-t border-black/10 dark:border-white/10 mt-20">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding / Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-base">
              Conf<span className="text-accent">2025</span>
            </span>
            . All rights reserved.
          </p>
        </div>

        
       
        <div className="flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-primary transition">
                Home
            </Link>
            <Link to="/about" className="hover:text-primary transition">
                About
            </Link>
            <Link to="/speakers" className="hover:text-primary transition">
                Speakers
            </Link>
            <Link to="/agenda" className="hover:text-primary transition">
                Agenda
            </Link>
            <Link to="/register" className="hover:text-primary transition">
                Register
            </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Twitter"
            className="
              p-2 rounded-full
               text-base
              hover:bg-accent hover:text-accent-foreground
              transition
            "
          >
            <Twitter size={18} />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="
              p-2 rounded-full
               text-base
              hover:bg-accent hover:text-accent-foreground
              transition
            "
          >
            <Facebook size={18} />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="
              p-2 rounded-full
               text-base
              hover:bg-accent hover:text-accent-foreground
              transition
            "
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
