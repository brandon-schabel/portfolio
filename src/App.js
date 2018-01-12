import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';

// Components import Header from './components/Header';
import Portfolio from './components/PortfolioView/Portfolio';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Header from './components/Header';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className='app-body'>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={AboutMe}/>
          <Route path="/portfolio" component={Portfolio}/>
        </div>
      </div>
    );
  }
}

export default App;
