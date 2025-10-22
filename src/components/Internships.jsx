import { FaMapMarkerAlt, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
const Internships = () => {
  const internships = [
    {
      title: "SDE Intern",
      company: "Heizen",
      location: "San Francisco (Remote)",
      duration: "September 2025 - Present",
      description: "Engineered a full-stack applications for client demands, ensuring code quality and team collaboration.",
      achievements: [
        "Engineered a full-stack applications for client demands, ensuring code quality and team collaboration."
      ],
      type: "Current",
      featured: true
    },
    {
      title: "AI Research and DevOps Engineer Intern",
      company: "MyOoumph Networks Pvt Ltd",
      location: "Remote",
      duration: "September 2024 - February 2025",
      description: "Implemented data analytics platform using Amplitude, increasing user engagement metrics by 25% across mobile and web applications.",
      achievements: [
        "Implemented data analytics platform using Amplitude, increasing user engagement metrics by 25% across mobile and web applications",
        "Designed and deployed scalable cloud architecture for efficient data processing, reducing processing time by 30%",
        "Developed automated CI/CD pipeline using Docker and GitHub Actions, decreasing deployment time from 2 hours to 15 minutes"
      ],
      type: "Completed",
      featured: true
    },
    {
      title: "Cloud Operations Engineer Intern",
      company: "Thales Group (Digital Identity & Security)",
      location: "Noida, UP",
      duration: "July 2024 - September 2024",
      description: "Architected and deployed production-level application on AWS, implementing best practices for security and scalability.",
      achievements: [
        "Architected and deployed production-level application on AWS, implementing best practices for security and scalability",
        "Configured and optimized AWS services including EC2, S3, RDS, and Lambda, resulting in 40% cost savings",
        "Completed AWS Solutions Architect - Associate (SAA-03) certification training, applying knowledge to optimize cloud infrastructure"
      ],
      type: "Completed",
      featured: true
    }
  ];

  return (
    <section id="internships" className="section-padding bg-base-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-primary">Work Experience</h2>
          <p className="text-body max-w-3xl mx-auto">
            My professional journey includes internships at leading technology companies, 
            where I&apos;ve gained hands-on experience in full-stack development, AI research, and cloud operations.
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship) => (
            <div key={internship.title} className="card-modern p-8 group hover:shadow-strong transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                      <FaBriefcase className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="heading-tertiary">{internship.title}</h3>
                      <p className="text-lg font-semibold text-primary">{internship.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-small">
                      <FaCalendarAlt className="text-base-content/70" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-small">
                      <FaMapMarkerAlt className="text-base-content/70" />
                      <span>{internship.location}</span>
                    </div>
                    <span className={`badge ${
                      internship.type === 'Current' 
                        ? 'badge-accent' 
                        : 'badge-secondary'
                    }`}>
                      {internship.type}
                    </span>
                  </div>
                </div>
                
                {internship.featured && (
                  <span className="badge badge-primary self-start">Featured</span>
                )}
              </div>

            <p className="text-body mb-6">{internship.description}</p>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-base-content/80">Key Achievements</h4>
                <ul className="space-y-3">
                  {internship.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-small text-base-content/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <h3 className="heading-secondary mb-4">Interested in Working Together?</h3>
            <p className="text-body mb-6">
              I&apos;m always open to discussing new opportunities and exciting projects. 
              Let&apos;s connect and explore how we can work together!
            </p>
            <a href="#contact">
              <button className="btn btn-gradient btn-lg group">
                Get In Touch
                <FiExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Internships
