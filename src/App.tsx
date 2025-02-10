import React, { useState } from 'react';
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
  Lock
} from 'lucide-react';
import Typewriter from 'typewriter-effect';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import myImage from './assets/blake-connally-B3l0g6HLxr8-unsplash.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', title: 'Home', favicon: '🏠' },
    { id: 'projects', title: 'Projects', favicon: '💼' },
    { id: 'about', title: 'About', favicon: '👤' },
    { id: 'contact', title: 'Contact', favicon: '📧' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return (
          <div className="p-8 max-w-4xl mx-auto ">
            <h1 className="text-4xl font-bold mb-6 font-mono relative ">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
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
                      .typeString('<span class="text-purple-500">Samvel\'s Portfolio</span>')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('<span class="text-blue-500">This is my portfolio website</span>')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('<span class="text-green-500">I love coding!</span>')
                      .pauseFor(2000)
                      .typeString('<span class="text-yellow-500"> I am looking for a summer internship</span>')
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </div>
            </h1>
            <div className=" rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg p-6 mb-8">
              <img 
                src={myImage}
                alt="Computer Screen with Code"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-lg text-gray-700 leading-relaxed font-mono">
                Hello My Name is Samvel Siby,
                I am a third yaer computer scoicence student at university of manitoba 
                
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-3">Latest Projects</h2>
                <ul className="space-y-2">
                  <li className="flex items-center text-blue-600 hover:underline cursor-pointer">
                    <Globe className="w-4 h-4 mr-2" /> AI-Powered Web Editor
                  </li>
                  <li className="flex items-center text-blue-600 hover:underline cursor-pointer">
                    <Globe className="w-4 h-4 mr-2" /> Crime Analysis Platform
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'AWS'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <div className="p-8 text-center text-gray-500 font-thin">
            Content for {activeTab} tab coming soon...
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center font-mono">
      <div className="w-full max-w-6xl mx-8 bg-white rounded-lg shadow-xl overflow-hidden ">
        <div className="bg-gray-200 px-4 py-2 flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center px-2 pt-2">
            {tabs.map(tab => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-2 sm:px-4 py-2 rounded-t-lg cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <span className="text-lg sm:text-base sm:mr-2">{tab.favicon}</span>
                <span className="hidden sm:inline">{tab.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
