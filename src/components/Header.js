import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                    <ul className="nav nav-justified">
                        <center>
                            <li>
                                <a styles="text-decoration: none;" href="index.html" className="profileSubHeading">
                                    <b>Home</b>
                                </a>
                            </li>
                            <li>
                                <a styles="text-decoration: none;" href="aboutMe.html" className="profileSubHeading">
                                    <b>About</b>
                                </a>
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
                                <a
                                    styles="text-decoration: none;"
                                    href="portfolio.html"
                                    className="profileSubHeading">
                                    <b>Portfolio</b>
                                </a>
                            </li>
                        </center>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;