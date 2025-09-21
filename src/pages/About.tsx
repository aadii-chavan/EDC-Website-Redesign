import React from 'react';
import { Target, Eye, Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Lightbulb,
      title: "Foster Innovation",
      description: "Create an environment that encourages creative thinking and innovative problem-solving among students."
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Develop a strong network of aspiring entrepreneurs, mentors, and industry professionals."
    },
    {
      icon: TrendingUp,
      title: "Accelerate Growth",
      description: "Provide resources and support to accelerate the development of student startups and business ideas."
    },
    {
      icon: Award,
      title: "Recognize Excellence",
      description: "Celebrate and recognize outstanding entrepreneurial achievements and innovative solutions."
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">About Our EDC</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The Entrepreneurship Development Cell is the driving force behind innovation and startup culture in our college, 
              dedicated to nurturing the next generation of entrepreneurs and business leaders.
            </p>
          </div>
        </div>
      </section>

      {/* What is EDC Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">What is an EDC?</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  An Entrepreneurship Development Cell (EDC) is a specialized unit within educational institutions 
                  designed to promote entrepreneurial thinking, innovation, and startup culture among students and faculty.
                </p>
                <p>
                  Our EDC serves as a comprehensive platform that bridges the gap between academic learning and 
                  real-world business applications, providing students with the knowledge, skills, and resources 
                  necessary to transform their innovative ideas into successful ventures.
                </p>
                <p>
                  Through various programs, workshops, mentoring sessions, and networking events, we create an 
                  ecosystem that supports and nurtures entrepreneurial aspirations while fostering a culture of 
                  innovation and creative problem-solving.
                </p>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Our Role in College</h3>
              <ul className="space-y-4">
                {[
                  "Skill Development & Training Programs",
                  "Startup Incubation & Support",
                  "Mentorship & Networking Opportunities",
                  "Funding Assistance & Investment Connect",
                  "Innovation Competitions & Events",
                  "Industry Partnerships & Collaborations"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be the premier entrepreneurship hub that transforms innovative ideas into successful ventures, 
                creating a generation of entrepreneurs who contribute to economic growth and societal development 
                through sustainable and impactful businesses.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="p-4 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                To foster an entrepreneurial ecosystem by providing comprehensive support, mentorship, and resources 
                to students, enabling them to develop innovative solutions, build successful startups, and become 
                leaders in their respective fields while contributing to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Objectives</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are committed to achieving these key objectives to build a thriving entrepreneurial community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="text-center group">
                <div className="p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <objective.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{objective.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{objective.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Our Impact</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Since our inception, we have been instrumental in shaping the entrepreneurial landscape 
              within our institution and beyond, creating lasting impact in the startup ecosystem.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "500+",
                  label: "Students Trained",
                  description: "In various entrepreneurship programs"
                },
                {
                  number: "50+",
                  label: "Startups Launched",
                  description: "With our incubation support"
                },
                {
                  number: "₹2.5Cr+",
                  label: "Funding Raised",
                  description: "By our incubated startups"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                  <h4 className="text-xl font-semibold text-teal-300 mb-2">{stat.label}</h4>
                  <p className="text-gray-300">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;