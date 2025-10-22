import { languages, technologies } from "../constants/skills"
import rgipt from "../assets/rgipt-logo.png"
import { FaGraduationCap, FaCode, FaBrain, FaCloud } from "react-icons/fa6"
import { FaDatabase, FaLaptop } from "react-icons/fa";

const About = () => {
  // Categorize technologies
  const webTechs = technologies.filter(tech =>
    ['react', 'nodejs', 'nextjs', 'nestjs', 'django', 'graphql', 'tailwind', 'fastapi', 'html5', 'css3'].includes(tech.name)
  );
  const cloudDevOpsTechs = technologies.filter(tech =>
    ['linux', 'aws', 'docker', 'kubernetes', 'terraform', 'gcp', 'azure', 'cicd', 'git'].includes(tech.name)
  );
  const databaseTechs = technologies.filter(tech =>
    ['postgresql', 'mysql', 'firebase', 'supabase', 'mongodb'].includes(tech.name)
  );
  const aiMlTechs = technologies.filter(tech =>
    ['pytorch', 'tensorflow', 'huggingface', 'cnn', 'rnn', 'lstm', 'gan', 'transformers', 'nlp', 'langchain', 'langgraph'].includes(tech.name)
  );
  const devToolsTechs = technologies.filter(tech =>
    ['vscode', 'github', 'jira', 'amplitude'].includes(tech.name)
  );

  const skillCategories = [
    { title: "Web Technologies", icon: FaLaptop, techs: webTechs, color: "secondary" },
    { title: "Cloud & DevOps", icon: FaCloud, techs: cloudDevOpsTechs, color: "accent" },
    { title: "Databases", icon: FaDatabase, techs: databaseTechs, color: "info" },
    { title: "Machine Learning & AI", icon: FaBrain, techs: aiMlTechs, color: "warning" },
    { title: "Developer Tools", icon: FaCode, techs: devToolsTechs, color: "success" },
  ];

  return (
    <section id="about" className="section-padding bg-base-200">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-primary">About Me</h2>
          <p className="text-body max-w-3xl mx-auto">
            A passionate developer with a love for creating innovative solutions and
            exploring the intersection of technology and artificial intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-3xl text-primary" />
              <h3 className="heading-secondary">Education</h3>
            </div>

            <div className="space-y-6">
              {/* RGIPT */}
              <div className="card-modern p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={rgipt}
                    className="w-16 h-16 rounded-xl object-contain bg-base-100 p-2"
                    alt="RGIPT Logo"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <h4 className="heading-tertiary">Rajiv Gandhi Institute of Petroleum Technology</h4>
                    <p className="text-small font-medium text-primary mb-2">
                      B.Tech + M.Tech in Computer Science Engineering with AI Specialization
                    </p>
                    <div className="flex flex-wrap gap-4 text-small">
                      <span className="badge badge-outline">2021 - 2026</span>
                      <span className="badge badge-primary">CGPA: 8.5/10.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* School */}
              <div className="card-modern p-6">
                <div className="space-y-4">
                  <h4 className="heading-tertiary">St. Fidelis College, Lucknow</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-body">ISC (Class XII)</span>
                      <span className="badge badge-secondary">91%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-body">ICSE (Class X)</span>
                      <span className="badge badge-accent">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <FaBrain className="text-3xl text-accent" />
              <h3 className="heading-secondary">Technical Skills</h3>
            </div>

            <div className="space-y-6">
              {skillCategories.map((category) => (
                <div key={category.title} className="card-modern p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className={`text-xl text-${category.color}`} />
                    <h4 className="heading-tertiary">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech) => (
                      <div key={tech.name} className="badge-tech">
                        <tech.icon className="w-4 h-4 mr-1" />
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="card-modern p-8">
          <h3 className="heading-secondary text-center mb-8">Programming Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {languages.map((language) => (
              <div key={language.name} className="flex flex-col items-center p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors duration-200">
                <language.icon className="text-4xl mb-3 text-primary" />
                <span className="font-medium capitalize">{language.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About