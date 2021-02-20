import React from 'react'
import './styled.css'

import Typography from '@material-ui/core/Typography';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Footer = () => (

    <footer className='footer'>
        <Copyright />
    </footer>

)

export default Footer