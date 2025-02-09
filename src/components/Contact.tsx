import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Contact Me</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold mb-4">Other Ways to Connect</h3>
          <div className="space-y-3">
            <p className="flex items-center text-gray-600">
              <span className="mr-2">📧</span> Email: your.email@example.com
            </p>
            <p className="flex items-center text-gray-600">
              <span className="mr-2">💼</span> LinkedIn: linkedin.com/in/yourprofile
            </p>
            <p className="flex items-center text-gray-600">
              <span className="mr-2">🐱</span> GitHub: github.com/yourusername
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;