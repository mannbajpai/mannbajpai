import React from 'react'
import {BsGithub, BsLinkedin, BsTwitter, BsTerminal} from "react-icons/bs"
import {FiZap} from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <BsGithub size={30}/>
      <BsTwitter size={30}/>
      <BsLinkedin size={30}/>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - Mann Bajpai</p>
  </div>
</footer>
  )
}

export default Footer