import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Built a comprehensive analytics platform with live data visualization, user authentication, and advanced filtering capabilities.',
      tech: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      link: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with product management, shopping cart, and integrated payment processing.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team workspaces, and productivity insights.',
      tech: ['React', 'Supabase', 'Vite', 'TypeScript'],
      link: '#',
      color: 'from-orange-500 to-rose-500',
    },
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Supabase', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] },
  ];

  const experience = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Startup Inc',
      period: '2023 - Present',
      description: 'Leading frontend architecture and mentoring junior developers',
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Solutions',
      period: '2021 - 2023',
      description: 'Built and maintained multiple web applications for enterprise clients',
    },
    {
      role: 'Junior Developer',
      company: 'Creative Agency',
      period: '2020 - 2021',
      description: 'Developed responsive websites and web applications',
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Nikhil
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['home', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-sm font-medium hover:text-blue-600 transition-colors capitalize"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100">
              {['home', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block py-2 text-sm font-medium hover:text-blue-600 transition-colors capitalize"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Nikhil</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Full-stack developer crafting beautiful, scalable web applications. I specialize in React, TypeScript, and modern web technologies.
              </p>
              <div className="flex gap-4">
                <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                  View My Work <ArrowRight size={20} />
                </a>
                <a href="#contact" className="px-8 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center text-6xl">
                  💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 mb-12">A selection of recent work I'm proud of</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className={`h-40 bg-gradient-to-br ${project.color}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6 text-gray-900">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Experience</h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-600 mt-3">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm always interested in hearing about new projects and opportunities.
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:nikhil@example.com" className="p-4 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              <Mail size={28} />
            </a>
            <a href="#" className="p-4 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              <Github size={28} />
            </a>
            <a href="#" className="p-4 bg-gray-100 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              <Linkedin size={28} />
            </a>
          </div>

          <a href="mailto:nikhil@example.com" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Send me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white text-center">
        <p className="text-gray-400">
          © 2024 Nikhil. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
