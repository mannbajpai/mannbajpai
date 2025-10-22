import { FaGithub, FaCode, FaRocket } from "react-icons/fa6"
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-base-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-primary">Featured Projects</h2>
          <p className="text-body max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, AI-powered tools, 
            and innovative solutions that demonstrate my technical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
    {projects.filter(project => project.featured).map((project) => (
            <div key={project.title} className="card-modern p-8 group hover:shadow-strong transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                    <FaCode className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="heading-tertiary">{project.title}</h3>
                    <span className="badge-category">{project.category}</span>
                  </div>
                </div>
                {project.featured && (
                  <span className="badge badge-accent">Featured</span>
                )}
              </div>

              <p className="text-body mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-base-content/70 mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-outline btn-sm group/link"
                  >
                    <FaGithub className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-gradient btn-sm group/link"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects */}
        <div className="space-y-6">
          <h3 className="heading-secondary text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project) => (
              <div key={project.title} className="card-modern p-6 group hover:shadow-medium transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                    <FaRocket className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <span className="badge badge-outline text-xs">{project.category}</span>
                  </div>
                </div>

                <p className="text-small mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="badge badge-outline text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="badge badge-outline text-xs">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-ghost btn-sm"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-ghost btn-sm"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects