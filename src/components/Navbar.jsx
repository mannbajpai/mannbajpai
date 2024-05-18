import { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import resume from "../assets/resume.pdf"

const Navbar = () => {

  const [nav, setNav] = useState(false);
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "cupcake"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else {
      setTheme("cupcake");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <nav className='flex justify-between px-4 h-32 w-full items-center bg-secondary navbar'>
      <div>
        <h1 className='font-logo md:text-4xl text-5xl font-bold'>Mann Bajpai</h1>
        <label className="swap swap-rotate px-4">

          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={handleToggle} />

          {/* sun icon */}
          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

          {/* moon icon */}
          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>
      </div>

      <ul className='hidden md:flex flex-end justify-between items-center'>
        <li className='mr-4 text-xl cursor-pointer'><a href="#about">About</a></li>
        <li className='mr-4 text-xl cursor-pointer'><a href="#projects">Projects</a></li>
        <li className='mr-4 text-xl cursor-pointer'><a href='#contact'>Contact</a></li>
        <li className='mr-4 text-xl cursor-pointer'><a href='#footer'>Socials</a></li>
      </ul>
      <div className='hidden md:flex'>
        <a href={resume} download="Mann's Resume" target='_blank' rel="noreferrer">
          <button className='btn mr-6 bg-primary hover:bg-primary-focus'>Download CV</button>
        </a>
      </div>
      <div className="md:hidden bg-primary hover:bg-primary-focus text-primary-content btn m-1 z-20" onClick={() => setNav(!nav)}>{nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}</div>
      {nav &&
        <ul className="z-10 flex flex-col justify-center items-center absolute top-0 right-0 h-4/5 w-full bg-gradient-to-b from-secondary to-base-100">
          <li className='m-4 py-5 text-3xl cursor-pointer'><a href="#about">About</a></li>
          <li className='m-4 py-5 text-3xl cursor-pointer'><a href="#projects">Projects</a></li>
          <li className='m-4 py-5 text-3xl cursor-pointer'><a href='#contact'>Contact</a></li>
          <li className='m-4 py-5 text-3xl cursor-pointer'><a href='#footer'>Socials</a></li>
          <a href={resume} download="Mann's Resume" target='_blank' rel="noreferrer">
            <button className='btn h-18 mt-5 bg-primary hover:bg-primary-focus text-xl text-primary-content'>Download CV</button>
          </a>

        </ul>}
    </nav>
  )
}

export default Navbar