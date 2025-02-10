import React from 'react';

const About = () => {
  return (
    <div className="space-y-6">
      <p className="text-gray-300 leading-relaxed">
        Hi there! I'm a passionate software developer with a love for creating elegant solutions to complex problems. 
        My journey in tech started when I built my first website at 15, and I've been hooked ever since.
      </p>
      
      <p className="text-gray-300 leading-relaxed">
        I specialize in full-stack development, with expertise in React, Node.js, and Python. 
        I'm particularly interested in AI and machine learning, and I love exploring new technologies.
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <h3 className="text-blue-400 mb-2">Technologies</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
            <li>Python / Django</li>
            <li>TypeScript</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-blue-400 mb-2">Interests</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Machine Learning</li>
            <li>Web Development</li>
            <li>Cloud Computing</li>
            <li>Open Source</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;