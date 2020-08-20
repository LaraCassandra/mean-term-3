import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Home from './Components/Home';
import Login from './Components/Login'

function App() {
  return (
    <Router>
      <div>

        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Home</Link>
          </li>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
