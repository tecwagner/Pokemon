import React from 'react'
import './styled.css'

import AppBar from '@material-ui/core/AppBar';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AndroidIcon from '@material-ui/icons/Android';
import PlaceIcon from '@material-ui/icons/Place';

const Header = () => (
    <AppBar position="static" color="default">
        <Tabs
            className='header'
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
        >
            <Tab label="Pokemon" icon={<AndroidIcon />} href='/' />
            <Tab label="Região" icon={<PlaceIcon />} href='/Regiao' />
        </Tabs>
    </AppBar>
)

export default Header