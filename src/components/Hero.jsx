import avatar from "../assets/avatar.jpg"
import Typewriter from 'typewriter-effect';
import resume from "../assets/resume.pdf";
import { HiArrowDown } from "react-icons/hi";
import { Helmet } from "react-helmet-async";
import { personalInfo } from "../data/portfolioData";

/**
 * Hero component - The main landing section of the portfolio
 * Displays personal information, typewriter effect, and call-to-action buttons
 * Uses centralized data from portfolioData.js for easy content updates
 */
const Hero = () => {
  return (
    <>
      <Helmet>
        <title>{personalInfo.title}</title>
        <meta name="description" content={personalInfo.description} />
        <meta name="keywords" content={personalInfo.keywords} />
        <meta property="og:title" content={personalInfo.ogTitle} />
        <meta property="og:description" content={personalInfo.ogDescription} />
        <meta property="og:image" content={avatar} />
        <meta property="og:url" content={personalInfo.ogUrl} />
        <meta name="twitter:card" content={personalInfo.twitterCard} />
      </Helmet>
      <section className="min-h-screen bg-base-100 flex items-center justify-center pt-20">
      <div className="container-custom">
        <div className="hero-content flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Avatar Section */}
          <div className="flex-shrink-0 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto relative">
                <img 
                  src={avatar} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover rounded-3xl shadow-strong border-4 border-primary/20"
                  loading="lazy"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl -z-10 blur-xl"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center animate-bounce-gentle">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="mb-6">
              <h1 className="heading-primary mb-4">
                <Typewriter
                  options={{
                    strings: personalInfo.typewriterStrings,
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                  }}
                />
              </h1>
              <p className="text-gradient text-xl md:text-2xl font-semibold mb-6">
                Building the future, one line of code at a time
              </p>
            </div>

            <p className="text-body mb-8 max-w-xl mx-auto lg:mx-0">
              {personalInfo.bio}
              <br />
              <span className="text-primary font-medium">Let&apos;s build something amazing together!</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#contact">
                <button className="btn btn-gradient btn-lg group">
                  Connect With Me
                  <HiArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-200" />
                </button>
              </a>
              <a href={resume} download="Mann's Resume" target='_blank' rel="noreferrer">
                <button className="btn btn-outline btn-lg hover:btn-gradient">
                  Download CV
                </button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center p-4 bg-base-200 rounded-xl">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-base-content/70">Years Coding</div>
              </div>
              <div className="text-center p-4 bg-base-200 rounded-xl">
                <div className="text-2xl font-bold text-accent">10+</div>
                <div className="text-sm text-base-content/70">Projects</div>
              </div>
              <div className="text-center p-4 bg-base-200 rounded-xl col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-secondary-content">∞</div>
                <div className="text-sm text-base-content/70">Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="btn btn-ghost btn-circle">
            <HiArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero