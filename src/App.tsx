import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, User, Briefcase, GraduationCap, Heart } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['intro', 'experience', 'education', 'passion'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">John Doe</h1>
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com"
               className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Creative Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 animate-fade-in-delay">
            Passionate about crafting exceptional digital experiences
          </p>
          <button
            onClick={() => scrollToSection('experience')}
            className="animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 mr-4" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          <div className="space-y-12">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2">Senior Developer</h3>
              <p className="text-gray-400 mb-4">Tech Company • 2020 - Present</p>
              <p className="text-gray-300">Led development of multiple high-impact projects...</p>
            </div>
            {/* Add more experience items */}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-12">
            <GraduationCap className="w-8 h-8 mr-4" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-12">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2">Computer Science, BSc</h3>
              <p className="text-gray-400 mb-4">University Name • 2016 - 2020</p>
              <p className="text-gray-300">Focused on software engineering and web technologies...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section id="passion" className="min-h-screen flex items-center py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center mb-12">
            <Heart className="w-8 h-8 mr-4" />
            <h2 className="text-4xl font-bold">What I Love</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Problem Solving</h3>
              <p className="text-gray-300">Breaking down complex challenges into elegant solutions...</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">Clean Code</h3>
              <p className="text-gray-300">Writing maintainable and efficient code that scales...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;