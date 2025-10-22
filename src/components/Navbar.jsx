import { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { HiSun, HiMoon } from "react-icons/hi"
import resume from "../assets/resume.pdf"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#internships", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#footer", label: "Socials" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-base-100/95 backdrop-blur-md shadow-medium border-b border-base-200' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-gradient">
              Mann Bajpai
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-base-content/80 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <label className="swap swap-rotate btn btn-ghost btn-circle">
                <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
                <HiSun className="swap-on w-5 h-5" />
                <HiMoon className="swap-off w-5 h-5" />
              </label>
              
              {/* Download CV Button */}
              <a href={resume} download="Mann's Resume" target='_blank' rel="noreferrer">
                <button className="btn btn-gradient btn-sm">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Theme Toggle */}
            <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm">
              <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
              <HiSun className="swap-on w-4 h-4" />
              <HiMoon className="swap-off w-4 h-4" />
            </label>
            
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setNav(!nav)}
              aria-label="Toggle menu"
            >
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {nav && (
          <div className="lg:hidden">
            <div className="px-4 pt-2 pb-6 space-y-2 bg-base-100/95 backdrop-blur-md border-t border-base-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-base-content/80 hover:text-primary hover:bg-base-200 rounded-lg transition-all duration-200"
                  onClick={() => setNav(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <a href={resume} download="Mann's Resume" target='_blank' rel="noreferrer">
                  <button className="btn btn-gradient w-full">
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar