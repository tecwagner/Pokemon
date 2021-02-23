import React from 'react'
import './styled.css'
// import Search from '../component/search'

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
    <AppBar position="relative">
        <Toolbar className='header'>
            <Typography className='title' variant="h6" color="inherit" noWrap>
                Pokemon
            </Typography>
            {/* <Typography className='search-header'>
                < Search />
            </Typography> */}
        </Toolbar>

    </AppBar>
)

export default Header