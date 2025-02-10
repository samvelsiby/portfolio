import React, { useState, useEffect, useRef } from 'react';
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
  Download,
  Github,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import Typewriter from 'typewriter-effect';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'experience') {
            setExperienceVisible(entry.isIntersecting);
          } else if (entry.target.id === 'projects') {
            setProjectsVisible(entry.isIntersecting);
          } else if (entry.target.id === 'about') {
            setAboutVisible(entry.isIntersecting);
          } else if (entry.target.id === 'contact') {
            setContactVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      scale: 3,
      border: "3px solid #fff",
      transition: {
        type: "spring",
        mass: 0.6
      }
    }
  };

  const enterLink = () => setCursorVariant("text");
  const leaveLink = () => setCursorVariant("default");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tabs = [
    { id: 'home', title: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'projects', title: 'Projects', icon: <FolderGit2 className="w-5 h-5" /> },
    { id: 'experience', title: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'about', title: 'About', icon: <User className="w-5 h-5" /> },
    { id: 'contact', title: 'Contact', icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4 relative overflow-hidden font-mono">
      {/* Cursor */}
      <div 
        className="cursor-glow fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: `translate(-50%, -50%)`
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-30 animate-pulse-slow"></div>
          <div className="h-4 w-4 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
        </div>
      </div>
      
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
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        activeSection === tab.id
                          ? 'text-blue-400 bg-gray-900/80'
                          : 'text-gray-300 hover:text-blue-400 hover:bg-gray-900/60'
                      }`}
                    >
                      <span className="transform transition-transform duration-300 hover:scale-110">
                        {tab.icon}
                      </span>
                      <span className="ml-2 transition-all duration-300 opacity-100 max-w-[100px] md:block hidden">
                        {tab.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300">
          <section id="home" className="h-[calc(100vh-8.5rem)] flex items-center">
            <div className="p-6 max-w-4xl mx-auto relative">
              {/* Background glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-lg blur-3xl opacity-20 animate-pulse"></div>
              
              <div className="relative">
                <h1 className="text-4xl font-bold mb-6 relative animate-fade-in">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative">
                    <div className="flex flex-col items-start gap-4">
                      <Typewriter
                        options={{
                          loop: true,
                          delay: 75,
                          deleteSpeed: 50,
                          cursor: '▎',
                          wrapperClassName: 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient-x',
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
                      <div className="flex items-center space-x-4 animate-float">
                        <a
                          onMouseEnter={enterLink}
                          onMouseLeave={leaveLink}
                          href="/assets/Samvel-Siby.pdf"
                          download
                          className="group flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-all duration-300 hover:scale-105"
                        >
                          <Download className="w-6 h-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-12" />
                          <span className="text-sm relative">
                            View Resume
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </h1>
                <div className="prose prose-lg dark:prose-invert">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6 animate-fade-in-up">
                    Hello My Name is Samvel Siby,
                    I am a third year computer science student at university of manitoba 
                  </p>
                  <div className="flex items-center space-x-6 animate-fade-in-up-delayed">
                    <a
                      onMouseEnter={enterLink}
                      onMouseLeave={leaveLink}
                      href="https://github.com/samvelsiby"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-6 h-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-12" />
                      <span className="text-sm relative">
                        GitHub
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </span>
                    </a>
                    <a
                      onMouseEnter={enterLink}
                      onMouseLeave={leaveLink}
                      href="https://www.linkedin.com/in/samvelsiby"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="w-6 h-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-12" />
                      <span className="text-sm relative">
                        LinkedIn
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </span>
                    </a>
                    <a
                      onMouseEnter={enterLink}
                      onMouseLeave={leaveLink}
                      href="mailto:samvelsiby@gmail.com"
                      className="group flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="w-6 h-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-12" />
                      <span className="text-sm relative">
                        Email
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-0">
            <section id="experience" ref={experienceRef} className="min-h-screen">
              <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">
                  <Typewriter
                    options={{
                      strings: ['Experience'],
                      autoStart: true,
                      loop: true,
                      cursor: '▎',
                      delay: 75,
                      deleteSpeed: 50,
                      pauseFor: 2500,
                      wrapperClassName: 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient-x',
                      cursorClassName: 'text-blue-500 animate-pulse'
                    }}
                  />
                </h2>
                <Experience />
              </div>
            </section>

            <section id="projects" ref={projectsRef} className="min-h-screen">
              <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">
                  <Typewriter
                    options={{
                      strings: ['Projects'],
                      autoStart: true,
                      loop: true,
                      cursor: '▎',
                      delay: 75,
                      deleteSpeed: 50,
                      pauseFor: 2500,
                      wrapperClassName: 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient-x',
                      cursorClassName: 'text-blue-500 animate-pulse'
                    }}
                  />
                </h2>
                <Projects />
              </div>
            </section>

            <section id="about" ref={aboutRef} className="min-h-screen">
              <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">
                  <Typewriter
                    options={{
                      strings: ['About Me'],
                      autoStart: true,
                      loop: true,
                      cursor: '▎',
                      delay: 75,
                      deleteSpeed: 50,
                      pauseFor: 2500,
                      wrapperClassName: 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient-x',
                      cursorClassName: 'text-blue-500 animate-pulse'
                    }}
                  />
                </h2>
                <About />
              </div>
            </section>

            <section id="contact" ref={contactRef} className="min-h-screen">
              <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8">
                  <Typewriter
                    options={{
                      strings: ['Contact'],
                      autoStart: true,
                      loop: true,
                      cursor: '▎',
                      delay: 75,
                      deleteSpeed: 50,
                      pauseFor: 2500,
                      wrapperClassName: 'bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-transparent bg-clip-text animate-gradient-x',
                      cursorClassName: 'text-blue-500 animate-pulse'
                    }}
                  />
                </h2>
                <Contact />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
