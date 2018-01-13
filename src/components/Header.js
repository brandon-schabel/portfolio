import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                  <div className="container-fluid">
                    <ul className="nav navbar-nav" >
                        <li>
                          <Link to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/about">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link to="/resume">
                            Resume
                          </Link>
                        </li>
                        <li>
                          <Link to="/portfolio">
                            Portfolio
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