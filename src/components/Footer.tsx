import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Linkedin, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:edc@college.edu', label: 'Email' },
  ];

  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Entrepreneurship Development Cell</h2>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Igniting ideas and building the next generation of entrepreneurs through innovation, mentorship, and comprehensive support programs.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">About Us</Link></li>
                <li><Link to="/programs" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Events</Link></li>
                <li><Link to="/startup-support" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Startup Support</Link></li>
                <li><Link to="/team" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">Team</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>College Campus</li>
                <li>Innovation Block, Room 201</li>
                <li>edc@college.edu</li>
                <li>+91 12345 67890</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Entrepreneurship Development Cell. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;