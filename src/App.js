import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Shield, Palette, Sparkles, MapPin, Send, Award } from 'lucide-react';

const Portfolio = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  const roles = ['Software Developer', 'Frontend Developer', 'Cybersecurity & forensics analyst', 'UI/UX Designer'];
  const roleEmojis = ['💻', '⚛️', '🔐', '🎨'];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const animate = () => {
      setRotation(prev => ({
        x: prev.x + 0.5,
        y: prev.y + 0.5
      }));
    };
    const interval = setInterval(animate, 30);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    { icon: '🔐', title: 'Cybersecurity Steganography', desc: 'A steganography tool for hiding secret messages within images using LSB encoding technique.', tech: ['HTML', 'CSS', 'JavaScript', 'Python'], github: 'https://github.com/palakchandak8/cybersec-steganography', live: 'https://cybersec-steganography.vercel.app/'  },
    { icon: '✋', title: 'Virtual Hand Drawing', desc: 'An AI-powered application that enables users to draw on screen using hand gestures detected via computer vision.', tech: ['Python', 'OpenCV', 'MediaPipe'], github: 'https://github.com/palakchandak8/Virtual-Hand-Drawing', note: 'Desktop version available'},
    { icon: '🛡️', title: 'ShieldDrive', desc: 'A secure cloud storage platform for uploading, managing, and protecting files with a sleek web interface.', tech: ['React', 'Node.js', 'Express', 'MongoDB'], github: 'https://github.com/omkardinde04/ShieldDrive', live: 'https://sheildrive.vercel.app/' },
    { icon: '✊', title: 'Rock Paper Scissors', desc: 'A classic Rock Paper Scissors game with modern UI and animations.', tech: ['HTML', 'CSS', 'JavaScript'], github: 'https://github.com/palakchandak8/Rock-Paper-Scissors' , note: 'Desktop version available' },
    { icon: '🚀', title: 'MERN UIStack', desc: 'A full-stack web application built with MongoDB, Express, React, and Node.js showcasing modern development practices.', tech: ['MongoDB', 'Express', 'React', 'Node.js'], github: 'https://github.com/palakchandak8/mern-project-uistack', live: 'https://uistack8.vercel.app/' },
    { icon: '📚', title: 'WikiBot', desc: 'A Wikipedia-powered bot that provides quick and accurate information through conversational interface.', tech: ['JavaScript', 'API Integration'], github: 'https://github.com/palakchandak8/Wikibot', live: 'https://palakchandak8.github.io/Wikibot/'  }
  ];

  const skills = {
    'Web Development': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Flask', 'PHP', 'Bootstrap', 'jQuery'],
    'Programming Languages': ['Python', 'Java', 'C', 'C++', 'MATLAB'],
    'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
    'Cloud & DevOps': ['AWS', 'Google Cloud', 'Git', 'GitHub'],
    'Design Tools': ['Figma', 'Adobe XD', 'Canva', 'AlightMotion', 'AutoCAD'],
    'Frameworks / Libraries': ['MERN Stack', 'OpenCV', 'MediaPipe', 'NumPy', 'Pandas']
  };

  const experiences = [
    { role: 'Technical Division', company: 'NxtQuantum Shift Technologies', location: 'Remote', period: 'Oct 2025 - Mar 2026', description: 'Working on AI+ smartphone ecosystem. Contributing to UI/UX design, mobile frontend development, and OS feature enhancement.' },
    { role: 'MERN Publication Project Intern', company: 'SwDC, KJSSE, SVU', location: 'Mumbai', period: 'May 2025 - Jul 2025', description: 'Full-stack MERN development for publication management. API integration, database design, and deployment.' },
    { role: 'Social Media & Marketing Lead', company: 'MyEzz (Riidl Somaiya)', location: 'Mumbai', period: 'Jun 2025 - Aug 2025', description: 'Led digital campaigns for food delivery startup. Created content and managed community engagement.' },
    { role: 'MATLAB App Development Intern', company: 'KJSSE, SVU', location: 'Mumbai', period: 'Dec 2024 - Jan 2025', description: 'Built GUI-based MATLAB applications including Unit Converter, To-Do List, and Encryption Tool.' }
  ];

  const education = [
    { degree: 'B.Tech Computer Science', institution: 'K J Somaiya College of Engineering', location: 'Mumbai, India', period: '2023 - 2027', gpa: 'CGPA: 9.3/10', honors: 'Honors: Cybersecurity and Forensics (CSF)' },
    { degree: 'BSc (Foundational Level)', institution: 'IIT Madras', period: 'July 2023 - July 2024', gpa: 'GPA: 9.2/10' },
    { degree: '12th HSC Maharashtra', institution: 'Higher Secondary Certificate', period: '2023', gpa: '77.6%' },
    { degree: '10th CBSE Board', institution: 'Central Board of Secondary Education', period: '2021', gpa: '94.2%' }
  ];

  const certificates = [
    { name: 'Google Cloud Cybersecurity', issuer: 'Google Cloud', link: 'https://drive.google.com/file/d/1swa_uajoI8PC6lZCiS29e5BdMeK7ihyG/view?usp=drive_link' },
    { name: 'MATLAB Onramp', issuer: 'MathWorks', link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=64923c4d-c0fa-44c0-89bf-6256aa2c82ac' },
    { name: 'MATLAB App Building', issuer: 'MathWorks', link: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=7a2cfdc0-6258-471a-9064-5c40c7bec7aa' },
    { name: 'MATLAB Data Analysis', issuer: 'MathWorks', link: 'https://matlabacademy.mathworks.com/progress/share/learningpath/certificate.html?id=c45d8e95-569a-4d29-b3ac-121e88fa1dc0' },
    { name: 'Cyber Job Simulation', issuer: 'Deloitte Australia', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_soaqBvKYL5QB9qWTj_1751255153467_completion_certificate.pdf' },
    { name: 'Technology Job Simulation', issuer: 'Deloitte Australia', link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_soaqBvKYL5QB9qWTj_1751286291353_completion_certificate.pdf' },
    { name: 'Intro to GenAI Studio', issuer: 'Google Cloud', link: 'https://certificates.simplicdn.net/share/8554276_89237521751386887260.pdf' },
    { name: 'Gemini for Google Workspace', issuer: 'Google Cloud', link: 'https://certificates.simplicdn.net/share/8567351_89237521751635470259.pdf' },
    { name: 'SQL Analytics and BI', issuer: 'Databricks', link: 'https://certificates.simplicdn.net/share/8599362_89237521752075678054.pdf' }
  ];

  const stats = [
    { value: '20+', label: 'Projects Completed' },
    { value: '121', label: 'GitHub Contributions' },
    { value: '5+', label: 'Technologies' },
    { value: '2027', label: 'Graduation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black-950 to-black text-white overflow-x-hidden relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-mono">&lt;PC/&gt;</div>
          <div className="hidden md:flex gap-8">
            {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">{item}</button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-between px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full relative z-10">
          <div className="space-y-6">
            <div className="text-purple-400 font-mono text-sm animate-pulse">&lt;hello world/&gt;</div>
            <h1 className="text-5xl md:text-7xl font-bold">I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Palak Chandak</span></h1>
            <p className="text-xl text-gray-300">A creative technologist blending <span className="text-purple-400">design</span> with <span className="text-pink-400">development</span>. Passionate about clean UIs, intuitive user experiences, and building solutions that bridge creativity with code.</p>
            <div className="flex gap-4">
              <a href="https://github.com/palakchandak8" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-900/30 border border-purple-500/30 rounded-lg hover:bg-purple-800/40 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50 transition-all"><Github className="w-6 h-6 text-purple-400" /></a>
              <a href="https://www.linkedin.com/in/palak-chandak-860b30303" target="_blank" rel="noopener noreferrer" className="p-3 bg-purple-900/30 border border-purple-500/30 rounded-lg hover:bg-purple-800/40 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50 transition-all"><Linkedin className="w-6 h-6 text-purple-400" /></a>
              <a href="mailto:palak.chandak@somaiya.edu" className="p-3 bg-purple-900/30 border border-purple-500/30 rounded-lg hover:bg-purple-800/40 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50 transition-all"><Mail className="w-6 h-6 text-purple-400" /></a>
            </div>
            <button onClick={() => scrollToSection('projects')} className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2">View My Work <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative" style={{ perspective: '1000px' }}>
              <div 
                className="w-80 h-80 border-2 border-purple-500/50 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-purple-500/30 transition-transform duration-300"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="text-center space-y-4">
                  <div className="text-7xl transition-all duration-500">{roleEmojis[activeRole]}</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500">{roles[activeRole]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2"><div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"><div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div></div></div>
      </section>

      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-purple-400 font-mono text-sm mb-2">// About Me</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Turning Ideas Into <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Digital Reality</span></h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">I'm a B.Tech Computer Science student at K J Somaiya College of Engineering, passionate about creating innovative solutions at the intersection of technology and design.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Code2, title: 'Full-Stack Development', desc: 'Building scalable web applications with React, Node.js, and modern frameworks.' },
              { icon: Shield, title: 'Cybersecurity', desc: 'Ensuring secure systems through ethical hacking and security best practices.' },
              { icon: Palette, title: 'UI/UX Design', desc: 'Creating intuitive and beautiful user interfaces with attention to detail.' },
              { icon: Sparkles, title: 'AI/ML Integration', desc: 'Leveraging artificial intelligence to build smarter applications.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all group backdrop-blur-sm">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><item.icon className="w-7 h-7 text-purple-400" /></div>
                <h3 className="text-xl font-bold mb-2 text-purple-300">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl text-center backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-purple-400 font-mono text-sm mb-2">// My Arsenal</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Skills & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-gray-300">A diverse toolkit built through hands-on experience and continuous learning.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, techs], idx) => (
              <div key={idx} className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, techIdx) => (
                    <span key={techIdx} className="px-3 py-1 bg-purple-800/30 border border-purple-600/50 rounded-full text-sm text-purple-300 hover:bg-purple-700/40 hover:shadow-md hover:shadow-purple-500/30 transition-all">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span></h2>
            <p className="text-gray-300">A collection of projects showcasing my skills in web development, cybersecurity, and AI/ML.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project, idx) => (
              <div key={idx} className="group p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/30 transition-all backdrop-blur-sm">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors text-purple-300">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIdx) => (
                    <span key={techIdx} className="px-2 py-1 bg-purple-900/40 border border-purple-600/40 rounded text-xs text-purple-400">{tech}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors text-sm"><Github className="w-4 h-4" />View Code</a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 hover:text-purple-400 transition-colors text-sm"><ExternalLink className="w-4 h-4" />Live Demo</a>
                  )}
                </div>
                {project.note && (
                <div className="inline-flex items-center gap-2 text-blue-400 hover:text-purple-400 transition-colors text-sm">
                    💻 {project.note}
                  </div>
                )}

              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://github.com/palakchandak8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-900/30 border border-purple-500/50 rounded-lg hover:bg-purple-800/40 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-purple-400 font-mono">&lt;/&gt; View All Projects on GitHub</a>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Where I've <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Worked</span></h2>
            <p className="text-gray-300">My journey through internships, team roles, and freelance work</p>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {idx < experiences.length - 1 && <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent"></div>}
                <div className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0 border-2 border-purple-500/50"><span className="text-2xl">💼</span></div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-purple-300">{exp.role}</h3>
                          <div className="text-purple-400 font-semibold">{exp.company}</div>
                        </div>
                        <div className="text-right text-sm text-gray-400">
                          <div className="flex items-center gap-2"><span>📅</span>{exp.period}</div>
                          <div className="flex items-center gap-2 mt-1"><MapPin className="w-3 h-3" />{exp.location}</div>
                        </div>
                      </div>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-purple-400 font-mono text-sm mb-2">// Journey So Far</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Experience & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span></h2>
            <p className="text-gray-300">My academic journey and professional growth in technology.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">🎓</div>EDUCATION</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-purple-400 mb-1">{edu.degree}</h4>
                    <div className="text-purple-300 font-semibold mb-2">{edu.institution}</div>
                    {edu.location && <div className="text-sm text-gray-400 mb-1">{edu.location}</div>}
                    <div className="text-sm text-gray-400 mb-2">{edu.period}</div>
                    {edu.gpa && <div className="text-purple-400 font-semibold mb-2">{edu.gpa}</div>}
                    {edu.honors && <div className="text-green-400 text-sm">{edu.honors}</div>}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">🏆</div>CERTIFICATIONS</h3>
              <div className="space-y-3">
                {certificates.map((cert, idx) => (
                  <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="block p-4 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all backdrop-blur-sm group">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-purple-300 group-hover:text-purple-400 transition-colors">{cert.name}</div>
                        <div className="text-sm text-purple-400">{cert.issuer}</div>
                      </div>
                      <Award className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-purple-400 font-mono text-sm mb-2">// Let's Connect</div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span></h2>
            <p className="text-gray-300 text-lg">I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a href="mailto:palak.chandak@somaiya.edu" className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center group-hover:scale-110 transition-transform"><Mail className="w-7 h-7 text-purple-400" /></div>
                <div><div className="text-gray-400 text-sm">Email</div><div className="text-purple-300 font-semibold">palak.chandak@somaiya.edu</div></div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/palak-chandak-860b30303" target="_blank" rel="noopener noreferrer" className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center group-hover:scale-110 transition-transform"><Linkedin className="w-7 h-7 text-purple-400" /></div>
                <div><div className="text-gray-400 text-sm">LinkedIn</div><div className="text-purple-300 font-semibold">palak-chandak-860b30303</div></div>
              </div>
            </a>
            <a href="https://github.com/palakchandak8" target="_blank" rel="noopener noreferrer" className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center group-hover:scale-110 transition-transform"><Github className="w-7 h-7 text-purple-400" /></div>
                <div><div className="text-gray-400 text-sm">GitHub</div><div className="text-purple-300 font-semibold">@palakchandak8</div></div>
              </div>
            </a>
            <a href="https://www.instagram.com/palak._.8" target="_blank" rel="noopener noreferrer" className="p-6 bg-purple-900/20 border border-purple-500/30 rounded-xl hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all group backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div><div className="text-gray-400 text-sm">Instagram</div><div className="text-purple-300 font-semibold">@palak._.8</div></div>
              </div>
            </a>
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">Feel free to reach out for collaborations, project discussions, or just to say hi! 👋</p>
            <div className="inline-flex items-center gap-2 text-purple-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Based in Mumbai, India</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-purple-500/20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Palak Chandak. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/palakchandak8" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/palak-chandak-860b30303" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:palak.chandak@somaiya.edu" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
              