import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Web Editor",
      tech: "Node.js, React, Claude SDK, Web Containers",
      description: "Full-stack application integrating GPT and Claude SDK for AI-assisted web development. Reduced deployment complexity by 40% using Web Containers.",
      github: "#"
    },
    {
      title: "Crime Analysis & Visualization Platform",
      tech: "Python, Pandas, MySQL, Java",
      description: "Data visualization platform processing 10+ years of crime data for analytical insights with automated ETL pipelines.",
      github: "#"
    },
    {
      title: "Online Food Ordering Platform",
      tech: "JavaScript, Next.js, SQLite, Tailwind",
      description: "Collaborative food ordering platform with streamlined dish discovery and enhanced user convenience.",
      github: "#"
    },
    {
      title: "AWS-Based Deployment Platform",
      tech: "TypeScript, Node.js, Express, Redis, AWS SDK",
      description: "Vercel-inspired deployment platform handling React website deployments with optimized performance using AWS S3 and Redis queues.",
      github: "#"
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/80 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-200 border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-2 text-gray-100">{project.title}</h3>
            <p className="text-sm text-blue-400 mb-3">{project.tech}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a 
              href={project.github}
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;