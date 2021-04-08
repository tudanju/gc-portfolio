import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { AiOutlineMail } from "react-icons/ai";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import bgImage from "../ann-h-pencils-lg.jpg";

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          bio,
          email,
          "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="relative w-screen h-screen">
      <Navbar />
      {/* Background img */}
      <img
        src={bgImage}
        alt="Pencils"
        className="absolute object-cover min-w-full min-h-full mb-5 md:mb-0"
      />
      <div className="p-10 pt-20 lg:pt-48 container mx-auto relative">
        <section className="bg-blue-800 rounded shadow-2xl md:flex p-10 lg:p-20">
          <img
            src={author.authorImage}
            alt={author.name}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 md:mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="heading-font text-lg lg:text-6xl text-blue-200 mb-4">
              My name's <span className="text-yellow-100">Gabriel</span>.
              Welcome.
            </h1>
            <div className="text-sm lg:text-xl body-font text-white">
              <BlockContent
                blocks={author.bio}
                projectId="a4405e53"
                dataset="production"
              />
              <div className="hidden lg:block">
                <br />
                <p className="text-xs lg:text-base text-white">
                  <AiOutlineMail class="inline h-4 w-6 lg:h-6 lg:w-6" />{" "}
                  {author.email}
                </p>
              </div>
              <div className="underline"></div>
              <h4 className="text-base lg:text-2xl text-yellow-100">
                Technologies:
              </h4>
              <ul className="list-none text-sm lg:text-base">
                <li>HTML</li>
                <li>CSS - Flexbox, CSS Grid, Tailwind</li>
                <li>Javascript - React</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-blue-800 rounded shadow-2xl lg:flex p-10 mt-10 lg:hidden">
          <p className="text-xs lg:text-base text-white">
            <AiOutlineMail className="inline h-4 w-6 lg:h-6 lg:w-6" />{" "}
            {author.email}
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
