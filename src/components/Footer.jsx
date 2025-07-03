import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/yoteshmishra',
      icon: FiGithub,
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yotesh-kumar-754545161/',
      icon: FiLinkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      href: 'mailto:yoteshmishra1853@gmail.com',
      icon: FiMail,
      color: 'hover:text-red-500'
    },
    {
      name: 'Phone',
      href: 'tel:+918340112261',
      icon: FiPhone,
      color: 'hover:text-green-500'
    }
  ]

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg font-display">YK</span>
              </div>
              <span className="text-xl font-bold gradient-text font-display">
                Yotesh Kumar
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Frontend Developer passionate about creating beautiful, 
              functional web experiences with modern technologies.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:yoteshmishra1853@gmail.com"
                className="block text-gray-600 hover:text-primary-600 transition-colors duration-300"
              >
                yoteshmishra1853@gmail.com
              </a>
              <a 
                href="tel:+918340112261"
                className="block text-gray-600 hover:text-primary-600 transition-colors duration-300"
              >
                +91 8340112261
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-3 rounded-full bg-gray-100 text-gray-600 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Yotesh Kumar Mishra. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              Made with <FiHeart className="w-4 h-4 text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
