'use client';

import { ArrowRight, Play, Star, Users, Briefcase, Bell, FileText, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 pb-12">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0c0c0f]" />
      
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMWEyMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social proof bar */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-[#0c0c0f] flex items-center justify-center text-[10px] font-bold text-white">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-[#8a8a9a] text-sm ml-2">10,000+ students</span>
          </div>
          <div className="h-4 w-px bg-[#2a2a35]" />
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-[#8a8a9a] text-sm ml-1">4.9/5 rating</span>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
            </span>
            <span>Applications open for Summer 2026</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Your Career Copilot for{' '}
            <span className="relative">
              <span className="gradient-text">Early Success</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#6366f1"/>
                    <stop offset="0.5" stopColor="#a855f7"/>
                    <stop offset="1" stopColor="#22d3ee"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#8a8a9a] max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover internships, graduate programs, and events. Tailor your resume with AI. 
            Get notified the moment opportunities drop.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="w-full sm:w-auto group relative overflow-hidden bg-white text-[#0c0c0f] px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-white/10 flex items-center justify-center gap-2">
              <span className="relative z-10">Start Free Today</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto group flex items-center justify-center gap-3 text-[#a0a0b0] hover:text-white px-8 py-4 rounded-xl font-medium text-lg transition-colors">
              <div className="w-10 h-10 rounded-full bg-[#1a1a21] border border-[#2a2a35] flex items-center justify-center group-hover:bg-[#222230] transition-colors">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>

          {/* Trust text */}
          <p className="text-[#6a6a7a] text-sm">
            Free forever. No credit card required.
          </p>
        </div>

        {/* App Preview */}
        <div className="relative max-w-6xl mx-auto">
          {/* Glow effect behind the preview */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl -z-10 translate-y-20" />

          {/* Browser mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-[#2a2a35] bg-[#0f0f14] shadow-2xl shadow-black/50">
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
            
            {/* App content */}
            <div className="p-6 bg-gradient-to-b from-[#0f0f14] to-[#0c0c0f]">
              {/* App header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Opportunity Board</h3>
                    <p className="text-[#6a6a7a] text-sm">127 new opportunities this week</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Bell className="w-5 h-5 text-[#6a6a7a]" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center">3</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
                </div>
              </div>

              {/* Opportunity cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { 
                    title: 'Software Engineering Intern', 
                    company: 'Tesla', 
                    location: 'Palo Alto, CA',
                    type: 'Internship',
                    salary: '$45-55/hr',
                    posted: '2h ago',
                    match: 95,
                    color: 'indigo'
                  },
                  { 
                    title: 'Graduate Program', 
                    company: 'Google', 
                    location: 'Sydney, AU',
                    type: 'Graduate',
                    salary: '$95-120k',
                    posted: '5h ago',
                    match: 88,
                    color: 'purple'
                  },
                  { 
                    title: 'Product Design Intern', 
                    company: 'Canva', 
                    location: 'Remote',
                    type: 'Internship',
                    salary: '$40-50/hr',
                    posted: '1d ago',
                    match: 82,
                    color: 'cyan'
                  },
                ].map((opp, i) => (
                  <div key={i} className="group bg-[#1a1a21] hover:bg-[#1e1e26] rounded-xl p-5 border border-[#2a2a35] hover:border-[#3a3a4a] transition-all cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium ${
                        opp.color === 'indigo' ? 'bg-indigo-500/10 text-indigo-400' :
                        opp.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                        'bg-cyan-500/10 text-cyan-400'
                      }`}>
                        {opp.type}
                      </span>
                      <span className="text-[#6a6a7a] text-xs">{opp.posted}</span>
                    </div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">{opp.title}</h4>
                    <p className="text-[#8a8a9a] text-sm mb-3">{opp.company} • {opp.location}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#6a6a7a] text-sm">{opp.salary}</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-16 h-1.5 rounded-full bg-[#2a2a35] overflow-hidden">
                          <div className={`h-full rounded-full ${
                            opp.match >= 90 ? 'bg-green-500' : opp.match >= 80 ? 'bg-yellow-500' : 'bg-orange-500'
                          }`} style={{width: `${opp.match}%`}} />
                        </div>
                        <span className="text-[10px] text-[#6a6a7a]">{opp.match}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom feature bar */}
              <div className="mt-6 flex items-center justify-between p-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent rounded-xl border border-[#2a2a35]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-indigo-400" />
                    <span className="text-[#a0a0b0] text-sm">Resume Score: <span className="text-white font-semibold">87/100</span></span>
                  </div>
                  <div className="h-4 w-px bg-[#2a2a35]" />
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-[#a0a0b0] text-sm">ATS Optimized</span>
                  </div>
                </div>
                <button className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors flex items-center gap-1">
                  Tailor Resume
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Floating notification cards */}
          <div className="absolute -left-4 lg:-left-12 top-1/3 hidden lg:block animate-float">
            <div className="bg-[#1a1a21] rounded-xl p-4 border border-[#2a2a35] shadow-xl shadow-black/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Resume Tailored!</p>
                  <p className="text-[#6a6a7a] text-xs">Match score: 95%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 lg:-right-12 top-1/2 hidden lg:block animate-float-delayed">
            <div className="bg-[#1a1a21] rounded-xl p-4 border border-[#2a2a35] shadow-xl shadow-black/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">New Opportunity!</p>
                  <p className="text-[#6a6a7a] text-xs">Microsoft • Just posted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c0c0f] to-transparent" />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
