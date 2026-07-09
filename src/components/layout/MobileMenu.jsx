import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import logo from "../../assets/icons/logo.svg";
import heroPath from "../../assets/images/hero-path.svg";

import { navLinks } from "../../constants/navigation";

function MobileMenu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-[999] ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={`absolute inset-0 flex h-screen w-full flex-col overflow-hidden bg-[#252547] px-6 py-8 sm:px-8 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Background Decoration */}
        <img
          src={heroPath}
          alt=""
          className="pointer-events-none absolute left-0 top-0 w-[80%] opacity-10"
        />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between">
          <NavLink to="/" onClick={onClose}>
            <img
              src={logo}
              alt="Folio"
              className="h-10 w-auto"
            />
          </NavLink>

          <button
            onClick={onClose}
            aria-label="Close Menu"
          >
            <X
              size={34}
              strokeWidth={1.8}
              className="text-white"
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 mt-16 sm:mt-20">
          <ul className="space-y-8">
            {navLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `relative text-4xl font-bold transition-colors duration-300 sm:text-5xl ${
                      isActive
                        ? "text-white"
                        : "text-[#7B7A9B]"
                    }`
                  }
                >
                  {item.name}

                  {item.badge && (
                    <span className="ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#5865F2] text-xs text-white">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="relative z-10 mt-auto flex gap-5">
          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#5A5A78] text-white transition-all duration-300 hover:border-white"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#5A5A78] text-white transition-all duration-300 hover:border-white"
          >
            <FaYoutube size={18} />
          </a>

          <a
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#5A5A78] text-white transition-all duration-300 hover:border-white"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;