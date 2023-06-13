import React from 'react'
import avatar from "../assets/avatar.jpg"
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row">
    <img src={avatar} alt='hero' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"><Typewriter
  options={{
    strings: ['Hello !!', 'I am Mann✌️','Welcome to my website ^_^'],
    autoStart: true,
    loop: true,
  }}
/></h1>
      <p className="py-6">I am a pasionate developer who likes to make apps and website like this one.
      I am from India. Check the about section to know more about me.
      <br/>
      Want to know how I made this website?</p>
      <button className="btn btn-primary">Check Source Code</button>
    </div>
  </div>
</div>
  )
}

export default Hero