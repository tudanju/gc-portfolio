import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const iconSize = 30;

const Navbar = ({ textBlack }) => {
  const navClasses = `inline-flex ${
    textBlack ? "" : "text-white "
  }body-font items-center px-3 py-4`;

  return (
    <header className="bg-opacity-0">
      <div className="container mx-auto flex justify-between">
        <nav className="flex absolute top-0 left-0 lg:left-20">
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
        <div className="inline-flex py-3 px-3 my-3 absolute top-0 right-0 lg:right-20">
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
