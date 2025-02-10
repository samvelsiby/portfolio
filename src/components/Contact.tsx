import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Contact Me</h2>
      <div className="bg-gray-800/80 rounded-lg shadow-lg p-6 border border-gray-700/50">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:ring-blue-400 focus:border-blue-400"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Your message..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>

          <div className="mt-6 text-center">
            <p className="text-gray-400">Or reach me directly at:</p>
            <a href="mailto:contact@samvelsiby.com" className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block">
              contact@samvelsiby.com
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;