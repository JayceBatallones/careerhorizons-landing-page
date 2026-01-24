'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppShowcase;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var statusStyles = {
    active: {
        label: 'Hiring now',
        dot: 'bg-emerald-400',
        badge: 'bg-emerald-500/15 text-emerald-300',
        text: 'text-emerald-300',
    },
    upcoming: {
        label: 'Opening soon',
        dot: 'bg-amber-400',
        badge: 'bg-amber-500/15 text-amber-200',
        text: 'text-amber-200',
    },
    predicted: {
        label: 'Predicted',
        dot: 'bg-sky-400',
        badge: 'bg-sky-500/15 text-sky-200',
        text: 'text-sky-200',
    },
};
var roles = [
    {
        id: 'atlassian-intern',
        title: 'Software Engineering Intern',
        company: 'Atlassian',
        location: 'Sydney, NSW',
        salary: '$35–42/hr',
        type: 'internship',
        status: 'active',
        match: 96,
        posted: '2h ago',
        logo: '🔷',
        workRights: ['Citizen/PR', 'Student Visa'],
        timeline: 'Closes in 9 days',
        highlights: [
            'Paired with a mentor and ship production code by week two.',
            'Rotations across Platform and Ecosystem teams.',
            'Hybrid, two days in Sydney office.',
        ],
    },
    {
        id: 'canva-grad',
        title: 'Graduate Software Engineer',
        company: 'Canva',
        location: 'Sydney, NSW',
        salary: '$90–105k + equity',
        type: 'graduate',
        status: 'upcoming',
        match: 91,
        posted: 'Opens Feb 12',
        logo: '🎨',
        workRights: ['Citizen/PR'],
        timeline: 'Expected to open mid-Feb',
        highlights: [
            'AI/ML heavy squads with shipped models in production.',
            'Dedicated grad bootcamp and product rotations.',
            'Sydney HQ with relocation support.',
        ],
    },
    {
        id: 'xero-intern',
        title: 'Data Engineering Intern',
        company: 'Xero',
        location: 'Melbourne, VIC',
        salary: '$33–38/hr',
        type: 'internship',
        status: 'predicted',
        match: 88,
        posted: 'Predicted July',
        logo: '💚',
        workRights: ['Citizen/PR', 'Student Visa'],
        timeline: 'Cycle forecasted for July',
        highlights: [
            'Warehouse migration to Snowflake and dbt.',
            'Work with finance and product analytics squads.',
            'Supports remote-first with optional office days.',
        ],
    },
    {
        id: 'rea-grad',
        title: 'Graduate Software Engineer',
        company: 'REA Group',
        location: 'Melbourne, VIC',
        salary: '$85–95k',
        type: 'graduate',
        status: 'active',
        match: 84,
        posted: '1d ago',
        logo: '🏠',
        workRights: ['Citizen/PR'],
        timeline: 'Interviews start in 2 weeks',
        highlights: [
            'Customer-facing squads building the property marketplace.',
            'Pair programming culture with weekly ship reviews.',
            'Full-time hybrid, two Melbourne office anchor days.',
        ],
    },
];
var profilePreview = {
    name: 'John Smith',
    initials: 'JS',
    degree: 'B.CompSci, University of Sydney',
    focus: 'Software Engineering • Penultimate',
    location: 'Sydney, NSW',
    workRights: 'Student Visa',
    rolePreferences: ['Software Engineering', 'Data Science', 'Product Engineering'],
    skills: ['React', 'TypeScript', 'Python', 'AWS', 'Machine Learning'],
    completion: 86,
    employability: 90,
    applications: 18,
    events: 7,
    links: {
        email: 'john.smith@sydney.edu.au',
        linkedin: 'linkedin.com/in/johnsmith',
        github: 'github.com/johnsmith',
    },
    checklist: ['Upload your updated transcript', 'Add a second project with metrics', 'Save 3 more roles for alerts'],
};
function AppShowcase() {
    var _a, _b, _c, _d;
    var _e = (0, react_1.useState)('opportunities'), activeTab = _e[0], setActiveTab = _e[1];
    var _f = (0, react_1.useState)('jobs'), activeNewsletterTab = _f[0], setActiveNewsletterTab = _f[1];
    var _g = (0, react_1.useState)('all'), typeFilter = _g[0], setTypeFilter = _g[1];
    var _h = (0, react_1.useState)('active'), statusFilter = _h[0], setStatusFilter = _h[1];
    var filteredRoles = (0, react_1.useMemo)(function () {
        return roles.filter(function (role) {
            var typeOk = typeFilter === 'all' || role.type === typeFilter;
            var statusOk = statusFilter === 'all' || role.status === statusFilter;
            return typeOk && statusOk;
        });
    }, [typeFilter, statusFilter]);
    var _j = (0, react_1.useState)((_b = (_a = filteredRoles[0]) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : roles[0].id), selectedRoleId = _j[0], setSelectedRoleId = _j[1];
    (0, react_1.useEffect)(function () {
        if (filteredRoles.length === 0)
            return;
        var stillVisible = filteredRoles.some(function (role) { return role.id === selectedRoleId; });
        if (!stillVisible) {
            setSelectedRoleId(filteredRoles[0].id);
        }
    }, [filteredRoles, selectedRoleId]);
    var selectedRole = (_d = (_c = filteredRoles.find(function (role) { return role.id === selectedRoleId; })) !== null && _c !== void 0 ? _c : filteredRoles[0]) !== null && _d !== void 0 ? _d : roles[0];
    return (<section id="features" className="relative overflow-hidden bg-[#0c0c0f] py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/5 to-transparent blur-3xl"/>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2a2a35] bg-[#1a1a21] px-4 py-2 text-sm font-medium text-[#8a8a9a]">
            <lucide_react_1.Sparkles className="h-4 w-4 text-indigo-400"/>
            <span>See the live app layout</span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            The Career Horizons workspace you get after signup
          </h2>
          <p className="text-lg text-[#8a8a9a]">
            We pulled the Opportunity Board and Profile screens directly from the production app so you can see exactly how it works.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl border border-[#2a2a35] bg-[#0f0f14] shadow-2xl shadow-black/50">
            <div className="absolute inset-0 -z-10 translate-y-20 bg-gradient-to-t from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl"/>

            <div className="flex items-center gap-3 border-b border-[#1a1a21] bg-[#0a0a0d] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]"/>
                <div className="h-3 w-3 rounded-full bg-[#febc2e]"/>
                <div className="h-3 w-3 rounded-full bg-[#28c840]"/>
              </div>
              <div className="mx-4 flex-1">
                <div className="mx-auto flex h-7 max-w-sm items-center justify-center rounded-lg bg-[#1a1a21] px-4">
                  <span className="text-xs text-[#6a6a7a]">app.careerhorizons.com</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center border-b border-[#1a1a21] bg-[#0a0a0d]">
              <div className="flex gap-2">
                {[
            { key: 'opportunities', label: 'Opportunity Board', icon: lucide_react_1.Briefcase },
            { key: 'profile', label: 'Profile', icon: lucide_react_1.User },
            { key: 'newsletter', label: 'Newsletter', icon: lucide_react_1.Mail },
        ].map(function (tab) {
            var Icon = tab.icon;
            return (<button key={tab.key} onClick={function () { return setActiveTab(tab.key); }} className={"flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors border-b-2 ".concat(activeTab === tab.key
                    ? 'border-indigo-400 text-indigo-400'
                    : 'border-transparent text-[#6a6a7a] hover:text-[#8a8a9a]')}>
                      <Icon className="h-4 w-4"/>
                      <span>{tab.label}</span>
                    </button>);
        })}
              </div>
            </div>

            <div className="min-h-[540px] bg-gradient-to-b from-[#0f0f14] to-[#0c0c0f] p-8">
              {activeTab === 'opportunities' && (<div className="space-y-6">
                  <div className="flex flex-col gap-3 rounded-2xl border border-[#2a2a35] bg-gradient-to-r from-indigo-500/5 via-[#101018] to-purple-500/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-indigo-300">Matched to your profile</p>
                      <h3 className="text-2xl font-semibold text-white">Opportunity Board</h3>
                      <p className="text-sm text-[#8a8a9a]">Real layout from the Career Horizons app.</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-medium">
                      <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-indigo-200">Penultimate • Software Engineering</span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-200">42 new matches this week</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                { label: 'All types', value: 'all' },
                { label: 'Internships', value: 'internship' },
                { label: 'Graduate', value: 'graduate' },
            ].map(function (filter) { return (<button key={filter.value} onClick={function () { return setTypeFilter(filter.value); }} className={"rounded-full px-3 py-1.5 text-sm transition-colors ".concat(typeFilter === filter.value
                    ? 'bg-indigo-500/20 text-indigo-200 border border-indigo-500/40'
                    : 'bg-[#1a1a21] text-[#9da0af] border border-[#2a2a35] hover:border-[#3a3a4a]')}>
                        {filter.label}
                      </button>); })}
                    {[
                { label: 'Hiring now', value: 'active' },
                { label: 'Opening soon', value: 'upcoming' },
                { label: 'Predicted', value: 'predicted' },
            ].map(function (filter) { return (<button key={filter.value} onClick={function () { return setStatusFilter(filter.value); }} className={"rounded-full px-3 py-1.5 text-sm transition-colors ".concat(statusFilter === filter.value
                    ? 'bg-white/5 text-white border border-white/10'
                    : 'bg-[#0f0f14] text-[#9da0af] border border-[#2a2a35] hover:border-[#3a3a4a]')}>
                        {filter.label}
                      </button>); })}
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
                    <div className="space-y-3">
                      {filteredRoles.map(function (role) { return (<button key={role.id} onClick={function () { return setSelectedRoleId(role.id); }} className={"group w-full rounded-xl border px-4 py-3 text-left transition-all ".concat(selectedRoleId === role.id
                    ? 'border-indigo-400/40 bg-indigo-500/10 ring-1 ring-indigo-400/30'
                    : 'border-[#2a2a35] bg-[#111118] hover:border-[#3a3a4a]')}>
                          <div className="flex items-start gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1f1f28] text-xl">
                              {role.logo}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <h4 className="truncate text-sm font-semibold text-white">{role.title}</h4>
                                <span className={"h-2 w-2 rounded-full ".concat(statusStyles[role.status].dot)}/>
                              </div>
                              <p className="truncate text-xs text-[#9da0af]">{role.company}</p>
                              <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-[#9da0af]">
                                <span className="inline-flex items-center gap-1 rounded-md bg-[#1a1a21] px-2 py-0.5">
                                  <lucide_react_1.MapPin className="h-3 w-3"/>
                                  {role.location}
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-md bg-[#1a1a21] px-2 py-0.5">
                                  <lucide_react_1.Clock className="h-3 w-3"/>
                                  {role.posted}
                                </span>
                                <span className={"inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] ".concat(role.type === 'internship'
                    ? 'bg-indigo-500/10 text-indigo-200'
                    : 'bg-purple-500/10 text-purple-200')}>
                                  {role.type === 'internship' ? 'Internship' : 'Graduate'}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <span className={"rounded-full px-2 py-0.5 text-[11px] font-semibold ".concat(statusStyles[role.status].badge)}>
                                {statusStyles[role.status].label}
                              </span>
                              <span className="text-xs text-[#9da0af]">{role.match}% match</span>
                            </div>
                          </div>
                        </button>); })}
                    </div>

                    {selectedRole && (<div className="flex h-full flex-col gap-4 rounded-2xl border border-[#2a2a35] bg-[#101018] p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-wide text-indigo-300">Role details</p>
                            <h3 className="text-xl font-semibold text-white">{selectedRole.title}</h3>
                            <p className="text-sm text-[#9da0af]">{selectedRole.company}</p>
                            <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-medium">
                              <span className={"rounded-full px-2 py-0.5 ".concat(statusStyles[selectedRole.status].badge)}>
                                {statusStyles[selectedRole.status].label}
                              </span>
                              <span className="rounded-full border border-[#2a2a35] px-2 py-0.5 text-indigo-200">{selectedRole.type === 'internship' ? 'Internship' : 'Graduate'}</span>
                              <span className="rounded-full border border-[#2a2a35] px-2 py-0.5 text-[#cbd0e2]">{selectedRole.timeline}</span>
                            </div>
                          </div>
                          <button className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600">
                            <lucide_react_1.ExternalLink className="h-4 w-4"/>
                            View listing
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-sm text-[#9da0af]">
                          <span className="flex items-center gap-2 rounded-lg border border-[#1f1f28] bg-[#14141c] px-3 py-2">
                            <lucide_react_1.MapPin className="h-4 w-4 text-indigo-300"/>
                            {selectedRole.location}
                          </span>
                          <span className="flex items-center gap-2 rounded-lg border border-[#1f1f28] bg-[#14141c] px-3 py-2">
                            <lucide_react_1.DollarSign className="h-4 w-4 text-indigo-300"/>
                            {selectedRole.salary}
                          </span>
                          <span className="flex items-center gap-2 rounded-lg border border-[#1f1f28] bg-[#14141c] px-3 py-2">
                            <lucide_react_1.Clock className="h-4 w-4 text-indigo-300"/>
                            {selectedRole.posted}
                          </span>
                          <span className="flex items-center gap-2 rounded-lg border border-[#1f1f28] bg-[#14141c] px-3 py-2">
                            <lucide_react_1.Bell className="h-4 w-4 text-indigo-300"/>
                            Alerts enabled
                          </span>
                        </div>

                        <div className="rounded-xl border border-[#1f1f28] bg-[#0f0f14] p-4">
                          <div className="mb-3 flex items-center justify-between text-sm text-white">
                            <span className="font-semibold">Match breakdown</span>
                            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">{selectedRole.match}%</span>
                          </div>
                          <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-[#1a1a21]">
                            <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400" style={{ width: "".concat(selectedRole.match, "%") }}/>
                          </div>
                          <div className="flex flex-wrap gap-2 text-[11px] text-[#cbd0e2]">
                            {selectedRole.workRights.map(function (right) { return (<span key={right} className="inline-flex items-center gap-1 rounded-full border border-[#2a2a35] px-2 py-0.5">
                                <lucide_react_1.Shield className="h-3 w-3 text-amber-200"/>
                                {right}
                              </span>); })}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-white">What you'll do</p>
                          <ul className="space-y-2 text-sm text-[#cbd0e2]">
                            {selectedRole.highlights.map(function (item) { return (<li key={item} className="flex items-start gap-2">
                                <lucide_react_1.CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300"/>
                                <span>{item}</span>
                              </li>); })}
                          </ul>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-[#1f1f28] bg-[#0f0f14] px-4 py-3 text-sm text-[#cbd0e2]">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-indigo-400"/>
                            Application steps are tracked inside the app.
                          </div>
                          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-200">
                            <lucide_react_1.ChevronRight className="h-4 w-4"/>
                            Apply → HR Screen → Technical → Offer
                          </span>
                        </div>
                      </div>)}
                  </div>
                </div>)}

              {activeTab === 'profile' && (<div className="space-y-6">
                  <div className="relative overflow-hidden rounded-2xl border border-[#2a2a35] bg-gradient-to-r from-indigo-500/10 via-[#111118] to-purple-500/10 p-6">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl"/>
                    <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-purple-500/15 blur-3xl"/>

                    <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-2xl font-bold text-white shadow-lg shadow-indigo-500/30">
                          {profilePreview.initials}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{profilePreview.name}</h3>
                          <p className="text-sm text-[#cbd0e2]">{profilePreview.degree}</p>
                          <p className="text-xs text-indigo-200">{profilePreview.focus}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs font-medium">
                        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-indigo-100">
                          <lucide_react_1.MapPin className="mr-1 inline h-3 w-3"/>
                          {profilePreview.location}
                        </span>
                        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-amber-100">
                          <lucide_react_1.Shield className="mr-1 inline h-3 w-3"/>
                          {profilePreview.workRights}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-xl border border-[#2a2a35] bg-[#101018] p-4">
                      <div className="mb-3 flex items-center justify-between text-sm text-[#9da0af]">
                        <span>Employability</span>
                        <lucide_react_1.TrendingUp className="h-4 w-4 text-indigo-300"/>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="relative h-16 w-16 rounded-full" style={{
                backgroundImage: "conic-gradient(#7c3aed ".concat(profilePreview.employability, "%, rgba(255,255,255,0.06) ").concat(profilePreview.employability, "%)"),
            }}>
                          <div className="absolute inset-2 flex items-center justify-center rounded-full bg-[#0f0f14] text-center">
                            <span className="text-lg font-semibold text-white">{profilePreview.employability}</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-white">Strong</p>
                          <p className="text-xs text-[#9da0af]">Add 1 more project to hit 95%</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#2a2a35] bg-[#101018] p-4">
                      <div className="mb-2 flex items-center justify-between text-sm text-[#9da0af]">
                        <span>Applications</span>
                        <lucide_react_1.Award className="h-4 w-4 text-purple-300"/>
                      </div>
                      <p className="text-2xl font-semibold text-white">{profilePreview.applications}</p>
                      <p className="text-xs text-[#9da0af]">Tracked inside the dashboard</p>
                    </div>
                    <div className="rounded-xl border border-[#2a2a35] bg-[#101018] p-4">
                      <div className="mb-2 flex items-center justify-between text-sm text-[#9da0af]">
                        <span>Events saved</span>
                        <lucide_react_1.Calendar className="h-4 w-4 text-cyan-200"/>
                      </div>
                      <p className="text-2xl font-semibold text-white">{profilePreview.events}</p>
                      <p className="text-xs text-[#9da0af]">Workshops and info sessions</p>
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
                    <div className="space-y-4 rounded-2xl border border-[#2a2a35] bg-[#0f0f14] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-indigo-300">Career preferences</p>
                          <h4 className="text-lg font-semibold text-white">Role interests & stack</h4>
                        </div>
                        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-200">Auto-syncs to matches</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm">
                        {profilePreview.rolePreferences.map(function (pref) { return (<span key={pref} className="rounded-full border border-[#2a2a35] bg-[#1a1a21] px-3 py-1 text-[#cbd0e2]">
                            {pref}
                          </span>); })}
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm">
                        {profilePreview.skills.map(function (skill) { return (<span key={skill} className="rounded-md border border-[#2a2a35] bg-[#111118] px-3 py-1 text-[#cbd0e2]">
                            {skill}
                          </span>); })}
                      </div>
                      <div className="rounded-xl border border-[#1f1f28] bg-[#0f0f14] p-4">
                        <p className="text-sm font-semibold text-white">Next best actions</p>
                        <ul className="mt-3 space-y-2 text-sm text-[#cbd0e2]">
                          {profilePreview.checklist.map(function (item) { return (<li key={item} className="flex items-start gap-2">
                              <lucide_react_1.CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300"/>
                              <span>{item}</span>
                            </li>); })}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl border border-[#2a2a35] bg-[#101018] p-5">
                        <p className="text-sm font-semibold text-white">Contact & links</p>
                        <div className="mt-3 space-y-3 text-sm text-[#cbd0e2]">
                          <div className="flex items-center gap-3">
                            <lucide_react_1.Mail className="h-4 w-4 text-indigo-300"/>
                            <span>{profilePreview.links.email}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <lucide_react_1.Linkedin className="h-4 w-4 text-indigo-300"/>
                            <span>{profilePreview.links.linkedin}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <lucide_react_1.Github className="h-4 w-4 text-indigo-300"/>
                            <span>{profilePreview.links.github}</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-[#2a2a35] bg-[#101018] p-5">
                        <p className="text-sm font-semibold text-white">Profile completion</p>
                        <div className="mt-3 flex items-center gap-4">
                          <div className="relative h-16 w-16 rounded-full" style={{
                backgroundImage: "conic-gradient(#22c55e ".concat(profilePreview.completion, "%, rgba(255,255,255,0.06) ").concat(profilePreview.completion, "%)"),
            }}>
                            <div className="absolute inset-2 flex items-center justify-center rounded-full bg-[#0f0f14] text-center">
                              <span className="text-lg font-semibold text-white">{profilePreview.completion}%</span>
                            </div>
                          </div>
                          <div className="space-y-1 text-sm text-[#cbd0e2]">
                            <p>Add one more project and update work rights to hit 100%.</p>
                            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-200">Auto-saves</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)}

              {activeTab === 'newsletter' && (<div className="space-y-4">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="mb-1 text-2xl font-bold text-white">Weekly Newsletter</h3>
                      <p className="text-[#6a6a7a]">Tailored for Year 3 • Computer Science • University of Sydney</p>
                    </div>
                    <div className="rounded-lg bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-400">This Week</div>
                  </div>

                  <div className="mb-6 flex gap-2 border-b border-[#2a2a35]">
                    <button onClick={function () { return setActiveNewsletterTab('jobs'); }} className={"flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ".concat(activeNewsletterTab === 'jobs'
                ? 'border-indigo-400 text-indigo-400'
                : 'border-transparent text-[#6a6a7a] hover:text-[#8a8a9a]')}>
                      <lucide_react_1.Briefcase className="h-4 w-4"/>
                      <span>Job Opportunities</span>
                      <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-indigo-400">8</span>
                    </button>
                    <button onClick={function () { return setActiveNewsletterTab('events'); }} className={"flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ".concat(activeNewsletterTab === 'events'
                ? 'border-purple-400 text-purple-400'
                : 'border-transparent text-[#6a6a7a] hover:text-[#8a8a9a]')}>
                      <lucide_react_1.Calendar className="h-4 w-4"/>
                      <span>Events</span>
                      <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-semibold text-purple-400">5</span>
                    </button>
                    <button onClick={function () { return setActiveNewsletterTab('extracurriculars'); }} className={"flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ".concat(activeNewsletterTab === 'extracurriculars'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-[#6a6a7a] hover:text-[#8a8a9a]')}>
                      <lucide_react_1.Trophy className="h-4 w-4"/>
                      <span>Extracurriculars</span>
                      <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-xs font-semibold text-cyan-400">4</span>
                    </button>
                  </div>

                  {activeNewsletterTab === 'jobs' && (<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                    {
                        title: 'Summer Intern - Software Engineering',
                        company: 'Atlassian',
                        location: 'Sydney, NSW',
                        salary: '$35-42/hr',
                        type: 'Internship',
                        match: 95,
                        tag: 'Hot Match',
                    },
                    {
                        title: '2026 Graduate Program',
                        company: 'Canva',
                        location: 'Sydney, NSW',
                        salary: '$80-95k',
                        type: 'Graduate',
                        match: 92,
                        tag: 'Closing Soon',
                    },
                    {
                        title: 'Data Engineering Intern',
                        company: 'Xero',
                        location: 'Wellington, NZ',
                        salary: '$28-35/hr',
                        type: 'Internship',
                        match: 88,
                        tag: null,
                    },
                    {
                        title: 'Graduate Software Developer',
                        company: 'REA Group',
                        location: 'Melbourne, VIC',
                        salary: '$80-90k',
                        type: 'Graduate',
                        match: 85,
                        tag: null,
                    },
                    {
                        title: 'ML Engineering Intern',
                        company: 'Zip Co',
                        location: 'Sydney, NSW',
                        salary: '$32-40/hr',
                        type: 'Internship',
                        match: 83,
                        tag: 'New',
                    },
                    {
                        title: 'Technology Graduate',
                        company: 'CommBank',
                        location: 'Sydney, NSW',
                        salary: '$75-85k',
                        type: 'Graduate',
                        match: 80,
                        tag: null,
                    },
                ].map(function (job) { return (<div key={job.title} className="group cursor-pointer rounded-lg border border-[#2a2a35] bg-[#111118] p-4 transition hover:border-indigo-500/40">
                          <div className="mb-2 flex items-start justify-between">
                            <h5 className="flex-1 text-sm font-semibold text-white transition-colors group-hover:text-indigo-200">{job.title}</h5>
                            {job.tag && (<span className={"ml-2 rounded px-2 py-0.5 text-xs ".concat(job.tag === 'Hot Match'
                            ? 'bg-red-500/10 text-red-400'
                            : job.tag === 'Closing Soon'
                                ? 'bg-yellow-500/10 text-yellow-300'
                                : 'bg-green-500/10 text-green-300')}>
                                {job.tag}
                              </span>)}
                          </div>
                          <p className="mb-2 text-sm text-[#9da0af]">{job.company}</p>
                          <div className="mb-2 flex items-center gap-3 text-xs text-[#6a6a7a]">
                            <span className="inline-flex items-center gap-1">
                              <lucide_react_1.MapPin className="h-3 w-3"/>
                              {job.location}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <lucide_react_1.DollarSign className="h-3 w-3"/>
                              {job.salary}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs">
                            <span className={"rounded px-2 py-0.5 ".concat(job.type === 'Internship'
                        ? 'bg-indigo-500/10 text-indigo-300'
                        : 'bg-purple-500/10 text-purple-300')}>
                              {job.type}
                            </span>
                            <span className="text-[#9da0af]">{job.match}% match</span>
                          </div>
                        </div>); })}
                    </div>)}

                  {activeNewsletterTab === 'events' && (<div className="space-y-3">
                      {[
                    {
                        title: 'Google Tech Talk: ML in Production',
                        date: 'Mon, Jan 22',
                        time: '6:00 PM',
                        location: 'USYD - Quadrangle Building',
                        attendees: 234,
                        type: 'Tech Talk',
                    },
                    {
                        title: 'Atlassian Career Night',
                        date: 'Wed, Jan 24',
                        time: '5:30 PM',
                        location: 'Atlassian Sydney Office',
                        attendees: 156,
                        type: 'Career Event',
                    },
                    {
                        title: 'AWS Cloud Computing Workshop',
                        date: 'Fri, Jan 26',
                        time: '2:00 PM',
                        location: 'Online',
                        attendees: 890,
                        type: 'Workshop',
                    },
                    {
                        title: 'Canva Design & Engineering Meetup',
                        date: 'Mon, Jan 29',
                        time: '6:00 PM',
                        location: 'Canva Sydney',
                        attendees: 78,
                        type: 'Networking',
                    },
                    {
                        title: 'Microsoft Student Summit',
                        date: 'Thu, Feb 1',
                        time: '9:00 AM',
                        location: 'Microsoft Sydney',
                        attendees: 320,
                        type: 'Conference',
                    },
                ].map(function (event) { return (<div key={event.title} className="rounded-lg border border-[#2a2a35] bg-[#111118] p-4 transition hover:border-purple-500/40">
                          <div className="mb-2 flex items-start justify-between">
                            <div className="flex-1">
                              <div className="mb-1 flex items-center gap-2">
                                <h5 className="text-sm font-semibold text-white">{event.title}</h5>
                                <span className="rounded bg-purple-500/10 px-2 py-0.5 text-xs text-purple-300">{event.type}</span>
                              </div>
                              <div className="flex flex-wrap items-center gap-3 text-xs text-[#6a6a7a]">
                                <span className="inline-flex items-center gap-1">
                                  <lucide_react_1.Calendar className="h-3 w-3"/>
                                  {event.date} • {event.time}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                  <lucide_react_1.MapPin className="h-3 w-3"/>
                                  {event.location}
                                </span>
                                <span className="inline-flex items-center gap-1">
                                  <lucide_react_1.Users className="h-3 w-3"/>
                                  {event.attendees} attending
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>); })}
                    </div>)}

                  {activeNewsletterTab === 'extracurriculars' && (<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {[
                    {
                        title: 'USYD Computer Science Society',
                        type: 'Society',
                        members: '2.4k members',
                        description: 'Workshops, hackathons, and career nights every month.',
                        tag: 'Popular',
                    },
                    {
                        title: 'Google Developer Student Club',
                        type: 'Club',
                        members: '890 members',
                        description: 'Build with Google tech, ship projects, get swag.',
                        tag: 'Active',
                    },
                    {
                        title: 'HackSydney 2026',
                        type: 'Hackathon',
                        members: 'Feb 15-17',
                        description: "Sydney's biggest student hackathon.",
                        tag: 'Registration Open',
                    },
                    {
                        title: 'Women in Tech USYD',
                        type: 'Society',
                        members: '1.2k members',
                        description: 'Mentorship, interview prep, and speaker series.',
                        tag: 'Welcoming',
                    },
                    {
                        title: 'USYD Robotics Club',
                        type: 'Club',
                        members: '650 members',
                        description: 'Hands-on robotics builds and competitions.',
                        tag: 'Hands-on',
                    },
                    {
                        title: 'AWS Cloud Club',
                        type: 'Club',
                        members: '430 members',
                        description: 'Labs, certifications, and cloud resume challenges.',
                        tag: 'Technical',
                    },
                ].map(function (extra) { return (<div key={extra.title} className="group cursor-pointer rounded-lg border border-[#2a2a35] bg-[#111118] p-4 transition hover:border-cyan-500/40">
                          <div className="mb-2 flex items-start justify-between">
                            <h5 className="text-sm font-semibold text-white transition-colors group-hover:text-cyan-200">{extra.title}</h5>
                            <span className="rounded bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-300">{extra.tag}</span>
                          </div>
                          <p className="mb-2 text-sm text-[#9da0af]">{extra.description}</p>
                          <div className="flex items-center justify-between text-xs text-[#6a6a7a]">
                            <span>{extra.type}</span>
                            <span className="inline-flex items-center gap-1">
                              <lucide_react_1.GraduationCap className="h-3 w-3"/>
                              {extra.members}
                            </span>
                          </div>
                        </div>); })}
                    </div>)}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
