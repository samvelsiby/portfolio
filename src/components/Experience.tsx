import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Team Member",
      company: "UMSATS (University of Manitoba Space Applications and Technology Society)",
      duration: "Dec. 2024 – Present",
      tech: "React, JavaScript, Python, C, HTML/CSS",
      description: [
        "Developed software tools and libraries, including a web-based telemetry dashboard, a firmware library for in-flight operations, and a testing interface for satellite component debugging",
        "Utilized React to update and enhance the functionality of the telemetry dashboard, improving usability and performance",
        "Collaborated with interdisciplinary teams to assist subsystems in optimizing their codebases, reducing development time"
      ]
    },
    {
      title: "IT Service Desk Analyst",
      company: "IST Technology Services - University of Manitoba",
      duration: "Sept. 2024 - Present",
      tech: "Active Directory, Exchange, SCCM",
      description: [
        "Resolved 1000+ technical support tickets with a 95% first-contact resolution rate",
        "Reduced average resolution time by 25% through improved documentation and troubleshooting workflows",
        "Collaborated with IT teams to resolve complex issues involving Active Directory, Exchange, and SCCM",
        "Created knowledge base articles, improving team efficiency and user self-service"
      ]
    },
    {
      title: "Data Analyst",
      company: "Freelance",
      duration: "May 2023 - Sept. 2024",
      tech: "Python, Pandas",
      description: [
        "Analyzed index funds using Python's Pandas library to uncover trading patterns and correlations",
        "Delivered actionable insights from complex data analysis, enabling clients to make informed trading decisions",
        "Developed automated data processing pipelines to streamline analysis workflows"
      ]
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Experience</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-blue-400 transform -translate-x-1/2"></div>
        
        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -ml-2 md:-ml-3 mt-3 w-4 h-4 bg-blue-400 rounded-full transform -translate-x-1/2 z-10"></div>
              
              {/* Content */}
              <div className={`ml-6 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                <div className="bg-gray-800/80 p-6 rounded-lg shadow-lg border border-gray-700/50">
                  <h3 className="text-xl font-semibold text-gray-100">{experience.title}</h3>
                  <p className="text-blue-400 font-medium mb-1">{experience.company}</p>
                  <p className="text-gray-400 text-sm mb-2">{experience.duration}</p>
                  <p className="text-blue-300/80 text-sm mb-3">{experience.tech}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
