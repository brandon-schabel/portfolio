import React, {Component} from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Routes from './components/Routes';


//import bootstrap from 'bootstrap'
//CSS
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import 'bootstrap/dist/css/bootstrap-theme.css';
//import 'mdbootstrap/css/mdb.min.css'

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
