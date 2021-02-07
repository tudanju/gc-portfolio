import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          bio,
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
    <main className="relative">
      <Navbar textBlack={true} />
      {/* Background img */}
      {/* <img src="" alt="" /> */}
      <div className="p-10 pt-20 lg:pt-48 container mx-auto relative">
        <section className="bg-blue-800 rounded shadow-2xl lg:flex p-20">
          <img
            src={author.authorImage}
            alt={author.name}
            className="rounded w-32 h032 lg:w-64 lg:h-64 mr-8"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="heading-font text-6xl text-blue-200 mb-4">
              My name's <span className="text-blue-100">Gabriel</span>. Welcome!
            </h1>
            <div className="lg:text-xl body-font text-white">
              <BlockContent
                blocks={author.bio}
                projectId="a4405e53"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
