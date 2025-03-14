import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ChevronDown, User, Briefcase, GraduationCap, Heart } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true });
  const { ref: educationRef, inView: educationInView } = useInView({ triggerOnce: true });
  const { ref: passionRef, inView: passionInView } = useInView({ triggerOnce: true });

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
    <div className="min-h-screen bg-gradient-to-br from-sky-800 via-blue-500 to-amber-100 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-amber-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-amber-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:shunt11@live.co.uk"
               className="hover:text-amber-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <img
              src=""
              alt="Profile photo"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg object-contain"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm Sarah Hunt 👋
          </h1>
          <p className="text-4xl md:text-5xl text-gray-300 mb-12 animate-fade-in-delay">
            I'm passionate about building modern apps 
            that help people live a better life.
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
      <section id="experience" className="min-h-screen flex items-center py-20 bg-amber-200">
  <div ref={experienceRef} className={`max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-stretch ${experienceInView ? 'opacity-100 fade-in-up' : 'opacity-0'}`}>
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-sky-800 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 h-full">
        <h3 className="text-2xl mb-2 text-amber-400">Senior Developer</h3>
        <p className="text-gray-400 mb-4">Tech Company • 2020 - Present</p>
        <p className="text-gray-300">Led development of multiple high-impact projects, focusing on scalable architecture and modern web technologies. Mentored junior developers and implemented best practices across the team.</p>
      </div>
    </div>
    <div className="w-full md:w-1/2 p-4">
      <img src="interim image.png" alt="Experience Image" className="w-full h-full object-cover rounded-lg shadow-xl" />
    </div>
  </div>
</section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center py-20 bg-gray-800/50">
        <div ref={educationRef} className={`max-w-4xl mx-auto px-4 transition-opacity duration-1000 ${educationInView ? 'opacity-100 fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center mb-12">
            <GraduationCap className="w-8 h-8 mr-4 text-amber-400" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-12">
            <div className="bg-sky-900/50 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-amber-400">Computer Science, BSc</h3>
              <p className="text-gray-400 mb-4">University Name • 2016 - 2020</p>
              <p className="text-gray-300">Focused on software engineering and web technologies. Graduated with honors. Led the university's web development club and participated in multiple hackathons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section id="passion" className="min-h-screen flex items-center py-20">
        <div ref={passionRef} className={`max-w-4xl mx-auto px-4 transition-opacity duration-1000 ${passionInView ? 'opacity-100 fade-in-up' : 'opacity-0'}`}>
          <div className="flex items-center mb-12">
            <Heart className="w-8 h-8 mr-4 text-amber-400" />
            <h2 className="text-4xl font-bold">What I Love</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">Problem Solving</h3>
              <p className="text-gray-300">Breaking down complex challenges into elegant solutions. I thrive on finding innovative ways to solve technical problems and improve user experiences.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">Clean Code</h3>
              <p className="text-gray-300">Writing maintainable and efficient code that scales. I'm passionate about code quality, testing, and following best practices in software development.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;