import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LaunchPage extends Component {
  render() {
    return (
      <div className="launch-page" id="particles-js">
        <div className="launch-page__name">
          <span className="name__letter">V</span>
          <span className="name__letter">i</span>
          <span className="name__letter">k</span>
          <span className="name__letter">r</span>
          <span className="name__letter">a</span>
          <span className="name__letter">m</span>
          &nbsp;&nbsp;
          <span className="name__letter--lname">B</span>
          <span className="name__letter--lname">e</span>
          <span className="name__letter--lname">l</span>
          {/* <span className='name lName'>d</span> 
              <span className='name lName'>e</span>   */}
        </div>
        <div className="launch-page__links">
          <Link to="/blog">
            <span className="launch-page__link">Blog</span>
          </Link>
          {/* <span className='launch-page__link--seperator'>|</span> */}
          <Link to="/projects">
            <span className="launch-page__link">Projects</span>
          </Link>
          {/* <span className='launch-page__link--seperator'>|</span> */}
          {/* <a href='https://itunes.apple.com/us/developer/vikram-belde/id1164307305' className='launch-page__link'>Apps</a> */}
          {/* <span className='launch-page__link--seperator'>|</span> */}
          <a
            href="https://www.linkedin.com/in/vikrambelde/"
            target="_blank"
            className="launch-page__link"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          {/* <span className='launch-page__link--seperator'>|</span> */}
          <a
            href="https://github.com/symmetriccurve"
            target="_blank"
            className="launch-page__link"
            rel="noreferrer"
          >
            Code
          </a>
          {/* <span className='launch-page__link--seperator'>|</span> */}
          <Link to="/my-interview">
            <span className="launch-page__link">My interview</span>
          </Link>
          <Link to="/contact">
            <span className="launch-page__link">Contact</span>
          </Link>
        </div>
        <div className="launch-page__bottom__links">
          <a
            href="https://github.com/symmetriccurve/portfolio-2.0"
            target="_blank"
            className="bottom__links__link"
            rel="noreferrer"
          >
            This portfolio is open source
          </a>
        </div>
      </div>
    );
  }
}
