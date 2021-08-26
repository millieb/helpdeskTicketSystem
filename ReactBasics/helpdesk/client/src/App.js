import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from '../src/components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Register from "./components/Register";
import Login from './components/Login';
import CreateTicket from './components/createTicket';
import Profile from './components/profile';

function App() {
  return (<Router>
    <div className="App">
      <Navbar />

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/createTicket" component={CreateTicket} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
