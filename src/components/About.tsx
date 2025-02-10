import React from 'react';

const About = () => {
  const education = {
    school: "University of Manitoba",
    degree: "Bachelor of Science, Major in Computer Science",
    period: "2021 - Present",
    courses: ["Analysis of Algorithms", "Database Concepts and Usages", "Object-Oriented Programming"]
  };

  const skills = {
    languages: ["TypeScript", "JavaScript", "Python", "C++", "C", "Java", "HTML/CSS"],
    frameworks: ["React", "Node.js", "Express.js", "Django", "REST APIs", "OpenCV"],
    tools: ["AWS (S3, SDK)", "Redis", "Git", "MongoDB", "MySQL", "SQLite", "Jira", "Linux", "macOS", "Windows"]
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">About Me</h2>
      
      {/* Education Section */}
      <div className="bg-gray-800/80 rounded-lg shadow-lg p-6 mb-8 border border-gray-700/50">
        <h3 className="text-2xl font-semibold mb-4 text-gray-100">Education</h3>
        <div className="mb-4">
          <h4 className="text-xl font-medium text-gray-100">{education.school}</h4>
          <p className="text-gray-300">{education.degree}</p>
          <p className="text-gray-400">{education.period}</p>
          <div className="mt-2">
            <p className="font-medium text-gray-200">Relevant Coursework:</p>
            <ul className="list-disc list-inside text-gray-300">
              {education.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-800/80 rounded-lg shadow-lg p-6 border border-gray-700/50">
        <h3 className="text-2xl font-semibold mb-4 text-gray-100">Skills</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2 text-gray-200">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 text-gray-200">Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm border border-purple-700/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2 text-gray-200">Tools & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm border border-indigo-700/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;