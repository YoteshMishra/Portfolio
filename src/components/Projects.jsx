import React from 'react'
import { FiExternalLink, FiGithub, FiCode, FiStar } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A modern, responsive dashboard for managing e-commerce operations with real-time analytics, inventory management, and order tracking.',
      image: '/e-com.PNG',
      technologies: ['TypeScript', 'Angular', 'Bootstrap', 'REST API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'Bootstrap', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Geolocation'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern design principles with smooth animations and optimal performance.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'Tailwind CSS', 'Vite', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Restaurant Landing Page',
      description: 'An elegant restaurant website with online reservation system, menu showcase, and customer review integration.',
      image: '/api/placeholder/400/250',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A full-featured blogging platform with content management, user authentication, and social sharing capabilities.',
      image: '/api/placeholder/400/250',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text font-display mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for web development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 lg:h-56 bg-gradient-to-br from-primary-100 to-secondary-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <FiCode className="w-16 h-16 text-primary-500 mx-auto mb-2" />
                    <p className="text-primary-600 font-medium">Project Screenshot</p>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent-500 to-primary-500 text-white shadow-lg">
                      <FiStar className="w-3 h-3 mr-1" />
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                  >
                    <FiGithub className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-800 font-display mb-8">
            Other Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <FiCode className="w-8 h-8 text-gray-500" />
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-primary-500 text-white rounded text-sm hover:bg-primary-600 transition-colors duration-300"
                    >
                      <FiExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors duration-300"
                    >
                      <FiGithub className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </div>
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
