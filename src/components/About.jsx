import React from 'react'
import { FiCode, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi'

const About = () => {
  const stats = [
    {
      icon: FiCode,
      number: '10+',
      label: 'Projects Completed',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiUsers,
      number: '20+',
      label: 'Happy Clients',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiTrendingUp,
      number: '2+',
      label: 'Years Experience',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiAward,
      number: '10+',
      label: 'Technologies',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text font-display mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 font-display">
              Frontend Developer & JavaScript Enthusiast
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate frontend developer with expertise in building scalable, 
                user-friendly web applications. My journey in web development started with 
                a curiosity about how websites work, and it has evolved into a deep love 
                for creating digital experiences that make a difference.
              </p>
              
              <p>
                With a strong foundation in modern JavaScript frameworks, particularly React.js, 
                I specialize in transforming complex problems into simple, beautiful, and 
                intuitive solutions. I believe in writing clean, maintainable code and 
                staying up-to-date with the latest industry trends and best practices.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I'm always eager to take on new challenges and collaborate on exciting projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Innovation'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium border border-primary-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-center gradient-text font-display mb-8">
            Technical Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Frontend</h4>
              <div className="space-y-2">
                {['React.js', 'Redux Toolkit', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Tools & Technologies</h4>
              <div className="space-y-2">
                {['Git & GitHub', 'Vite', 'npm/yarn', 'REST APIs', 'Responsive Design'].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Soft Skills</h4>
              <div className="space-y-2">
                {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability'].map((skill) => (
                  <div key={skill} className="text-gray-600">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
