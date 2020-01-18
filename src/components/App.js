import React, { Component } from 'react';
import Navbar from './Layouts/Navbar';
import Users from './users/Users'
import '../assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
