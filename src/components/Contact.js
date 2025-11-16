
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gray-900 py-20">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white sm:text-5xl text-4xl mb-4 font-bold title-font">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to bring your ideas to life? Drop me a message and let's discuss how we can collaborate.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-8">
          {/* Contact Info Card */}
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700">
              <h3 className="text-white text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:mohdanas1612@gmail.com"
                  className="flex items-center p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span className="font-medium">Email Me</span>
                </a>

                <div className="flex items-center p-4 bg-gray-700 text-gray-300 rounded-lg">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Remote • Available Worldwide</span>
                </div>

                <div className="flex items-center p-4 bg-gray-700 text-gray-300 rounded-lg">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  <span>Response within 24hrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:w-1/2 md:w-1/2 w-full">
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700">
              <form name="contact" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            Prefer a quick chat? 
            <a 
              href="mailto:mohdanas1612@gmail.com" 
              className="text-indigo-400 hover:text-indigo-300 font-medium ml-1 transition-colors duration-200"
            >
              Send me an email directly
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
