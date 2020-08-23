import React, { Component } from 'react';
// import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import './App.css';
import routes from './routes';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: []
    }
  }
  render() {
    return (
      <div>
       <Header/>
       {routes}


      </div>
    )
  }
}

export default App;
