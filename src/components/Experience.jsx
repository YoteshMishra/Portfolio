import React from 'react'
import { FiBriefcase, FiCalendar, FiMapPin, FiArrowRight } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Albatross Software Services Pvt. Ltd.',
      location: 'On-site',
      duration: 'Aug 2024 – Feb 2025',
      type: 'Full-time',
      description: 'Developed AI-powered solutions and optimized backend architecture for improved performance and user experience.',
      achievements: [
        'Developed an AI-powered chatbot using React.js and Dialogflow to handle user queries and reduce manual intervention',
        'Built and optimized backend architecture using Node.js and Express.js for improved stability and faster response times',
        'Collaborated with cross-functional teams to enhance chatbot performance by optimizing API handling'
      ],
      technologies: ['React.js', 'Dialogflow', 'Node.js', 'Express.js', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Freelance Frontend Developer',
      company: 'Freelance',
      location: 'Remote',
      duration: 'Oct 2023 – July 2024',
      type: 'Freelance',
      description: 'Designed and implemented dynamic UI solutions with performance optimization techniques for enhanced user experience.',
      achievements: [
        'Designed and implemented a dynamic UI dashboard using React.js and Tailwind CSS to streamline business processes',
        'Integrated frontend and backend functionalities using Node.js for seamless user experience',
        'Applied performance optimization techniques such as lazy loading, code splitting, and image compression'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'JavaScript', 'Performance Optimization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'UI Developer',
      company: 'Servion Global Solutions',
      location: 'On-site',
      duration: 'Sep 2022 – Sep 2023',
      type: 'Full-time',
      description: 'Developed responsive and accessible UI components with focus on cross-browser compatibility and code maintainability.',
      achievements: [
        'Developed responsive and accessible UI components compatible with all major browsers',
        'Applied object-oriented programming principles to improve code structure and maintainability',
        'Worked with SQL to fine-tune database queries and improve data access performance'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'SQL', 'OOP'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'RPA Developer',
      company: 'Servion Global Solutions',
      location: 'On-site',
      duration: 'Jul 2021 – Sep 2022',
      type: 'Full-time',
      description: 'Managed robotic process automation solutions and collaborated with clients to optimize workflow automation.',
      achievements: [
        'Managed and maintained robotic process automation (RPA) bots using NICE',
        'Collaborated with clients to refine automation requirements, ensuring seamless integration and uninterrupted workflows'
      ],
      technologies: ['NICE RPA', 'Process Automation', 'Client Collaboration'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text font-display mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey from RPA development to frontend specialization, building AI-powered solutions and dynamic user interfaces
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                        <FiBriefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary-600">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <FiArrowRight className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold gradient-text font-display mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <FiArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
