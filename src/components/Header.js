import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                  <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li>
                          <Link to="/">
                            <b>Home</b>
                          </Link>
                        </li>
                        <li>
                          <Link to="/about">
                            <b>About</b>
                          </Link>
                        </li>
                        <li>
                          <a
                            styles="text-decoration: none;"
                            href="./sourceFiles/Resume.pdf"
                            className="profileSubHeading">
                            <b>Resume</b>
                          </a>
                        </li>
                        <li>
                          <Link to="/portfolio">
                            <b>Portfolio</b>
                          </Link>
                        </li>
                    </ul>
                  </div>
                </nav>
            </div>
        );
    }
}

export default Header;