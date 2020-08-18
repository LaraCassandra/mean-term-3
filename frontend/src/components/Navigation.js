import React from './node_modules/react'
import { AppBar, Button, Toolbar, makeStyles, Typography } from './node_modules/@material-ui/core'
import { red } from './node_modules/@material-ui/core/colors'


const useStyles = makeStyles((theme) => ({
    color: {
        backgroundColor: red,
    }
}))

export const Navigation = () => {
    const classes = useStyles();

    return (

        <div>

            <AppBar className={classes.color} color="primary">

                <Toolbar>

                    <Typography>Class Manager</Typography>

                </Toolbar>

            </AppBar>


        </div>

    )
}