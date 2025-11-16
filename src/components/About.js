import React from "react";
import transistorImg from "../assets/images/Transistor-800x540.jpg";

export default function About() {
  return (
    <section id="about" className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-green-900/20"></div> */}
        {/* <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div> */}
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-wrap items-center">
          {/* Content Side */}
          <div className="lg:w-3/5 md:w-1/2 w-full lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* Hero Section */}
            <div className="mb-8">
              <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </div>
              <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">Mohd Anas</span>
                <br />
                <span className="text-gray-300">Full-Stack Engineer</span>
              </h1>
              <h3 className="title-font text-xl mb-6 font-medium text-gray-300 leading-relaxed">
                I design and build reliable, scalable, and user-focused web solutions.
              </h3>
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4">
              <p className="text-gray-400 leading-relaxed text-lg">
                I'm an experienced full-stack engineer with a strong foundation in designing 
                and developing end-to-end web applications. I specialize in modern frontend 
                technologies like <span className="text-green-400 font-semibold">React</span>, 
                <span className="text-green-400 font-semibold"> TypeScript</span>, and 
                <span className="text-green-400 font-semibold"> Redux</span>.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Combined with enterprise-grade backend systems built with 
                <span className="text-green-400 font-semibold"> Java</span>, 
                <span className="text-green-400 font-semibold"> Quarkus</span>, and 
                <span className="text-green-400 font-semibold"> RESTful APIs</span>, 
                I deliver high-performance, scalable solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Recently exploring microservices, event-driven architectures, and cloud-native deployments.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 w-full max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">3+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400 text-sm">Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-600 hover:from-green-700 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Work With Me</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 font-medium py-4 px-8 rounded-lg transition-all duration-300"
              >
                See My Past Work
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-2/5 md:w-1/2 w-full flex justify-center">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-green-500 blur opacity-10"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-gray-800 rounded-2xl p-1 shadow-2xl">
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <img
                    className="object-cover object-center w-full h-96"
                    alt="Mohd Anas - Full Stack Engineer"
                    src={transistorImg}
                  />
                  
                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm font-medium">Available for hire</span>
                      </div>
                      <p className="text-gray-300 text-sm">Based in India, Working Remotely</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-3 rounded-xl shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-3 rounded-xl shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Skills Preview */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Java', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Git'].map((tech) => (
              <span 
                key={tech}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}