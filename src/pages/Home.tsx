import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Users, TrendingUp, Calendar, Star } from 'lucide-react';
import Prism from '../components/Prism';
import { GlowCard } from '../components/spotlight-card';

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const stats = [
    { icon: Rocket, label: 'Startups Launched', value: '50+' },
    { icon: Users, label: 'Active Members', value: '200+' },
    { icon: TrendingUp, label: 'Success Rate', value: '85%' },
    { icon: Calendar, label: 'Events Conducted', value: '120+' },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "EDC provided the perfect launchpad for my startup. The mentorship and support were invaluable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateApp",
      content: "The networking opportunities and workshops at EDC helped me transform my idea into a successful business.",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.4}
            glow={0.7}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-white tracking-tight">
                Igniting
              </h1>
              <h2 className="text-5xl md:text-7xl font-light text-gray-100 tracking-wide">
                Ideas.
              </h2>
            </div>
            <div className="mb-8">
              <h3 className="text-4xl md:text-6xl font-bold mb-4 text-white tracking-tight">
                Building
              </h3>
              <h4 className="text-3xl md:text-5xl font-light text-gray-200 tracking-wide">
                Entrepreneurs.
              </h4>
            </div>
            <p className="text-lg md:text-xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
              Transform your innovative ideas into successful startups with comprehensive support, 
              mentorship, and resources from our Entrepreneurship Development Cell.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                to="/contact"
                className="px-10 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center group text-lg tracking-wide"
              >
                Join Our Community
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/programs"
                className="px-10 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 text-lg tracking-wide"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-gray-200 font-light tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Our Mission</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              We are dedicated to fostering an entrepreneurial ecosystem that empowers students to turn their innovative ideas into successful ventures through comprehensive support, mentorship, and resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation Hub",
                description: "Providing state-of-the-art facilities and resources for ideation, prototyping, and development.",
                icon: "🚀"
              },
              {
                title: "Mentorship Network",
                description: "Connecting students with industry experts, successful entrepreneurs, and experienced professionals.",
                icon: "🤝"
              },
              {
                title: "Startup Incubation",
                description: "Comprehensive support from idea validation to market launch with funding assistance.",
                icon: "💡"
              }
            ].map((item, index) => (
              <GlowCard key={index} glowColor="blue" customSize className="p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-200 leading-relaxed font-light tracking-wide">{item.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Success Stories</h2>
            <p className="text-xl text-gray-200 font-light tracking-wide">Hear from entrepreneurs who started their journey with us</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <GlowCard key={index} glowColor="purple" customSize className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic font-light leading-relaxed tracking-wide">"{testimonial.content}"</p>
                <div>
                  <h4 className="text-white font-bold tracking-tight">{testimonial.name}</h4>
                  <p className="text-white font-light tracking-wide">{testimonial.role}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tight">Stay Updated</h2>
          <p className="text-xl text-gray-200 mb-8 font-light tracking-wide">
            Subscribe to our newsletter for the latest updates on events, opportunities, and success stories.
          </p>
          
          {isSubscribed ? (
            <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg">
              <p className="text-green-400 font-semibold">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;