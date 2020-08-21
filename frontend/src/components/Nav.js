import React from 'react';
import '../App.css';

// REACT ROUTER DOM 
import { Link } from 'react-router-dom';

// MATERIAL UI
import { makeStyles, AppBar, Toolbar, Button, Paper } from '@material-ui/core';

// STYLING 
const useStyles = makeStyles((theme) => ({
    grow: {
        flex: 1,
    },
    nav: {
        background: "linear-gradient(to right, red, orange)",
    },
}));


function Nav() {

    const classes = useStyles();

    return (
        <AppBar position="static" >
            <Paper className={classes.nav} elevation={1}>

                <Toolbar>
                    <Button className={classes.button}>
                        <Link to="/">Home</Link>
                    </Button>
                    <Button>
                        <Link to="/classes">Classes</Link>
                    </Button>

                    <div className={classes.grow}></div>

                    <Button>
                        <Link to="/login">Login</Link>
                    </Button>
                </Toolbar>
            </Paper>
        </AppBar>
    )
}

export default Nav;