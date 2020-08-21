import React from 'react'
import '../Css/Home.css'
import HomeCard from './HomeCard'

// MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    gridContainer: {
        padding: "120px",
    }
})

export const Home = () => {

    const classes = useStyles();

    return (
        <div>
            <div className="header">
                <img className="header" src={require('../header.jpg')}
                    alt="logo" />
            </div>

            <div className={classes.gridContainer}>


                <Grid container spacing={5} >

                    <Grid item xs={12} sm={6} md={3}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <HomeCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <HomeCard />
                    </Grid>

                </Grid>

            </div>
        </div>
    )
}

export default Home