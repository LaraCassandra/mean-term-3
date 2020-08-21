import React from 'react';
import './App.css';

// IMPORT COMPONENTS
import Nav from './Components/Nav';
import Home from './Components/Home';
import Classes from './Components/Classes';
import Login from './Components/Login';
import ClassInfo from './Components/ClassInfo';

// REACT ROUTER DOM 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



function App() {

  return (
    <Router>
      <div>

        <Nav />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/classes" exact component={Classes} />
          <Route path="/classes/:id" component={ClassInfo} />
        </Switch>


      </div>
    </Router>
  );
}

export default App;
