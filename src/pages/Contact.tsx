import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { GlowCard } from '../components/spotlight-card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["College Campus", "Innovation Block, Room 201", "City, State - 123456"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 12345 67890", "+91 98765 43210"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["edc@college.edu", "info.edc@college.edu"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#", color: "bg-blue-700 hover:bg-blue-800" },
    { name: "Instagram", href: "#", color: "bg-pink-600 hover:bg-pink-700" },
    { name: "Twitter", href: "#", color: "bg-blue-500 hover:bg-blue-600" },
    { name: "Facebook", href: "#", color: "bg-blue-600 hover:bg-blue-700" }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Get in touch with us for any queries, collaboration opportunities, or to learn more about 
              our programs and initiatives. We're here to help you on your entrepreneurial journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <GlowCard glowColor="blue" customSize className="p-8">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-black border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors duration-300 ${
                          errors.name ? 'border-red-500' : 'border-slate-800'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-black border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors duration-300 ${
                          errors.email ? 'border-red-500' : 'border-slate-800'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-black border rounded-lg text-white focus:outline-none focus:border-teal-400 transition-colors duration-300 ${
                        errors.subject ? 'border-red-500' : 'border-slate-800'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="events">Events & Programs</option>
                      <option value="incubation">Startup Incubation</option>
                      <option value="mentorship">Mentorship</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-black border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors duration-300 resize-none ${
                        errors.message ? 'border-red-500' : 'border-slate-800'
                      }`}
                      placeholder="Tell us about your inquiry or how we can help you..."
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </GlowCard>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
              <p className="text-gray-300 leading-relaxed">
                We're here to support your entrepreneurial journey. Reach out to us for any assistance, 
                collaboration opportunities, or to learn more about our programs.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-400">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`px-4 py-2 text-white rounded-lg transition-colors duration-300 ${social.color}`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-gray-300">Visit us at our campus location</p>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <div className="bg-slate-700 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-teal-400 mx-auto mb-4" />
                <p className="text-white text-lg font-semibold mb-2">Interactive Map</p>
                <p className="text-gray-400">
                  College Campus, Innovation Block, Room 201<br />
                  City, State - 123456
                </p>
                <button className="mt-4 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300">
                  View on Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How can I join the EDC?",
                answer: "You can join by attending our orientation sessions, applying for committee positions, or participating in our events and programs. Visit our programs page for upcoming opportunities."
              },
              {
                question: "What support do you provide for startups?",
                answer: "We provide comprehensive support including mentorship, incubation space, funding assistance, legal guidance, networking opportunities, and access to industry experts."
              },
              {
                question: "Are the programs open to all students?",
                answer: "Yes, our programs are open to all students regardless of their field of study. We believe entrepreneurship can benefit from diverse perspectives and backgrounds."
              },
              {
                question: "How can I apply for the incubation program?",
                answer: "You can apply through our online portal with your business plan and pitch deck. Applications are reviewed by our expert panel, followed by an interview process."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;