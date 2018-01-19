import React, {Component} from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Routes from './components/Routes';

//CSS
import 'bootstrap/dist/css/bootstrap.min.css'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Routes></Routes>
      </div>
    );
  }
}
  
export default App;
