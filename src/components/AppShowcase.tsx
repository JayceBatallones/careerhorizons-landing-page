'use client';

import { useState } from 'react';
import { Briefcase, Bell, User, MapPin, DollarSign, Clock, TrendingUp, Award, Calendar, Mail, Linkedin, Github, Sparkles, GraduationCap, Users, Trophy } from 'lucide-react';

type TabType = 'opportunities' | 'profile' | 'newsletter';
type NewsletterTabType = 'jobs' | 'events' | 'extracurriculars';

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>('opportunities');
  const [activeNewsletterTab, setActiveNewsletterTab] = useState<NewsletterTabType>('jobs');

  return (
    <section id="features" className="py-24 bg-[#0c0c0f] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-indigo-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#1a1a21] border border-[#2a2a35] text-[#8a8a9a] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>See It In Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need in{' '}
            <span className="gradient-text">one place</span>
          </h2>
          <p className="text-[#8a8a9a] text-lg">
            Your complete career toolkit from discovery to application.
          </p>
        </div>

        {/* Interactive App Demo */}
        <div className="max-w-6xl mx-auto">
          {/* Browser mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-[#2a2a35] bg-[#0f0f14] shadow-2xl shadow-black/50">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl -z-10 translate-y-20" />
            
            {/* Browser header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1a1a21] bg-[#0a0a0d]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-[#1a1a21] rounded-lg h-7 max-w-sm mx-auto flex items-center justify-center px-4">
                  <span className="text-[#6a6a7a] text-xs">app.careerhorizons.com</span>
                </div>
              </div>
            </div>

            {/* Tab Navigation - Centered */}
            <div className="bg-[#0a0a0d] border-b border-[#1a1a21] flex justify-center">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('opportunities')}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === 'opportunities'
                      ? 'text-indigo-400 border-indigo-400'
                      : 'text-[#6a6a7a] border-transparent hover:text-[#8a8a9a]'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Opportunity Board</span>
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === 'profile'
                      ? 'text-indigo-400 border-indigo-400'
                      : 'text-[#6a6a7a] border-transparent hover:text-[#8a8a9a]'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('newsletter')}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === 'newsletter'
                      ? 'text-indigo-400 border-indigo-400'
                      : 'text-[#6a6a7a] border-transparent hover:text-[#8a8a9a]'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Newsletter</span>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8 min-h-[500px] bg-gradient-to-b from-[#0f0f14] to-[#0c0c0f]">
              {/* Opportunity Board */}
              {activeTab === 'opportunities' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Opportunities</h3>
                      <p className="text-[#6a6a7a]">42 new opportunities this week</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-[#1a1a21] hover:bg-[#2a2a35] text-[#8a8a9a] rounded-lg text-sm font-medium transition-colors">
                        Filters
                      </button>
                      <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition-colors">
                        View All
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { 
                        title: 'Software Engineering Intern',
                        company: 'Atlassian',
                        location: 'Sydney, NSW',
                        salary: '$35-42/hr',
                        type: 'Internship',
                        posted: '2h ago',
                        match: 95,
                        logo: '🔷'
                      },
                      { 
                        title: 'Data Science Intern',
                        company: 'Canva',
                        location: 'Melbourne, VIC',
                        salary: '$38-45/hr',
                        type: 'Internship',
                        posted: '5h ago',
                        match: 92,
                        logo: '🎨'
                      },
                      { 
                        title: 'Graduate Developer Program',
                        company: 'Xero',
                        location: 'Wellington, NZ',
                        salary: '$75-85k',
                        type: 'Graduate',
                        posted: '1d ago',
                        match: 88,
                        logo: '💚'
                      },
                      { 
                        title: 'Software Engineering Grad',
                        company: 'REA Group',
                        location: 'Melbourne, VIC',
                        salary: '$80-95k',
                        type: 'Graduate',
                        posted: '2d ago',
                        match: 85,
                        logo: '🏠'
                      },
                    ].map((opp, i) => (
                      <div key={i} className="group bg-[#1a1a21] hover:bg-[#1e1e26] rounded-xl p-5 border border-[#2a2a35] hover:border-[#3a3a4a] transition-all cursor-pointer">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                              {opp.logo}
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                                {opp.title}
                              </h4>
                              <p className="text-[#8a8a9a] text-sm">{opp.company}</p>
                            </div>
                          </div>
                          <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium ${
                            opp.type === 'Internship' 
                              ? 'bg-indigo-500/10 text-indigo-400' 
                              : 'bg-purple-500/10 text-purple-400'
                          }`}>
                            {opp.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-[#6a6a7a] text-sm mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {opp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-3.5 h-3.5" />
                            {opp.salary}
                          </span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-[#6a6a7a] text-xs flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {opp.posted}
                          </span>
                          <div className="flex items-center gap-1.5">
                            <div className="w-16 h-1.5 rounded-full bg-[#2a2a35] overflow-hidden">
                              <div 
                                className={`h-full rounded-full ${
                                  opp.match >= 90 ? 'bg-green-500' : 'bg-yellow-500'
                                }`}
                                style={{width: `${opp.match}%`}}
                              />
                            </div>
                            <span className="text-[10px] text-[#6a6a7a]">{opp.match}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                      JS
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">John Smith</h3>
                      <p className="text-[#8a8a9a] mb-3">Computer Science Student • University of Sydney</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg text-sm font-medium">
                          Python
                        </span>
                        <span className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg text-sm font-medium">
                          React
                        </span>
                        <span className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg text-sm font-medium">
                          Machine Learning
                        </span>
                        <span className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg text-sm font-medium">
                          AWS
                        </span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition-colors">
                      Edit Profile
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#1a1a21] rounded-xl p-5 border border-[#2a2a35]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">95%</p>
                          <p className="text-[#6a6a7a] text-sm">Profile Score</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#1a1a21] rounded-xl p-5 border border-[#2a2a35]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                          <Award className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">24</p>
                          <p className="text-[#6a6a7a] text-sm">Applications</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#1a1a21] rounded-xl p-5 border border-[#2a2a35]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">12</p>
                          <p className="text-[#6a6a7a] text-sm">Events Saved</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a1a21] rounded-xl p-6 border border-[#2a2a35]">
                    <h4 className="text-white font-semibold mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-[#8a8a9a]">
                        <Mail className="w-4 h-4" />
                        <span>john.smith@sydney.edu.au</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#8a8a9a]">
                        <Linkedin className="w-4 h-4" />
                        <span>linkedin.com/in/johnsmith</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#8a8a9a]">
                        <Github className="w-4 h-4" />
                        <span>github.com/johnsmith</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'newsletter' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Weekly Newsletter</h3>
                      <p className="text-[#6a6a7a]">Tailored for Year 3 • Computer Science • University of Sydney</p>
                    </div>
                    <div className="px-3 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-lg text-sm font-medium">
                      This Week
                    </div>
                  </div>

                  {/* Newsletter Sub-tabs */}
                  <div className="flex gap-2 border-b border-[#2a2a35] mb-6">
                    <button
                      onClick={() => setActiveNewsletterTab('jobs')}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                        activeNewsletterTab === 'jobs'
                          ? 'text-indigo-400 border-indigo-400'
                          : 'text-[#6a6a7a] border-transparent hover:text-[#8a8a9a]'
                      }`}
                    >
                      <Briefcase className="w-4 h-4" />
                      <span>Job Opportunities</span>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-semibold">8</span>
                    </button>
                    <button
                      onClick={() => setActiveNewsletterTab('events')}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                        activeNewsletterTab === 'events'
                          ? 'text-purple-400 border-purple-400'
                          : 'text-[#6a6a7a] border-transparent hover:text-[#8a8a9a]'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Events</span>
                      <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold">5</span>
                    </button>
                    <button
                      onClick={() => setActiveNewsletterTab('extracurriculars')}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                        activeNewsletterTab === 'extracurriculars'
                          ? 'text-cyan-400 border-cyan-400'
                          : 'text-[#6a6a7a] border-transparent hover:text-[#8a8a9a]'
                      }`}
                    >
                      <Trophy className="w-4 h-4" />
                      <span>Extracurriculars</span>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-semibold">4</span>
                    </button>
                  </div>

                  {/* Job Opportunities Section */}
                  {activeNewsletterTab === 'jobs' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: 'Summer Intern - Software Engineering',
                            company: 'Atlassian',
                            location: 'Sydney, NSW',
                            salary: '$35-42/hr',
                            type: 'Internship',
                            match: 95,
                            tag: 'Hot Match'
                          },
                          {
                            title: '2026 Graduate Program',
                            company: 'Canva',
                            location: 'Sydney, NSW',
                            salary: '$80-95k',
                            type: 'Graduate',
                            match: 92,
                            tag: 'Closing Soon'
                          },
                          {
                            title: 'Data Engineering Intern',
                            company: 'Xero',
                            location: 'Wellington, NZ',
                            salary: '$28-35/hr',
                            type: 'Internship',
                            match: 88,
                            tag: null
                          },
                          {
                            title: 'Graduate Software Developer',
                            company: 'REA Group',
                            location: 'Melbourne, VIC',
                            salary: '$80-90k',
                            type: 'Graduate',
                            match: 85,
                            tag: null
                          },
                          {
                            title: 'ML Engineering Intern',
                            company: 'Zip Co',
                            location: 'Sydney, NSW',
                            salary: '$32-40/hr',
                            type: 'Internship',
                            match: 83,
                            tag: 'New'
                          },
                          {
                            title: 'Technology Graduate',
                            company: 'CommBank',
                            location: 'Sydney, NSW',
                            salary: '$75-85k',
                            type: 'Graduate',
                            match: 80,
                            tag: null
                          },
                        ].map((job, i) => (
                          <div key={i} className="bg-[#1a1a21] rounded-lg p-4 border border-[#2a2a35] hover:border-indigo-500/30 transition-all cursor-pointer group">
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors flex-1">{job.title}</h5>
                              {job.tag && (
                                <span className={`text-xs px-2 py-0.5 rounded ml-2 flex-shrink-0 ${
                                  job.tag === 'Hot Match' ? 'bg-red-500/10 text-red-400' : 
                                  job.tag === 'Closing Soon' ? 'bg-yellow-500/10 text-yellow-400' :
                                  'bg-green-500/10 text-green-400'
                                }`}>
                                  {job.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-[#8a8a9a] text-sm mb-2">{job.company}</p>
                            <div className="flex items-center gap-3 text-[#6a6a7a] text-xs mb-2">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <DollarSign className="w-3 h-3" />
                                {job.salary}
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                                job.type === 'Internship' 
                                  ? 'bg-indigo-500/10 text-indigo-400' 
                                  : 'bg-purple-500/10 text-purple-400'
                              }`}>
                                {job.type}
                              </span>
                              <span className="text-[#6a6a7a] text-xs">{job.match}% match</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Events Section */}
                  {activeNewsletterTab === 'events' && (
                    <div className="space-y-3">
                      {[
                        {
                          title: 'Google Tech Talk: ML in Production',
                          date: 'Mon, Jan 22',
                          time: '6:00 PM',
                          location: 'USYD - Quadrangle Building',
                          attendees: 234,
                          type: 'Tech Talk'
                        },
                        {
                          title: 'Atlassian Career Night',
                          date: 'Wed, Jan 24',
                          time: '5:30 PM',
                          location: 'Atlassian Sydney Office',
                          attendees: 156,
                          type: 'Career Event'
                        },
                        {
                          title: 'AWS Cloud Computing Workshop',
                          date: 'Fri, Jan 26',
                          time: '2:00 PM',
                          location: 'Online',
                          attendees: 890,
                          type: 'Workshop'
                        },
                        {
                          title: 'Canva Design & Engineering Meetup',
                          date: 'Mon, Jan 29',
                          time: '6:00 PM',
                          location: 'Canva Sydney',
                          attendees: 78,
                          type: 'Networking'
                        },
                        {
                          title: 'Microsoft Student Summit',
                          date: 'Thu, Feb 1',
                          time: '9:00 AM',
                          location: 'Microsoft Sydney',
                          attendees: 320,
                          type: 'Conference'
                        },
                      ].map((event, i) => (
                        <div key={i} className="bg-[#1a1a21] rounded-lg p-4 border border-[#2a2a35] hover:border-purple-500/30 transition-all cursor-pointer">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h5 className="font-semibold text-white text-sm">{event.title}</h5>
                                <span className="text-xs px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">
                                  {event.type}
                                </span>
                              </div>
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#6a6a7a] text-xs">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {event.date} • {event.time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {event.location}
                                </span>
                              </div>
                            </div>
                            <div className="text-right ml-3 flex-shrink-0">
                              <div className="flex items-center gap-1 text-[#6a6a7a] text-xs">
                                <Users className="w-3 h-3" />
                                <span>{event.attendees}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Extracurriculars Section */}
                  {activeNewsletterTab === 'extracurriculars' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          {
                            title: 'USYD Computer Science Society',
                            type: 'Society',
                            members: '2.4k members',
                            description: 'The premier tech society at USYD',
                            tag: 'Popular'
                          },
                          {
                            title: 'Google Developer Student Club',
                            type: 'Club',
                            members: '890 members',
                            description: 'Learn and build with Google tech',
                            tag: 'Active'
                          },
                          {
                            title: 'HackSydney 2026',
                            type: 'Hackathon',
                            members: 'Feb 15-17',
                            description: 'Sydney\'s biggest student hackathon',
                            tag: 'Registration Open'
                          },
                          {
                            title: 'Women in Tech USYD',
                            type: 'Society',
                            members: '1.2k members',
                            description: 'Supporting women in technology',
                            tag: 'Welcoming'
                          },
                          {
                            title: 'USYD Robotics Club',
                            type: 'Club',
                            members: '650 members',
                            description: 'Build robots and compete',
                            tag: 'Hands-on'
                          },
                          {
                            title: 'AWS Cloud Club',
                            type: 'Club',
                            members: '430 members',
                            description: 'Master cloud computing skills',
                            tag: 'Technical'
                          },
                        ].map((extra, i) => (
                          <div key={i} className="bg-[#1a1a21] rounded-lg p-4 border border-[#2a2a35] hover:border-cyan-500/30 transition-all cursor-pointer group">
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">{extra.title}</h5>
                              <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 flex-shrink-0 ml-2">
                                {extra.tag}
                              </span>
                            </div>
                            <p className="text-[#6a6a7a] text-xs mb-3">{extra.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-[#8a8a9a] text-xs">{extra.type}</span>
                              <span className="text-[#6a6a7a] text-xs flex items-center gap-1">
                                <GraduationCap className="w-3 h-3" />
                                {extra.members}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        </div>
      </div>
    </section>
  );
}
