import { CodeBracketIcon } from "@heroicons/react/20/solid";
import React from "react";
import { projects } from "../data";
import { useProjectByUsername, useProjectByUsernameAndRepo } from "./hooks/github";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = React.useState(null);
  const userDataQuery = useProjectByUsername('anas16d');
  
  if(userDataQuery.isLoading) {
    return (
      <section className="bg-gray-900 py-20">
        <div className="container px-5 mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
          </div>
          <h1 className="sm:text-4xl text-3xl font-bold text-white mb-4">
            Loading Projects...
          </h1>
          <p className="text-gray-400">Fetching my latest work from GitHub</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="container px-5 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-600 p-3 rounded-full">
              <CodeBracketIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="sm:text-5xl text-4xl font-bold title-font mb-6 text-white">
            My Projects
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Here's a collection of projects I've worked on, showcasing my skills in full-stack development, 
            problem-solving, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userDataQuery?.data?.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Project Card */}
                <div className="p-6 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-indigo-300 transition-colors duration-300">
                        {project.name}
                      </h3>
                      {project.language && (
                        <span className="inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                          {project.language}
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      {project.stargazers_count > 0 && (
                        <div className="flex items-center text-gray-400 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {project.stargazers_count}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-400 leading-relaxed flex-grow mb-6">
                    {project.description || "No description available for this project."}
                  </p>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      {project.forks_count > 0 && (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {project.forks_count}
                        </span>
                      )}
                      <span>Updated {new Date(project.updated_at).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                    >
                      View Code
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-center"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-white text-xl font-semibold mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-gray-400 mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/anas16d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                GitHub Profile
              </a>
              <a
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-green-200 to-green-600 hover:from-green-700 hover:to-green-800  text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}