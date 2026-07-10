
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

import logo from "../../assets/icons/logo.svg";
import heroPath from "../../assets/images/hero-path.svg";

import { navLinks } from "../../constants/navigation";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white pt-16 lg:pt-24">
      <img
        src={heroPath}
        alt=""
        className="pointer-events-none absolute left-0 top-0 w-[220px] opacity-30 lg:left-auto lg:right-0 lg:top-0 lg:w-[420px]"
      />

      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="flex flex-col items-center">
            <NavLink to="/">
              <img
                src={logo}
                alt="Folio"
                className="h-14"
              />
            </NavLink>

            <p className="mt-10 max-w-[700px] text-center text-xl leading-10 text-[#6C6C7A]">
              Agency is a full-service agency, busy designing and
              building beautiful digital products, brands, and
              experiences.
            </p>

            <nav className="mt-14">
              <ul className="flex gap-16">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-[#5865F2]"
                            : "text-[#8B8B96] hover:text-[#5865F2]"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-16 h-px w-full bg-[#E6E6EE]" />

            <div className="flex w-full items-center justify-between py-8">
              <p className="text-[#A3A3AD]">
                ©️ 2020, UI8 LLC.
              </p>

              <div className="flex items-center gap-8">
                <span className="font-medium text-[#5865F2]">
                  Follow us
                </span>

                <div className="flex items-center gap-6">
                  <button className="text-[#9C9CA5] transition hover:text-[#5865F2]">
                    <FaFacebookF size={16} />
                  </button>

                  <button className="text-[#9C9CA5] transition hover:text-[#5865F2]">
                    <FaYoutube size={18} />
                  </button>

                  <button className="text-[#9C9CA5] transition hover:text-[#5865F2]">
                    <FaInstagram size={17} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 pb-10 lg:hidden">
        <div className="flex justify-center">
          <NavLink to="/">
            <img
              src={logo}
              alt="Folio"
              className="h-12"
            />
          </NavLink>
        </div>

        <p className="mt-8 text-center text-lg leading-9 text-[#8A8A94]">
          Agency is a full-service agency, busy designing and
          building.
        </p>

        <nav className="mt-10">
          <ul className="space-y-3">
            {navLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block rounded-xl border border-[#E6E6EE] px-5 py-4 font-medium transition-colors duration-300 ${
                      isActive
                        ? "bg-[#5865F2] text-white"
                        : "text-[#252547] hover:bg-[#F7F7FD]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 flex justify-center gap-5">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5865F2] text-white transition">
            <FaFacebookF size={15} />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D9E8] text-[#9B9BA8] transition hover:border-[#5865F2] hover:text-[#5865F2]">
            <FaYoutube size={16} />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9D9E8] text-[#9B9BA8] transition hover:border-[#5865F2] hover:text-[#5865F2]">
            <FaInstagram size={16} />
          </button>
        </div>

        <p className="mt-10 text-center text-[#A5A5AF]">
          ©️ 2020, UI8 LLC.
        </p>
      </div>
    </footer>
  );
}

export default Footer;