// React
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Alert from './Layouts/Alert';
import Navbar from './Layouts/Navbar';
import User from './users/User';
import About from './pages/About';
import GithubState from '../context/github/GithubState';
import AlertState from '../context/alert/AlertState';
import Home from './pages/Home';
import NotFound from './pages/NotFound'

// Style
import '../assets/css/App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
