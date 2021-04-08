import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import sanityClient from "../client";
import bgImage from "../luis-gomes-code-blur.jpg";

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
      link,
      github
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
      <Navbar textWhite={true} />
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
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1 lg:gap-8 md:gap-6">
          {projects &&
            projects.map((project, index) => {
              return (
                <article
                  key={index}
                  className="relative rounded-lg shadow-xl bg-blue-800 p-16"
                >
                  {/* Project title */}
                  <h3 className="text-gray-100 text-lg lg:text-3xl font-bold heading-font mb-2 hover:text-yellow-100">
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
                  <div className="text-gray-100 text-s body-font flex flex-col">
                    {/* Date */}
                    {/* <span>{new Date(project.date).toLocaleDateString()}</span> */}
                    {/* Project Type */}
                    {/* <span>
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                    </span> */}
                    {/* Description */}
                    <p className="mt-1 mb-6 text-base leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex justify-between">
                      {/* project link */}
                      <a
                        href={project.link}
                        alt="Link to the project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-200 font-bold lg:text-xl hover:text-yellow-100"
                      >
                        View the project
                      </a>
                      {/* github link */}
                      <a
                        href={project.github}
                        alt="Link to code on github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-200 font-bold lg:text-xl hover:text-yellow-100"
                      >
                        View the Code
                      </a>
                    </div>
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
