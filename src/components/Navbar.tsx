import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeProvider";
import {
  Home,
  Users,
  Calendar,
  ClipboardList,
  HelpCircle,
  Info,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const {theme, toggleTheme} = useTheme();

  const navbarLinks = [
    { label: "Home", to: "/", icon: Home },
    { label: "About", to: "/about", icon: Users },
    { label: "Speakers", to: "/speakers", icon: Info },
    { label: "Agenda", to: "/agenda", icon: Calendar },
    { label: "Register", to: "/register", icon: ClipboardList },
    { label: "FAQ", to: "/faq", icon: HelpCircle },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary shadow h-16">
      <div className="container flex items-center justify-between py-4">
        <div className="flex space-x-3">
          <button
              onClick={toggleTheme}
              className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition cursor-pointer"
          >
              {theme === "light" ? <Sun size={20} className="text-yellow-400 hover:rotate-180 duration-500 transition-transform "/> : <Moon size={20} className="hover:rotate-180 duration-500 transition-transform " />}
          </button>

          {/* Logo */}
        <Link to="/" className="font-bold text-xl text-primary-foreground">
          Conf<span className="text-accent">2025</span>
        </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navbarLinks.map(({ label, to, icon: Icon }) => (
            <Link
              key={label}
              to={to}
              className="
                flex items-center gap-2 font-medium
                text-primary-foreground
                hover:text-accent
                transition-colors
              "
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md bg-white text-primary"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t">
          <div className="container flex flex-col gap-4 py-4">
            {navbarLinks.map(({ label, to, icon: Icon }) => (
              <Link
                key={label}
                to={to}
                onClick={() => setIsOpen(false)}
                className="
                  flex items-center gap-3
                  text-primary-foreground font-medium
                  hover:text-accent
                  transition-colors
                "
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
