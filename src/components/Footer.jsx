import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
import {SiHashnode} from "react-icons/si"

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About Me</a>
        <a className="link link-hover">My Projects</a>
        <a className="link link-hover">Contact Me</a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <BsGithub size={30} />
          <BsTwitter size={30} />
          <BsLinkedin size={30} />
          <SiHashnode size={30} />
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - Mann Bajpai</p>
      </div>
    </footer>
  )
}

export default Footer