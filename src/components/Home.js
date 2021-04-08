import bgImage from "../ann-h-pencils-lg.jpg";
import Navbar from "./Navbar";

const Home = () => {
  const headingClass =
    "text-2xl lg:text-8xl text-blue-100 heading-font font-bold leading-none lg:leading-snug";

  return (
    <main className="flex justify-center h-screen">
      <img
        src={bgImage}
        alt="Pencils"
        className="absolute object-cover w-full h-full"
      />
      <Navbar />
      <section className="relative flex flex-col items-start lg:min-h-screen pt-72 lg:pt-12 lg:pt-64 px-8">
        <h1 className={headingClass}>Hello.</h1>
        <h1 className={headingClass}>I'm Gabriel.</h1>
        <h1 className={headingClass}>A Web Developer.</h1>
      </section>
    </main>
  );
};

export default Home;
