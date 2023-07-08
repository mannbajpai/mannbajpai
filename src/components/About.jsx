import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
import { SiHashnode } from "react-icons/si"

import { languages, technologies } from "../constants/skills"
import rgipt from "../assets/rgipt-logo.png"

const About = () => {
  languages.map((language) => {
    console.log(language.name + " " + language.icon);
  })
  technologies.map((tech) => {
    console.log(tech.name);
  })
  return (
    <div className="min-h-fit bg-secondary py-2 text-center">
      <h1 className="px-10 text-5xl font-semibold mt-4">About Me!</h1>
      <div className='flex-row'>
        <div className='flex-row md:h-72 w-full bg-secondary text-center py-4 px-6'>
          <h1 className="text-2xl font-semibold mb-4 bg-neutral rounded-2xl">Education</h1>
          <div className="card md:card-side bg-base-100 shadow-xl md:h-52  m-4 items-center">
            <img src={rgipt} className="px-4 md:my-4 mt-8 md:w-48 w-36 rounded-xl" alt="RGIPT, Jais" />
            <div className="card-body items-center">
              <h2 className="card-title md:text-3xl">Rajiv Gandhi Institute of Petroleum Technology, Jais</h2>
              <p>B.Tech in Computer Science + M.Tech in Artificial Intelligence (Dual Degree)</p>
            </div>
          </div>
        </div>
        <div className='flex-row md:h-72 w-full bg-secondary text-center py-4 px-6'>
          <h1 className="text-2xl font-semibold bg-neutral rounded-2xl">Tech Stack</h1>
        </div>
        <div className='flex-row md:h-72 h-[60vh] w-full bg-secondary text-center py-4 px-6 justify-center'>
          <h1 className="text-2xl font-semibold bg-neutral rounded-2xl">Public Profile</h1>
          <div className="my-8 px-8 h-36">
            <div className="grid md:grid-flow-col grid-flow-row">
              <div className="mx-4 btn md:h-20 h-10 my-4 rounded-3xl glass hover:bg-primary">
                <BsGithub className="text-base-200" size={50} />
              </div>
              <div className="mx-4 btn md:h-20 h-10 my-4 rounded-3xl glass hover:bg-primary">
                <BsTwitter className="text-base-200 " size={50} />
              </div>
              <div className="mx-4 btn md:h-20 h-10 my-4 rounded-3xl glass hover:bg-primary">
                <BsLinkedin className="text-base-200" size={50} />
              </div>
              <div className="mx-4 btn md:h-20 h-10  my-4 rounded-3xl glass hover:bg-primary">
                <SiHashnode className="text-base-200" size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About