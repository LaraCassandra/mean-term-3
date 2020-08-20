import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { makeStyles, AppBar, Toolbar, Button } from "@material-ui/core"

import Home from './Components/Home';
import Login from './Components/Login';
import Classes from "./Components/Classes"

const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: "0",
  },
  grow: {
    flex: 1,
  },
}));

function App() {

  const classes = useStyles();

  return (
    <Router>
      <div>
        <AppBar className={classes.navbar} position="static" color="primary">
          <Toolbar>

            <li>
              <Button>
                <Link to="/">Home</Link>
              </Button>
            </li>

            <Button>
              <li>
                <Link to="/classes">Classes</Link>
              </li>
            </Button>

            <div className={classes.grow} />

            <li>
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            </li>

          </Toolbar>

        </AppBar>

        <Switch>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/classes">
            <Classes />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
