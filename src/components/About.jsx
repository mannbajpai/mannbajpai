import {languages, technologies} from "../constants/skills"

const About = () => {
  languages.map((language) => {
    console.log(language.name+" "+language.icon);
  })
  technologies.map((tech) => {
    console.log(tech.name);
  })
  return (
    <div className='flex-row'>
      <div className='flex-row h-72 w-full bg-secondary text-center py-4 px-6'>
        <h1 className="text-2xl font-semibold mb-4 bg-neutral">Education</h1>
        <p className="text-neutral-content">Rajiv Gandhi Institute of Petroleum Technology,Jais
          <p>B.Tech in Computer Science + M.Tech in AI</p>
        </p>
        <br />
        <p className="">St. Fidelis College, Lucknow<p>
          94% in &quot;X&quot; ICSE<br />91% in &quot;XII&quot; ISC<br />JEE Advanced 2021
        </p></p>
      </div>
      <div className='flex-row h-72 w-full bg-secondary text-center py-4 px-6'>
        <h1 className="text-2xl font-semibold bg-secondary-focus">Tech Stack</h1>
      </div>
      <div className='flex-row h-72 w-full bg-secondary text-center py-4 px-6'>
        <h1 className="text-2xl font-semibold bg-secondary-focus">Public Profile</h1>
        <p className="">Nodejs</p>
      </div>
    </div>
  )
}

export default About