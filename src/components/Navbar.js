import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  const navClasses = `inline-flex body-font md:text-2xl xl:text-base items-center px-3 py-4`;

  const iconSize = 30;

  return (
    <header className="bg-yellow-200 xl:bg-opacity-0 z-10 w-full absolute top-0 left-0">
      <div className="container mx-auto w-full flex justify-between">
        <nav className="flex lg:px-20">
          {/* Nav Links */}
          <NavLink
            to="/"
            exact
            activeClassName="font-bold"
            className={navClasses}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            exact
            activeClassName="font-bold"
            className={navClasses}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            exact
            activeClassName="font-bold"
            className={navClasses}
          >
            Projects
          </NavLink>
        </nav>
        {/* Socials */}
        <div className="inline-flex py-3 px-3 md:px-24 md:py-3 xl:py-3 xl:px-3 xl:my-3">
          <SocialIcon
            url="https://www.linkedin.com/in/gabriel-ciechan/"
            className="mr-3"
            target="_blank"
            fgColor="#fff"
            bgColor="#3B82F6"
            style={{ height: iconSize, width: iconSize }}
          />
          <SocialIcon
            url="https://github.com/tudanju"
            className="mr-3"
            target="_blank"
            fgColor="#fff"
            bgColor="#3B82F6"
            style={{ height: iconSize, width: iconSize }}
          />
          <SocialIcon
            url="https://twitter.com/Gabrielciechan"
            target="_blank"
            fgColor="#fff"
            bgColor="#3B82F6"
            style={{ height: iconSize, width: iconSize }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
