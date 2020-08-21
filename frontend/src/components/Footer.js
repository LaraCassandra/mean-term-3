import React from 'react'
import '../Css/Footer.css';

// MATERIAL UI
import { Paper } from '@material-ui/core';


export const Footer = () => {
    return (
        <Paper elevation={1}>
            <div className="footer">
                <p>Copyright © Summerville High School. All rights reserved.</p>
            </div>
        </Paper >
    )
}

export default Footer;