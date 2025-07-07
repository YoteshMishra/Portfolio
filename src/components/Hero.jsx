import React from 'react'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Hero = () => {
  const techSkills = [
    'React.js',
    'Redux Toolkit',
    'JavaScript',
    'Bootstrap',
    'REST API',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Node.js'
  ]

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/YOTESH KUMAR MISHRA CV.pdf'
    link.download = 'Yotesh_Kumar_Mishra_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Greeting */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Yotesh
                </span>
                <br />
                <span className="text-gray-600">
                  Mishra
                </span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium">
                Frontend Developer & JavaScript Enthusiast
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Passionate frontend engineer with expertise in building scalable applications, 
              modern web technologies, and creating exceptional user experiences that drive business value.
            </p>

            {/* Tech Skills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {techSkills.map((skill, index) => (
                <span
                  key={skill}
                  className="tech-badge animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDownloadCV}
                className="btn-primary inline-flex items-center gap-2 text-lg"
              >
                <FiDownload className="w-5 h-5" />
                Download CV
              </button>
              
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/yoteshmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-primary-600 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yotesh-kumar-754545161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-primary-600 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:yoteshmishra1853@gmail.com"
                  className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-primary-600 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <FiMail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full opacity-20 animate-bounce-slow"></div>
              
              {/* Profile Image Container */}
              <div className="relative z-10 w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src="/Pic.jfif"
                      alt="Yotesh Kumar Mishra - Frontend Developer"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
