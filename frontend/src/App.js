import React from 'react';
import './App.css';

// IMPORT COMPONENTS
import Nav from './Components/Nav';
import Home from './Components/Home';
import Classes from './Components/Classes';
import Login from './Components/Login';
import ClassInfo from './Components/ClassInfo';
import Footer from './Components/Footer';
import Edit from './Components/Edit'

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
          <Route path="/classes/edit" component={Edit} />
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
