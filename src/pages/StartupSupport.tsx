import React from 'react';
import { Lightbulb, Users, TrendingUp, DollarSign, Award, ArrowRight, CheckCircle } from 'lucide-react';
import { GlowCard } from '../components/spotlight-card';

const StartupSupport = () => {
  const supportServices = [
    {
      icon: Lightbulb,
      title: "Idea Validation",
      description: "Get expert feedback on your business idea and validate market demand through our structured process.",
      features: ["Market Research Support", "Feasibility Analysis", "Competitive Analysis", "Business Model Canvas"]
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Connect with experienced entrepreneurs and industry experts for personalized guidance.",
      features: ["One-on-one Mentoring", "Industry Expert Network", "Peer Learning Groups", "Progress Tracking"]
    },
    {
      icon: TrendingUp,
      title: "Business Development",
      description: "Comprehensive support to develop your business from concept to market-ready product.",
      features: ["Strategic Planning", "Product Development", "Go-to-Market Strategy", "Scaling Support"]
    },
    {
      icon: DollarSign,
      title: "Funding Assistance",
      description: "Help in securing funding through various channels including grants, investors, and competitions.",
      features: ["Pitch Deck Development", "Investor Connections", "Grant Applications", "Demo Day Preparation"]
    }
  ];

  const incubationProcess = [
    {
      step: "01",
      title: "Application & Screening",
      description: "Submit your startup idea through our online application portal and go through initial screening."
    },
    {
      step: "02",
      title: "Evaluation & Selection",
      description: "Present your idea to our panel of experts for evaluation and selection into the incubation program."
    },
    {
      step: "03",
      title: "Incubation & Development",
      description: "Work closely with mentors and utilize our resources to develop your startup over 6-12 months."
    },
    {
      step: "04",
      title: "Launch & Growth",
      description: "Launch your startup with our support and continue receiving guidance for scaling and growth."
    }
  ];

  const successStories = [
    {
      name: "TechFlow",
      founder: "Priya Sharma",
      industry: "EdTech",
      achievement: "₹50L funding raised",
      description: "AI-powered learning platform serving 10,000+ students across 5 states",
      logo: "🎓"
    },
    {
      name: "GreenEarth",
      founder: "Rahul Mehta",
      industry: "Sustainability",
      achievement: "₹1.2Cr valuation",
      description: "Eco-friendly packaging solutions adopted by 100+ businesses",
      logo: "🌱"
    },
    {
      name: "HealthConnect",
      founder: "Dr. Anita Patel",
      industry: "HealthTech",
      achievement: "₹75L Series A",
      description: "Telemedicine platform connecting rural patients with specialists",
      logo: "🏥"
    }
  ];

  const resources = [
    "Co-working Space Access",
    "High-Speed Internet & Infrastructure",
    "Legal & Compliance Support",
    "Accounting & Financial Planning",
    "Marketing & Branding Guidance",
    "Technology Development Support",
    "Industry Connections & Partnerships",
    "Investor Network Access"
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Startup Support & Incubation</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Transform your innovative ideas into successful startups with our comprehensive support ecosystem, 
              mentorship programs, and incubation services.
            </p>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Support Services</h2>
            <p className="text-xl text-gray-300">Comprehensive support at every stage of your entrepreneurial journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportServices.map((service, index) => (
              <GlowCard key={index} glowColor="green" customSize className="p-8">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg w-16 h-16 mb-6 flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-teal-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Process */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Incubation Process</h2>
            <p className="text-xl text-gray-300">A structured approach to turn your idea into a successful startup</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {incubationProcess.map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  {index < incubationProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-600 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{process.title}</h3>
                <p className="text-gray-400 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300">Celebrating startups that began their journey with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-teal-400">
                <div className="text-4xl mb-4">{story.logo}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{story.name}</h3>
                <p className="text-teal-400 mb-1">Founded by {story.founder}</p>
                <p className="text-gray-400 mb-4">{story.industry}</p>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {story.achievement}
                </div>
                <p className="text-gray-300 leading-relaxed">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Facilities */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Resources & Facilities</h2>
            <p className="text-xl text-gray-300">Everything you need to build and grow your startup</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300 border border-slate-700 hover:border-teal-400">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-400 mr-3" />
                  <span className="text-gray-300">{resource}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our incubation program and turn your innovative idea into a successful startup with our comprehensive support system.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
              Apply for Incubation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupSupport;