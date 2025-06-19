import { useState } from "react";
import { Container } from "../shared/Container";
// import logo from "/assets/icon.svg";
import { NavItem } from "../shared/NavItem";
// import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";

export const navItems = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About Us" },
  // { href: "#services", text: "Services" },
  { href: "/internship", text: "Internship" },
  { href: "https://www.inex-india.com/hei-award.php", text: "INEX" , target:"_blank"},
  { href: "/gallery", text: "Gallery" },
  { href: "/connect", text: "Connect" },
];

export const Navbar = () => {
  const { toggleTheme, theme } = useThemeStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed bg--color-bg inset-x-0 top-0 z-50 py-6 bg-body">
      <Container>
        <nav className="w-full flex justify-between items-center gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex relative z-50">
            <a href="/" className="relative flex items-center gap-6">
              <img src="assets/Images/logo.png" alt="PLYRoNeST Logo" className="w-40 h-15" />
              {/* <div className="inline-flex text-lg font-semibold text-heading-1">
                Plyronest
              </div> */}
            </a>
          </div>

          {/* Hamburger menu button (shown on mobile) */}
          <button
            className="lg:hidden z-50 p-2 border rounded-md border-box-border text-heading-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Navigation Menu */}
          <div
            className={`flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                      absolute lg:static top-full left-0 bg-body lg:bg-transparent 
                      border-x border-x-box-border lg:border-x-0 transition-all duration-300 
                      ${menuOpen ? "h-auto py-4 opacity-100 visible" : "h-0 opacity-0 invisible"} lg:opacity-100 lg:visible lg:h-auto`}
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                           pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 
                           text-lg text-heading-2 w-full lg:justify-center lg:items-center"
            >
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} target={item.target} key={key} />
              ))}
            </ul>
          </div>

          {/* Theme toggle button */}
          <div className="min-w-max flex items-center gap-x-3 z-50">
            <button
              onClick={toggleTheme}
              className="outline-hidden flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

