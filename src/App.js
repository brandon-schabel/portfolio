import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Portfolio from './components/PortfolioView/Portfolio';
import AboutMe from './components/AboutMe';
import Home from './components/Home';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {

  // const images = importAll(require.context('./images', false,
  // /\.(png|jpe?g|svg)$/)); <img src={images['doggy.png']} />

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default navbar-static-top">
          <ul className="nav nav-justified">
            <center>
              <li>
                <Link to="/home">
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
            </center>
          </ul>
        </nav>

        <Route path="/home" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    );
  }
}

export default App;
