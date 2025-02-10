import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Star, 
  Plus, 
  Settings, 
  Menu, 
  RefreshCw, 
  ChevronLeft, 
  ChevronRight,
  Search,
  Lock,
  Home,
  FolderGit2,
  User,
  Mail,
  Moon,
  Sun,
  Briefcase,
  Download
} from 'lucide-react';
import Typewriter from 'typewriter-effect';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import resume from './assets/Samvel-Siby.pdf';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers: { [key: string]: IntersectionObserver } = {};
    const sections = ['home', 'experience', 'projects', 'about', 'contact'];
    
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observers[section] = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setActiveSection(section);
              }
            });
          },
          { threshold: 0.5 }
        );
        observers[section].observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        if (observers[section]) {
          observers[section].disconnect();
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'home', title: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'experience', title: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'projects', title: 'Projects', icon: <FolderGit2 className="w-5 h-5" /> },
    { id: 'about', title: 'About', icon: <User className="w-5 h-5" /> },
    { id: 'contact', title: 'Contact', icon: <Mail className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-blue-900/30 animate-gradient-x"
          style={{ backgroundSize: '400% 400%' }}
        ></div>
        
        {/* Animated Blobs */}
        <div className="absolute inset-0">
          <div className="absolute h-[40vh] w-[40vh] top-1/4 left-1/4 animate-blob mix-blend-multiply filter blur-xl opacity-50 bg-indigo-700/40 rounded-full"></div>
          <div className="absolute h-[45vh] w-[45vh] top-1/3 right-1/4 animate-blob animation-delay-2000 mix-blend-multiply filter blur-xl opacity-50 bg-purple-700/40 rounded-full"></div>
          <div className="absolute h-[35vh] w-[35vh] bottom-1/4 left-1/3 animate-blob animation-delay-4000 mix-blend-multiply filter blur-xl opacity-50 bg-blue-700/40 rounded-full"></div>
        </div>
      </div>

      {/* Chrome Browser Frame */}
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 flex flex-col h-[calc(100vh-2rem)]">
        {/* Browser Header and Nav - Fixed */}
        <div className="sticky top-0 z-50">
          {/* Browser Header */}
          <div className="bg-gradient-to-r from-gray-800 via-gray-750 to-gray-800 px-4 py-2 border-b border-gray-700">
            {/* Window Controls */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            
            {/* URL Bar */}
            <div className="mt-2 flex items-center space-x-2 bg-gray-900/80 rounded-lg p-2">
              <div className="flex items-center space-x-2">
                <ChevronLeft className="w-4 h-4 text-gray-400" />
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex-1 flex items-center bg-gray-950 rounded px-3 py-1">
                <Lock className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-300">samvelsiby.com</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="bg-gradient-to-r from-gray-800 via-gray-750 to-gray-800 border-b border-gray-700">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex items-center justify-center h-16">
                <div className="flex space-x-4">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.id)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        activeSection === tab.id
                          ? 'text-blue-400 bg-gray-900/80'
                          : 'text-gray-300 hover:text-blue-400 hover:bg-gray-900/60'
                      }`}
                    >
                      {tab.icon}
                      <span className="ml-2">{tab.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
          <section id="home" className="min-h-screen flex items-center">
            <div className="p-8 max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 font-mono relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative">
                  <div className="flex flex-col items-start gap-4">
                    <Typewriter
                      options={{
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        cursor: '▎',
                        wrapperClassName: 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text',
                        cursorClassName: 'text-blue-500 animate-pulse'
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString('Hello, I\'m Samvel Siby')
                          .pauseFor(1000)
                          .deleteAll()
                          .typeString('I\'m a Software Developer')
                          .pauseFor(1000)
                          .deleteAll()
                          .start();
                      }}
                    />
                    <a
                      href={resume}
                      download="Samvel-Siby-Resume.pdf"
                      className="group text-lg font-mono relative inline-block"
                    >
                      <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">
                        View My Resume
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </span>
                      <Download className="w-4 h-4 inline-block ml-2 opacity-0 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
                    </a>
                  </div>
                </div>
              </h1>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg text-gray-300 leading-relaxed font-mono">
                  Hello My Name is Samvel Siby,
                  I am a third year computer science student at university of manitoba 
                </p>
              </div>
            </div>
          </section>

          <section id="experience" className="min-h-screen py-16">
            <Experience />
          </section>

          <section id="projects" className="min-h-screen py-16">
            <Projects />
          </section>

          <section id="about" className="min-h-screen py-16">
            <About />
          </section>

          <section id="contact" className="min-h-screen py-16">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
