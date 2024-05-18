import { BsGithub, BsLinkedin } from "react-icons/bs"
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
const Footer = () => {
  return (
    <footer id="footer" className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4 text-lg">
        <a href="#about" className="link link-hover">About Me</a>
        <a href="#projects" className="link link-hover">My Projects</a>
        <a href="#contact" className="link link-hover">Contact Me</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a className="mx-2 p-2" target="_blank" rel="noreferrer" href="https://github.com/mannbajpai"><BsGithub size={45} /></a>
          <a className="mx-2 p-2" target="_blank" rel="noreferrer" href="https://x.com/minjacodes"><FaSquareXTwitter size={45} /></a>
          <a className="mx-2 p-2" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mannbajpai/"><BsLinkedin size={45} /></a>
          <a className="mx-2 p-2" target="_blank" rel="noreferrer" href="https://leetcode.com/u/mannbajpai/"><SiLeetcode size={45} /></a>
        </div>
      </div>
      <div>
        <p className="text-xl">Copyright © 2024 - Mann Bajpai</p>
      </div>
    </footer>
  )
}

export default Footer