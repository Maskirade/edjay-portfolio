import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Play, Image, Music, Pen, Globe, Download } from 'lucide-react';

export default function EdjayPortfolio() {
  const [activeSection, setActiveSection] = useState('intro');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'intro', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
    { id: 'qualifications', label: 'Qualifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'Video Editing', level: 95, icon: <Play size={20} /> },
    { name: 'Photo Editing', level: 92, icon: <Image size={20} /> },
    { name: 'Audio Editing', level: 88, icon: <Music size={20} /> },
    { name: 'Illustration', level: 96, icon: <Pen size={20} /> },
    { name: 'Graphic Design', level: 94, icon: <Pen size={20} /> },
    { name: 'Web Design', level: 85, icon: <Globe size={20} /> }
  ];

  const projects = [
    {
      title: 'Brand Identity Design',
      category: 'Graphic Design',
      description: 'Complete brand identity package including logo, color palette, and marketing materials.',
      tools: ['Adobe Illustrator', 'Photoshop'],
      mediaType: 'image',
      media: '/images/img1.png'
    },
    {
      title: 'Commercial Video Production',
      category: 'Video Editing',
      description: 'High-impact commercial video with motion graphics and sound design.',
      tools: ['Premiere Pro', 'After Effects', 'Audition'],
      mediaType: 'video',
      media: '/images/videoedit.mp4'
    },
    {
      title: 'Editorial Illustrations',
      category: 'Illustration',
      description: 'Series of editorial illustrations for digital publications and customization.',
      tools: ['Procreate', 'Illustrator'],
      mediaType: 'image',
      media: '/images/illustration.jpg'
    },
    {
      title: 'Product Photography',
      category: 'Photo Editing',
      description: 'Professional product photography with advanced retouching.',
      tools: ['Photoshop', 'Lightroom'],
      mediaType: 'image',
      media: '/images/photoedit.jpg'
    },
    {
      title: 'Audio Remixing',
      category: 'Audio Editing',
      description: 'Complete audio post-production for Dance Routines or Music Videos.',
      tools: ['Audition', 'Logic Pro'],
      mediaType: 'audio',
      media: '/images/mix.mp3'
    },
    {
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'Modern, responsive portfolio website for creative professional.',
      tools: ['Figma', 'React', 'Tailwind'],
      mediaType: 'link',
      media: 'https://sites.google.com/view/sialenahotel/home'
      
      
    }
  ];

  const experience = [
    {
      role: 'Fulltime Illustrator & Graphic Designer',
      company: 'Creative Studio',
      period: '2021 - Present',
      description: 'Leading creative projects from concept to completion, specializing in brand identity and editorial illustrations.'
    },
    {
      role: 'Multimedia Specialist',
      company: 'Digital Agency',
      period: '2019 - 2021',
      description: 'Handled video editing, photo manipulation, and audio post-production for various client projects.'
    },
    {
      role: 'Freelance Designer',
      company: 'Self-Employed',
      period: '2017 - 2019',
      description: 'Provided comprehensive design services including web design, illustration, and multimedia editing.'
    }
  ];

  const qualifications = [
    {
      title: 'Bachelor of Fine Arts',
      institution: 'School of Visual Arts',
      year: '2017',
      description: 'Major in Graphic Design & Illustration'
    },
    {
      title: 'Adobe Certified Professional',
      institution: 'Adobe',
      year: '2020',
      description: 'Premiere Pro, Photoshop, Illustrator'
    },
    {
      title: 'UI/UX Design Certification',
      institution: 'Online Academy',
      year: '2021',
      description: 'User Interface and Experience Design'
    }
  ];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0C2B4E]/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[#F4F4F4] tracking-tight">EDJAY</div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium uppercase tracking-wider transition-all ${
                    activeSection === item.id 
                      ? 'text-[#F4F4F4] border-b-2 border-[#1D546C]' 
                      : 'text-[#F4F4F4]/70 hover:text-[#F4F4F4]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#F4F4F4]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Nav */}
          {menuOpen && (
            <div className="md:hidden mt-6 pb-4 flex flex-col gap-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium uppercase tracking-wider transition-colors ${
                    activeSection === item.id ? 'text-[#F4F4F4]' : 'text-[#F4F4F4]/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
<section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#0C2B4E] to-[#1A3D64]">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Profile Picture */}
      <div className="relative">
        <div className="w-64 h-64 rounded-full bg-[#1D546C] border-4 border-[#F4F4F4] flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="w-48 h-48 rounded-full bg-[#1A3D64] flex items-center justify-center overflow-hidden">
            {/* Replace the emoji with your profile image */}
            <img
              src= 'pic.jpeg' // Picturepath
              alt="Profile"
              className="w-30 h-30 object-cover rounded-full"
            />
          </div>
        </div>
      </div>

            
            {/* Hero Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-6xl md:text-7xl font-bold text-[#F4F4F4] mb-4">EDJAY</h1>
              <p className="text-2xl text-[#F4F4F4]/90 mb-2">Creative Multimedia Professional</p>
              <p className="text-lg text-[#F4F4F4]/70 mb-8">
                Video Editor • Photo Editor • Audio Editor • Illustrator • Graphic Designer • Web Designer
              </p>
              <button className="bg-[#1D546C] text-[#F4F4F4] px-8 py-3 rounded-lg hover:bg-[#1A3D64] transition-all shadow-lg flex items-center gap-2 mx-auto md:mx-0">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0C2B4E] mb-8 border-b-4 border-[#1D546C] pb-4 inline-block">
            About Me
          </h2>
          <div className="space-y-6 text-[#0C2B4E]/80 text-lg leading-relaxed">
            <p>
              Hello! I'm Edjay, a passionate creative professional with expertise across multiple disciplines 
              in the multimedia field. With years of experience in video editing, photo manipulation, audio 
              post-production, illustration, and graphic design, I bring a comprehensive skill set to every project.
            </p>
            <p>
              As a fulltime Illustrator and Graphic Designer, I specialize in creating compelling visual narratives 
              that captivate audiences. My work spans from brand identity design to editorial illustrations, 
              always maintaining a focus on clean aesthetics and powerful storytelling.
            </p>
            <p>
              Whether it's editing cinematic videos, retouching photographs to perfection, producing crystal-clear 
              audio, crafting unique illustrations, or designing modern websites, I approach each project with 
              dedication, creativity, and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0C2B4E] mb-12 border-b-4 border-[#1D546C] pb-4 inline-block">
            Professional Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map(skill => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-[#1D546C]">{skill.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-[#0C2B4E]">{skill.name}</span>
                      <span className="text-[#1A3D64] font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-[#F4F4F4] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#1A3D64] to-[#1D546C] transition-all duration-1000 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0C2B4E] mb-12 border-b-4 border-[#1D546C] pb-4 inline-block">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-4 border-[#1D546C]">
                <div className="absolute w-4 h-4 bg-[#1D546C] rounded-full -left-[10px] top-0"></div>
                <div className="bg-[#F4F4F4] p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-[#0C2B4E] mb-2">{exp.role}</h3>
                  <p className="text-[#1A3D64] font-medium mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-[#0C2B4E]/80">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-20 px-6 bg-[#F4F4F4]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0C2B4E] mb-12 border-b-4 border-[#1D546C] pb-4 inline-block">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {qualifications.map((qual, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#1D546C]">
                <h3 className="text-xl font-bold text-[#0C2B4E] mb-2">{qual.title}</h3>
                <p className="text-[#1A3D64] font-medium mb-1">{qual.institution}</p>
                <p className="text-[#1D546C] text-sm font-semibold mb-2">{qual.year}</p>
                <p className="text-[#0C2B4E]/70 text-sm">{qual.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-[#0C2B4E] mb-12 border-b-4 border-[#1D546C] pb-4 inline-block">
      Featured Projects
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => {
        // Determine media type based on project category
        let mediaType = '';
        switch (project.category) {
          case 'Graphic Design':
          case 'Illustration':
          case 'Photo Editing':
            mediaType = 'Image';
            break;
          case 'Video Editing':
            mediaType = 'Video';
            break;
          case 'Audio Editing':
            mediaType = 'Audio';
            break;
          case 'Web Design':
            mediaType = 'Website link';
            break;
          default:
            mediaType = '';
        }

        return (
          <div
            key={idx}
            className="bg-[#F4F4F4] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
          >
            <div className="h-48 flex items-center justify-center bg-[#1A3D64]">
  {project.mediaType === 'image' && (
    <img src={project.media} alt={project.title} className="h-full w-full object-cover" />
  )}
  {project.mediaType === 'video' && (
    <video controls className="h-full w-full object-cover">
      <source src={project.media} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )}
  {project.mediaType === 'audio' && (
    <audio controls className="w-full">
      <source src={project.media} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )}
  {project.mediaType === 'link' && (
    <a href={project.media} target="_blank" rel="noopener noreferrer" className="text-white underline">
      Visit Website
    </a>
  )}
</div>

            <div className="p-6">
              <div className="text-xs font-bold text-[#1D546C] uppercase tracking-wider mb-2">
                {project.category}
              </div>
              <h3 className="text-xl font-bold text-[#0C2B4E] mb-3">{project.title}</h3>
              <p className="text-[#0C2B4E]/70 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-white text-[#1A3D64] text-xs rounded-full font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#0C2B4E] to-[#1A3D64]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-[#F4F4F4] mb-12 text-center">
            Let's Work Together
          </h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-[#F4F4F4]/90 text-center text-lg mb-8">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                <Mail className="text-[#1D546C]" size={32} />
                <div>
                  <div className="text-[#F4F4F4]/70 text-sm">Email</div>
                  <div className="text-[#F4F4F4] font-medium">edjaygalope159@email.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                <Phone className="text-[#1D546C]" size={32} />
                <div>
                  <div className="text-[#F4F4F4]/70 text-sm">Phone</div>
                  <div className="text-[#F4F4F4] font-medium">+63 946 246 9381</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
                <MapPin className="text-[#1D546C]" size={32} />
                <div>
                  <div className="text-[#F4F4F4]/70 text-sm">Location</div>
                  <div className="text-[#F4F4F4] font-medium">Bayugan City</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0C2B4E] py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#F4F4F4]/70">
            © 2024 Edjay. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}