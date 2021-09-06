import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <NavLink to="/">
          <div className="header__logo">
            <div className="logo__name">Vikram</div>
            &nbsp;
            <div className="logo__name--last">Bel</div>
          </div>
        </NavLink>
      </div>
      <div className="header__right">
        <div className="header__links">
          <NavLink
            to="/blog"
            className="links__link"
            activeClassName="links__link--active links__link"
          >
            Blog
          </NavLink>
          <span className="links__link--seperator">|</span>
          <NavLink
            exact
            to="/projects"
            className="links__link"
            activeClassName="links__link--active links__link"
          >
            Projects
          </NavLink>
          <span className="links__link--seperator">|</span>
          <a
            href="https://github.com/symmetriccurve/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="links__link">Code</span>
          </a>
          <span className="links__link--seperator">|</span>
          <NavLink
            exact
            to="/my-interview"
            className="links__link"
            activeClassName="links__link--active links__link"
          >
            My Interview
          </NavLink>
          <span className="links__link--seperator">|</span>
          <NavLink
            exact
            to="/contact"
            className="links__link"
            activeClassName="links__link--active links__link"
          >
            Contact
          </NavLink>
          {/* <span className="links__link--seperator">|</span>
					<a href="https://www.linkedin.com/in/vikrambelde/">
						<span className="links__link">LinkedIn</span>
					</a>	 */}
        </div>
      </div>
    </div>
  );
};
export default Header;
