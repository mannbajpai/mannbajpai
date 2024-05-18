import avatar from "../assets/avatar.jpg"
import Typewriter from 'typewriter-effect';
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <img src={avatar} alt='hero' className="rounded-lg shadow-2xl" />
        <div>
          <h1 className="lg:text-6xl text-5xl font-bold text-neutral-content">
            <Typewriter
              options={{
                strings: ['Hello !!', 'I am Mann✌️', 'Welcome to my website ^_^'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-6 text-neutral-content lg:text-2xl">I am a pasionate developer who likes to make apps and website like this one.
            I am from India. Check the about section to know more about me.
            <br />
            Want to know how I made this website?</p>
          <a href="#contact">
            <button className="btn btn-primary mr-4">Connect With Me</button>
          </a>
          <a href={resume} download="Mann's Resume" target='_blank' rel="noreferrer">
            <button className="btn btn-ghost ml-4">Download CV</button>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Hero