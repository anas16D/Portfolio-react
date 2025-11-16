import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/20/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="container px-5 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-600 p-3 rounded-full">
              <CpuChipIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="sm:text-5xl text-4xl font-bold title-font text-white mb-6">
            Skills &amp; Technologies
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
            From frontend frameworks to backend systems, I'm equipped to handle full-stack development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group bg-gray-800 hover:bg-gray-700 rounded-xl p-6 h-full border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-green-500 group-hover:bg-indigo-500 p-2 rounded-lg transition-colors duration-300">
                      <CheckBadgeIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-white font-semibold text-lg group-hover:text-indigo-300 transition-colors duration-300">
                      {skill}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4">
              Ready to work together?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how these skills can bring value to your next project.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}