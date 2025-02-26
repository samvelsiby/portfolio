import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Web Editor",
      tech: ["React", "TypeScript", "OpenAI"],
      description: "A modern web editor with AI capabilities for code completion and error detection.",
      github: "https://github.com/samvelsiby/AI-code-editor"
    },
    {
      title: "Crime Analysis Platform",
      tech: ["Python", "Django", "D3.js"],
      description: "Interactive platform for analyzing crime data with visualization tools.",
      github: "https://github.com/samvelsiby/crime-analysis-platform" 
    },
    {
      title: "Online Food Ordering Platform",
      tech: ["JavaScript", "Next.js", "SQLite", "Tailwind"],
      description: "Collaborative food ordering platform with streamlined dish discovery and enhanced user convenience.",
      github: "https://github.com/samvelsiby/online-food-ordering-platform"
    },
    {
      title: "AWS-Based Deployment Platform",
      tech: ["TypeScript", "Node.js", "Express", "Redis", "AWS SDK"],
      description: "Vercel-inspired deployment platform handling React website deployments with optimized performance using AWS S3 and Redis queues.",
      github: "https://github.com/samvelsiby/AWS-deployment"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group">
          <h3 className="text-xl mb-2 text-blue-400 font-mono">{project.title}</h3>
          <p className="text-gray-300 mb-4 font-mono">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-blue-300 font-mono">{tech}</span>
            ))}
          </div>
          <a href={project.github} className="text-blue-400 hover:text-blue-300 transition-colors duration-300 inline-flex items-center group font-mono">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;