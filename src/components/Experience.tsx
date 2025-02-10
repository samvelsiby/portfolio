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
    <div className="space-y-6">
      {/* Experience Items */}
      {experiences.map((experience, index) => (
        <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl text-blue-400 font-mono">{experience.title}</h3>
            <span className="text-gray-400 text-sm">{experience.duration}</span>
          </div>
          <h4 className="text-gray-300 mb-4">{experience.company}</h4>
          <p className="text-blue-300/80 text-sm mb-3 font-mono">{experience.tech}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {experience.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
