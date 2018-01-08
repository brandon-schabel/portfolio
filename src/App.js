import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';

// Components import Header from './components/Header';
import Portfolio from './components/PortfolioView/Portfolio';
import AboutMe from './components/AboutMe';
import Home from './components/Home';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div class="container-fluid">
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

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={AboutMe}/>
        <Route path="/portfolio" component={Portfolio}/>
      </div>
    );
  }
}

export default App;
