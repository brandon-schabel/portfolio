import React, { Component } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Portfolio from './components/PortfolioView/Portfolio'
import AboutMe from './components/AboutMe';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
    
  // const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  // <img src={images['doggy.png']} />
  
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Portfolio></Portfolio>
        <AboutMe></AboutMe>
      </div>
    );
  }
}

export default App;
