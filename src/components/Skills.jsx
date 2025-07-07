import React from 'react'
import { FiCode, FiTool, FiUsers, FiTrendingUp } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: FiCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 90, description: 'Advanced component architecture and hooks' },
        { name: 'Redux Toolkit', level: 85, description: 'State management and efficient Redux patterns' },
        { name: 'JavaScript (ES6+)', level: 95, description: 'Modern JavaScript features and best practices' },
        { name: 'TypeScript', level: 60, description: 'Basic understanding of type-safe development' },
        { name: 'HTML5 & CSS3', level: 95, description: 'Semantic markup and modern CSS features' },
        { name: 'Tailwind CSS', level: 90, description: 'Utility-first CSS framework' },
        { name: 'Bootstrap', level: 85, description: 'Responsive design framework' }
      ]
    },
    {
      id: 2,
      title: 'Tools & Technologies',
      icon: FiTool,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 90, description: 'Version control and collaboration' },
        { name: 'Vite', level: 85, description: 'Fast build tool and dev server' },
        { name: 'Webpack', level: 75, description: 'Module bundler and build tool' },
        { name: 'npm/yarn', level: 90, description: 'Package management' },
        { name: 'VS Code', level: 95, description: 'Code editor and extensions' },
        { name: 'Chrome DevTools', level: 85, description: 'Debugging and performance analysis' }
      ]
    },
    {
      id: 3,
      title: 'Soft Skills',
      icon: FiUsers,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Problem Solving', level: 90, description: 'Analytical thinking and debugging' },
        { name: 'Team Collaboration', level: 85, description: 'Agile methodologies and teamwork' },
        { name: 'Communication', level: 80, description: 'Clear technical communication' },
        { name: 'Time Management', level: 85, description: 'Project planning and delivery' },
        { name: 'Adaptability', level: 90, description: 'Learning new technologies quickly' },
        { name: 'Leadership', level: 75, description: 'Mentoring and guiding team members' }
      ]
    }
  ]



  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text font-display mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                          <div
                            className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>



        {/* Skills Summary */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold gradient-text font-display mb-6">
              Continuous Learning Journey
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FiCode className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">2+ Years</h4>
                <p className="text-gray-600">Professional Experience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FiTrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">15+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <FiTool className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">10+</h4>
                <p className="text-gray-600">Technologies Mastered</p>
              </div>
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm passionate about staying up-to-date with the latest technologies and best practices 
              in web development. Always eager to learn new skills and take on challenging projects 
              that push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
