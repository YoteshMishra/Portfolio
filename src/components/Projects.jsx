import React from 'react'
import { FiExternalLink, FiGithub, FiCode, FiStar } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MarketNest - Modern E-commerce Platform',
      description: 'A fully-featured, responsive e-commerce platform built with modern React ecosystem. Features smart product search, intelligent shopping cart, secure checkout, order tracking, and comprehensive admin panel with analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center',
      technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Vite', 'Firebase'],
      liveUrl: 'https://marketnest-onlineshop.netlify.app/',
      githubUrl: 'https://github.com/YoteshMishra/MarketNest',
      featured: true
    },
    {
      id: 2,
      title: 'Legal Case Tracker Pro',
      description: 'A comprehensive legal case management system with Google Calendar integration, deadline management, court location mapping, and vibrant modern UI. Perfect for lawyers and legal professionals.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop&crop=center',
      technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Firebase', 'Google Maps API'],
      liveUrl: 'https://case-tracker-pro.netlify.app/',
      githubUrl: 'https://github.com/YoteshMishra/Case-Tracker-App',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A comprehensive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      liveUrl: null,
      githubUrl: 'https://github.com/YoteshMishra/Task-Management',
      featured: false
    },
    {
      id: 4,
      title: 'E-Commerce Web Application (Angular)',
      description: 'A comprehensive e-commerce web application built with TypeScript and Angular, featuring product catalog, shopping cart, and user authentication.',
      image: '/e-com.PNG',
      technologies: ['TypeScript', 'Angular', 'Bootstrap', 'REST API'],
      liveUrl: null,
      githubUrl: 'https://github.com/YoteshMishra/Ecommerce-web',
      featured: false
    },
    {
      id: 5,
      title: 'Code Playground',
      description: 'An interactive code playground for testing and running JavaScript code with real-time output and syntax highlighting.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'CodeMirror'],
      liveUrl: 'https://code-playground2.vercel.app/',
      githubUrl: 'https://github.com/YoteshMishra/CodePlayground2',
      featured: false
    },
    {
      id: 6,
      title: 'Chatbot Application',
      description: 'An intelligent chatbot application with natural language processing and real-time conversation capabilities.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop&crop=center',
      technologies: ['JavaScript', 'Node.js', 'NLP', 'Socket.io'],
      liveUrl: null,
      githubUrl: 'https://github.com/YoteshMishra/chatbot-app',
      featured: false
    },
    {
      id: 7,
      title: 'Dashboard Application',
      description: 'A responsive dashboard application with data visualization, charts, and real-time analytics for business insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
      technologies: ['JavaScript', 'React', 'Chart.js', 'CSS3'],
      liveUrl: null,
      githubUrl: 'https://github.com/YoteshMishra/Dashboard',
      featured: false
    },
    {
      id: 8,
      title: 'Calculator Application',
      description: 'A basic calculator application with standard mathematical operations and a clean, user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&h=250&fit=crop&crop=center',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM'],
      liveUrl: null,
      githubUrl: 'https://github.com/YoteshMishra/Calculator',
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
                {project.image.startsWith('/api/placeholder') ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FiCode className="w-16 h-16 text-primary-500 mx-auto mb-2" />
                      <p className="text-primary-600 font-medium">Project Screenshot</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
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
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <FiExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                  >
                    <FiGithub className="w-4 h-4 mr-2" />
                    View Code
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
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                  {project.image.startsWith('/api/placeholder') ? (
                    <FiCode className="w-8 h-8 text-gray-500" />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  )}
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
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-primary-500 text-white rounded text-sm hover:bg-primary-600 transition-colors duration-300"
                      >
                        <FiExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      className={`${project.liveUrl ? 'flex-1' : 'w-full'} inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors duration-300`}
                    >
                      <FiGithub className="w-3 h-3 mr-1" />
                      View Code
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
