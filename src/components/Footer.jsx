import { BsGithub } from "react-icons/bs"
import { FaLinkedin, FaSquareXTwitter, FaHeart } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#internships", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { 
      icon: BsGithub, 
      href: "https://github.com/mannbajpai", 
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/mannbajpai/", 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    { 
      icon: FaSquareXTwitter, 
      href: "https://x.com/minjacodes", 
      label: "Twitter",
      color: "hover:text-black dark:hover:text-white"
    },
    { 
      icon: SiLeetcode, 
      href: "https://leetcode.com/u/mannbajpai/", 
      label: "LeetCode",
      color: "hover:text-orange-500"
    },
  ];

  return (
    <footer id="footer" className="bg-base-300 border-t border-base-200">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="section-padding-sm">
          {/* Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-6 sm:mb-8">

            {/* Navigation Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="heading-tertiary text-base sm:text-lg lg:text-xl">Quick Links</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.href}
                    href={link.href} 
                    className="text-small hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="heading-tertiary text-base sm:text-lg lg:text-xl">Connect With Me</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-base-100 rounded-xl flex items-center justify-center text-lg sm:text-xl text-base-content/70 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-medium`}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 sm:pt-8 border-t border-base-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-xs sm:text-sm text-base-content/60 text-center sm:text-left">
                © {currentYear} Mann Bajpai. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-base-content/60">
                <span>Made with</span>
                <FaHeart className="text-red-500 animate-pulse text-sm" />
                <span>in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer