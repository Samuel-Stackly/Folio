import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";

import logo from "../../assets/icons/logo.svg";

import Container from "../common/Container";
import Button from "../common/Button";
import MobileMenu from "./MobileMenu";

import { navLinks } from "../../constants/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="py-8">
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/">
              <img
                src={logo}
                alt="Folio"
                className="h-10 w-auto"
              />
            </NavLink>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-12 lg:flex">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative text-lg font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-[#5865F2]"
                          : "text-gray-500 hover:text-[#252547]"
                      }`
                    }
                  >
                    {item.name}

                    {item.badge && (
                      <span className="absolute -right-5 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#5865F2] text-[10px] text-white">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <Button>Contact Us</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden"
              aria-label="Open Menu"
            >
              <Menu
                size={34}
                className="text-[#252547]"
                strokeWidth={1.8}
              />
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;