import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, Search } from 'lucide-react';

const Programs = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    {
      id: 1,
      title: "Startup Weekend 2024",
      type: "Competition",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "Innovation Hub",
      description: "54-hour event where entrepreneurs pitch ideas, form teams, and start companies.",
      status: "upcoming",
      participants: "100+",
      registrationOpen: true
    },
    {
      id: 2,
      title: "AI & Machine Learning in Business",
      type: "Workshop",
      date: "2024-02-28",
      time: "02:00 PM",
      location: "Tech Auditorium",
      description: "Learn how to integrate AI solutions into your startup for competitive advantage.",
      status: "upcoming",
      participants: "50",
      registrationOpen: true
    },
    {
      id: 3,
      title: "Pitch Perfect: Art of Presentation",
      type: "Training",
      date: "2024-02-20",
      time: "10:00 AM",
      location: "Conference Room A",
      description: "Master the art of pitching your ideas to investors and stakeholders effectively.",
      status: "upcoming",
      participants: "30",
      registrationOpen: true
    },
    {
      id: 4,
      title: "Fintech Innovation Summit",
      type: "Conference",
      date: "2024-01-25",
      time: "09:00 AM",
      location: "Main Auditorium",
      description: "Industry leaders share insights on financial technology trends and opportunities.",
      status: "completed",
      participants: "200+",
      registrationOpen: false
    },
    {
      id: 5,
      title: "Women Entrepreneurs Meetup",
      type: "Networking",
      date: "2024-01-18",
      time: "06:00 PM",
      location: "EDC Lounge",
      description: "Networking session for women entrepreneurs to share experiences and build connections.",
      status: "completed",
      participants: "40",
      registrationOpen: false
    },
    {
      id: 6,
      title: "Blockchain & Cryptocurrency Workshop",
      type: "Workshop",
      date: "2024-01-10",
      time: "01:00 PM",
      location: "Computer Lab",
      description: "Hands-on workshop on blockchain technology and its applications in modern business.",
      status: "completed",
      participants: "60",
      registrationOpen: false
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesFilter = filterStatus === 'all' || event.status === filterStatus;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.type.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleRegister = (eventId: number) => {
    alert(`Registration for event ${eventId} initiated! You'll be redirected to the registration form.`);
  };

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Programs & Events</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of workshops, competitions, networking events, and training programs 
              designed to accelerate your entrepreneurial journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors duration-300"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400 h-5 w-5" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors duration-300"
              >
                <option value="all">All Events</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-teal-400">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.status === 'upcoming' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{event.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{event.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-2 text-teal-400" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-4 w-4 mr-2 text-teal-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-2 text-teal-400" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="h-4 w-4 mr-2 text-teal-400" />
                    {event.participants} participants
                  </div>
                </div>

                {event.registrationOpen && event.status === 'upcoming' ? (
                  <button
                    onClick={() => handleRegister(event.id)}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Register Now
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full py-3 bg-gray-600 text-gray-400 font-semibold rounded-lg cursor-not-allowed"
                  >
                    {event.status === 'completed' ? 'Event Completed' : 'Registration Closed'}
                  </button>
                )}
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Don't Miss Out!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter to stay updated about upcoming events and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors duration-300"
            />
            <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;