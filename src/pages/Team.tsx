import React from 'react';
import { Mail, Linkedin, User } from 'lucide-react';

const Team = () => {
  const facultyCoordinators = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Faculty Coordinator & Professor",
      department: "Computer Science Engineering",
      email: "rajesh.kumar@college.edu",
      linkedin: "#",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: "Artificial Intelligence, Machine Learning, Startup Mentoring"
    },
    {
      name: "Dr. Priya Sharma",
      designation: "Co-Faculty Coordinator & Associate Professor",
      department: "Management Studies",
      email: "priya.sharma@college.edu",
      linkedin: "#",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: "Business Strategy, Financial Management, Venture Capital"
    }
  ];

  const studentCommittee = [
    {
      name: "Arjun Patel",
      position: "President",
      year: "Final Year CSE",
      email: "arjun.patel@student.college.edu",
      linkedin: "#",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: "Founded 2 startups, Winner of National Pitch Competition 2023"
    },
    {
      name: "Sneha Gupta",
      position: "Vice President",
      year: "Third Year ECE",
      email: "sneha.gupta@student.college.edu",
      linkedin: "#",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: "IoT Innovation Award Winner, Lead organizer of Tech Summit 2023"
    },
    {
      name: "Rohit Singh",
      position: "Technical Head",
      year: "Final Year CSE",
      email: "rohit.singh@student.college.edu",
      linkedin: "#",
      image: "https://images.pexels.com/photos/3785100/pexels-photo-3785100.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: "Full-stack developer, Built 5+ web applications for startups"
    },
    {
      name: "Anisha Rao",
      position: "Marketing Head",
      year: "Third Year MBA",
      email: "anisha.rao@student.college.edu",
      linkedin: "#",
      image: "https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: "Digital Marketing Expert, Managed campaigns for 10+ startups"
    },
    {
      name: "Vikram Joshi",
      position: "Events Coordinator",
      year: "Second Year Mechanical",
      email: "vikram.joshi@student.college.edu",
      linkedin: "#",
      image: "https://images.pexels.com/photos/3785103/pexels-photo-3785103.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: "Organized 15+ successful events, Excellence in Event Management Award"
    },
    {
      name: "Kavya Reddy",
      position: "Finance Head",
      year: "Third Year Commerce",
      email: "kavya.reddy@student.college.edu",
      linkedin: "#",
      image: "https://images.pexels.com/photos/3785075/pexels-photo-3785075.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: "CA finalist, Managed budgets for 20+ EDC events"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated individuals who drive innovation, mentor aspiring entrepreneurs, 
              and create an ecosystem that fosters startup growth and development.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Faculty Coordinators</h2>
            <p className="text-xl text-gray-300">Experienced faculty members guiding our entrepreneurial initiatives</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {facultyCoordinators.map((faculty, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-teal-400">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-teal-400">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{faculty.name}</h3>
                  <p className="text-teal-400 font-semibold mb-1">{faculty.designation}</p>
                  <p className="text-gray-400 mb-4">{faculty.department}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{faculty.expertise}</p>
                  
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${faculty.email}`}
                      className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={faculty.linkedin}
                      className="p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Committee */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Student Committee</h2>
            <p className="text-xl text-gray-300">Passionate student leaders driving entrepreneurial activities and innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentCommittee.map((student, index) => (
              <div key={index} className="bg-slate-900 p-6 rounded-xl hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-teal-400">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-teal-400">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{student.name}</h3>
                  <p className="text-teal-400 font-semibold mb-1">{student.position}</p>
                  <p className="text-gray-400 text-sm mb-4">{student.year}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{student.achievements}</p>
                  
                  <div className="flex justify-center space-x-3">
                    <a
                      href={`mailto:${student.email}`}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={student.linkedin}
                      className="p-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors duration-300"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-teal-900 p-12 rounded-2xl text-center">
            <User className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Are you passionate about entrepreneurship and innovation? Join our team and be part of building 
              the next generation of successful entrepreneurs and startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Apply for Committee
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                Volunteer with Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">8+</h3>
              <p className="text-gray-400">Team Members</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-400">Events Organized</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">200+</h3>
              <p className="text-gray-400">Students Mentored</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">3+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;