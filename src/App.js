import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/signin' exact component={SigninPage}/>
      </Switch>
    </Router>
  );
}

export default App;
