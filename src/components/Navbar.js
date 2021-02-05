import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const iconSize = 30;
const navClasses = "inline-flex body-font items-center px-3 py-4 text-base";

const Navbar = () => {
  return (
    <header className="bg-opacity-0">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
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
            to="/projects"
            exact
            activeClassName="font-bold"
            className={navClasses}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            exact
            activeClassName="font-bold"
            className={navClasses}
          >
            About
          </NavLink>
        </nav>
        {/* Socials */}
        <div className="inline-flex py-3 px-3 my-3">
          <SocialIcon
            url="https://www.linkedin.com/in/gabriel-ciechan/"
            className="mr-3"
            target="_blank"
            // fgColor='#fff'
            style={{ height: iconSize, width: iconSize }}
          />
          <SocialIcon
            url="https://github.com/tudanju"
            className="mr-3"
            target="_blank"
            // fgColor='#fff'
            style={{ height: iconSize, width: iconSize }}
          />
          <SocialIcon
            url="https://twitter.com/Gabrielciechan"
            className="mr-3"
            target="_blank"
            // fgColor='#fff'
            style={{ height: iconSize, width: iconSize }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
