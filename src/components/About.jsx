import { languages, technologies } from "../constants/skills"
import rgipt from "../assets/rgipt-logo.png"

const About = () => {
  return (
    <div id="about" className=" max-h-full bg-secondary py-2 text-center">
      <h1 className="px-10 text-5xl font-semibold mt-4">About Me!</h1>
      <div className='flex-row mb-4'>
        {/* Education */}
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
        {/* Tech Stack */}
        <div className='flex-row xl:h-90 w-full bg-secondary text-center py-4 px-6'>
          <h1 className="text-2xl font-semibold bg-neutral rounded-2xl">Tech Stack</h1>
          {technologies.map((tech) =>
            <div className="avatar m-2" key={tech.name}>
              <div className="w-40 md:w-32 rounded">
                <tech.icon size={60} />
                <p className="text-lg font-semibold capitalize">{tech.name}</p>
              </div>
            </div>)}
          {languages.map((language) =>
            <div className="avatar" key={language.name}>
              <div className="w-40 md:32 rounded">
                <language.icon size={60} />
                <p className="text-lg font-semibold capitalize">{language.name}</p>
              </div>
            </div>)}
        </div>


      </div>
    </div>
  )
}

export default About