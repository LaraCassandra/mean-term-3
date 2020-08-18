import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation.js'
import { Home } from './components/Home.js'
import Login from './Components/Login'

function App() {
  return (
    <Router>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </nav>

      <Switch>
        <Route path="/about">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
