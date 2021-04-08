import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import sanityClient from "../client";
import bgImage from "../adrien-olichon-white-circles.jpg";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      description,
      projectType,
      link
    }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  if (!projects) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="relative bg-gray-100 w-screen h-screen">
      <Navbar />
      {/* Background img */}
      <img
        src={bgImage}
        alt="Cobweb"
        className="absolute object-cover w-full h-full"
      />
      <section className="container mx-auto pt-28">
        <h1 className="text-5xl flex justify-center heading-font">
          My Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my Projects Page
        </h2>
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {projects &&
            projects.map((project, index) => {
              return (
                <article
                  key={index}
                  className="relative rounded-lg shadow-xl bg-yellow-200 p-16"
                >
                  {/* Project title */}
                  <h3 className="text-gray-800 text-3xl font-bold heading-font mb-2 hover:text-blue-700">
                    <a
                      href={project.link}
                      alt={project.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  {/* Project details */}
                  <div className="text-gray-600 text-s body-font flex flex-col">
                    {/* Date */}
                    <span>{new Date(project.date).toLocaleDateString()}</span>
                    {/* Project Type */}
                    <span>
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                    </span>
                    {/* Description */}
                    <p className="mt-1 mb-6 text-base text-gray-800 leading-relaxed">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      alt="Link to the project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-bold hover:text-blue-400 text-xl"
                    >
                      View the project
                    </a>
                  </div>
                </article>
              );
            })}
        </section>
      </section>
    </main>
  );
};

export default Projects;
