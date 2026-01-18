'use client';

import { 
  LayoutDashboard, 
  FileText, 
  Bell,
  CheckCircle,
  Sparkles,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0c0c0f] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-indigo-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-[#1a1a21] border border-[#2a2a35] text-[#8a8a9a] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Everything you need to{' '}
            <span className="gradient-text">land your dream job</span>
          </h2>
          <p className="text-[#8a8a9a] text-lg">
            Three core features designed to give you an unfair advantage in your job search.
          </p>
        </div>

        {/* Feature 1 - Opportunity Board */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <LayoutDashboard className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Opportunity Board
              </h3>
              <p className="text-[#8a8a9a] text-lg mb-6 leading-relaxed">
                All internships, graduate programs, and career events from top companies in one curated feed. 
                No more jumping between 50 different job boards.
              </p>
              <ul className="space-y-3 mb-8">
                {['Internships & graduate programs', 'Career fairs & networking events', 'Smart filters by industry, location, deadline', 'Personalized match scores'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#a0a0b0]">
                    <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors group">
                Explore opportunities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Feature mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl -z-10" />
              <div className="bg-[#0f0f14] rounded-2xl border border-[#1a1a21] p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-medium">Latest Opportunities</span>
                  <span className="text-[#6a6a7a] text-sm">127 new this week</span>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'Software Engineer Intern', company: 'Tesla', match: 95, type: 'Internship' },
                    { title: 'Graduate Program', company: 'Google', match: 88, type: 'Graduate' },
                    { title: 'Product Design Intern', company: 'Canva', match: 82, type: 'Internship' },
                    { title: 'Data Analyst', company: 'Microsoft', match: 79, type: 'Graduate' },
                  ].map((opp, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-[#1a1a21] rounded-xl hover:bg-[#1e1e26] transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                          {opp.company[0]}
                        </div>
                        <div>
                          <p className="text-white font-medium group-hover:text-indigo-300 transition-colors">{opp.title}</p>
                          <p className="text-[#6a6a7a] text-sm">{opp.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${opp.type === 'Internship' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-purple-500/10 text-purple-400'}`}>
                          {opp.type}
                        </span>
                        <p className="text-[#6a6a7a] text-xs mt-1">{opp.match}% match</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 - Resume Tailoring */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature mockup - on left for alternating layout */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl -z-10" />
              <div className="bg-[#0f0f14] rounded-2xl border border-[#1a1a21] p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white font-medium">Resume Analysis</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-sm">AI Processing</span>
                  </div>
                </div>
                
                {/* Score display */}
                <div className="text-center mb-6">
                  <div className="relative inline-flex items-center justify-center">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="56" stroke="#1a1a21" strokeWidth="8" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="url(#scoreGradient)" strokeWidth="8" fill="none" strokeDasharray="352" strokeDashoffset="53" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-4xl font-bold text-white">85</span>
                      <span className="text-[#6a6a7a] text-sm">Match Score</span>
                    </div>
                  </div>
                </div>

                {/* Improvements */}
                <div className="space-y-3">
                  {[
                    { text: 'Add "Python" keyword', impact: '+8' },
                    { text: 'Quantify achievements', impact: '+5' },
                    { text: 'Match job title format', impact: '+2' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-[#1a1a21] rounded-lg">
                      <span className="text-[#a0a0b0] text-sm">{item.text}</span>
                      <span className="text-green-400 text-sm font-medium">{item.impact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-6">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                AI Resume Tailoring
              </h3>
              <p className="text-[#8a8a9a] text-lg mb-6 leading-relaxed">
                Our AI analyzes job descriptions and optimizes your resume to beat ATS systems. 
                Get actionable suggestions that actually improve your chances.
              </p>
              <ul className="space-y-3 mb-8">
                {['Keyword optimization for ATS', 'Industry-specific formatting', 'Real-time match scoring', 'One-click improvements'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#a0a0b0]">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors group">
                Try resume tailoring
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature 3 - Smart Notifications */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Bell className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Smart Notifications
              </h3>
              <p className="text-[#8a8a9a] text-lg mb-6 leading-relaxed">
                Get instant alerts when opportunities match your profile. Be first to apply when 
                your dream company posts a new role.
              </p>
              <ul className="space-y-3 mb-8">
                {['Real-time opportunity alerts', 'Deadline reminders', 'Weekly curated digest', 'Custom notification rules'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#a0a0b0]">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors group">
                Set up alerts
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Feature mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl -z-10" />
              <div className="bg-[#0f0f14] rounded-2xl border border-[#1a1a21] p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-medium">Recent Alerts</span>
                  <span className="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium">3 new</span>
                </div>
                <div className="space-y-3">
                  {[
                    { title: 'New match: AWS Intern', time: '2 min ago', icon: TrendingUp, color: 'cyan' },
                    { title: 'Application deadline tomorrow', time: '1 hour ago', icon: Bell, color: 'yellow' },
                    { title: 'Google just posted 5 roles', time: '3 hours ago', icon: Sparkles, color: 'purple' },
                    { title: 'Weekly digest ready', time: 'Today', icon: FileText, color: 'indigo' },
                  ].map((notif, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-[#1a1a21] rounded-xl hover:bg-[#1e1e26] transition-colors cursor-pointer">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        notif.color === 'cyan' ? 'bg-cyan-500/10' :
                        notif.color === 'yellow' ? 'bg-yellow-500/10' :
                        notif.color === 'purple' ? 'bg-purple-500/10' :
                        'bg-indigo-500/10'
                      }`}>
                        <notif.icon className={`w-5 h-5 ${
                          notif.color === 'cyan' ? 'text-cyan-400' :
                          notif.color === 'yellow' ? 'text-yellow-400' :
                          notif.color === 'purple' ? 'text-purple-400' :
                          'text-indigo-400'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium truncate">{notif.title}</p>
                        <p className="text-[#6a6a7a] text-sm">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
