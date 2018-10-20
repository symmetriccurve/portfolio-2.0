import React from 'react';
import './launchPage.scss'
export default function() {
      return (
        <div className="App">
          <div className='main-cont'>
              <div className='row cen name-cont'>
                <span className="name">V</span> 
                <span className="name">i</span> 
                <span className="name">k</span>
                <span className="name">r</span> 
                <span className="name">a</span> 
                <span className="name">m</span>
                  &nbsp;&nbsp;
                <span className="name lName">B</span> 
                <span className="name lName">e</span> 
                <span className="name lName">l</span>
                {/* <span className="name lName">d</span> 
                <span className="name lName">e</span>   */}
              </div>
              <div className='cen links-cont'>
                <a href="#" className="link">Portfolio</a> 
                &nbsp;&nbsp; <span className='link-seperator'>| </span> &nbsp;&nbsp;
                <a href="#" className="link">Blog</a> 
                &nbsp;&nbsp; <span className='link-seperator'>| </span> &nbsp;&nbsp;
                <a href="#" className="link">Apps</a> 
                &nbsp;&nbsp; <span className='link-seperator'>| </span> &nbsp;&nbsp;
                <a href="#" className="link">LinkedIn</a>
                &nbsp;&nbsp; <span className='link-seperator'>| </span> &nbsp;&nbsp;
                <a href="#" className="link">Code</a>
              </div>
          </div> 
        </div>
      );
    }
