// import { useState } from "react";
import { Container } from "../shared/Container";
//  import logo from "/assets/icon.svg";
// import { NavItem } from "../shared/NavItem";
// // import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";
import { FaHome, FaUsers, FaGraduationCap, FaImage, FaGlobe, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// export const navItems = [
//   { href: "/", text: "Home" },
//   { href: "/about", text: "About Us" },
//   // { href: "#services", text: "Services" },
//   { href: "/internship", text: "Internship" },
//   { href: "https://www.inex-india.com/hei-award.php", text: "INEX" , target:"_blank"},
//   { href: "/gallery", text: "Gallery" },
//   { href: "/connect", text: "Connect" },
// ];

export const Navbar = () => {
  const navigate = useNavigate();
  const { toggleTheme, theme } = useThemeStore();

  interface NavItem {
    icon: React.ReactNode;
    href: string;
    label: string;
    external?: boolean;
  }

  const navItems: NavItem[] = [
    { icon: <FaHome />, href: "/", label: "Home" },
    { icon: <FaUsers />, href: "/about", label: "About" },
    { icon: <FaGraduationCap />, href: "/internship", label: "Internship" },
    { icon: <FaGlobe />, href: "https://www.inex-india.com/hei-award.php", label: "INEX", external: true },
    { icon: <FaImage />, href: "/gallery", label: "Gallery" },
    { icon: <FaPaperPlane />, href: "/connect", label: "Connect" },
  ];

  const handleClick = (item: NavItem) => {
    if (item.external) {
      window.open(item.href, "_blank");
    } else {
      navigate(item.href);
    }
  };
  
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute bg--color-bg inset-x-0 top-0 z-50 py-6 bg-body">
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
          {/* <button
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
          </button> */}

          {/* Navigation Menu */}
          <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-xl rounded-full px-3 py-2 flex gap-2">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <button
                onClick={() => handleClick(item)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-700 hover:text-white text-gray-800 transition-all focus:outline-none"
              >
                {item.icon}
              </button>
              <span
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-green-500 text-heading-1 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200"
              >
                {item.label}
              </span>
            </div>
          ))}
        </nav>
  

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



