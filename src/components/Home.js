import bgImage from "../elite_anemone.jpg";
import Navbar from "./Navbar";

const Home = () => {
  const headingClass =
    "text-8xl text-blue-100 heading-font font-bold leading-none lg:leading-snug";

  return (
    <main className="flex justify-center">
      <img
        src={bgImage}
        alt="Picture of space"
        className="absolute object-cover w-full h-full"
      />
      <Navbar />
      <section className="relative flex flex-col items-start min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className={headingClass}>Hello.</h1>
        <h1 className={headingClass}>I'm Gabriel</h1>
      </section>
    </main>
  );
};

export default Home;
