import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Button, SwipeableDrawer, List, ListItem, Typography, Switch } from '@material-ui/core'

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import PersonIcon from '@material-ui/icons/Person';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Brightness4Icon from '@material-ui/icons/Brightness4';

// logo
import Logo from '../Assets/Background/logo.png';


const useStyles = makeStyles({
    rootDark: {
        backgroundColor: '#242424',
    },

    rootLight: {
        backgroundColor: '#fcfcfc',
    },

    wrapper: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 'auto',

        '@media (max-width: 600px)': {
            width: '80%',
        },
    },

    logoWrapper: {
        display: 'flex',
        alignItems: 'center',
    },

    logo: {
        width: '2.5rem'
    },

    logoTextDark: {
        marginLeft: '.5rem',
        color: '#fcfcfc',
    },

    logoTextLight: {
        marginLeft: '.5rem',
        color: '#151515',
    },

    desktopTabWrapper: {

        '@media (max-width: 1024px)': {
            display: 'none',
        },


        '@media (min-width: 1025px)': {
            display: 'block',
        },
    },

    mobileTabWrapper: {

        '@media (max-width: 1024px)': {
            display: 'block',
        },


        '@media (min-width: 1025px)': {
            display: 'none',
        },
    },
    userWrapper: {
        '@media (max-width: 1024px)': {
            display: 'none',
        },


        '@media (min-width: 1025px)': {
            display: 'block',
        },
    },

    buttonDark: {
        textTransform: 'none',
        color: '#fcfcfc',
        letterSpacing: '1.5px',
        border: 'none',
        margin: '0 1rem',

        '&:hover': {
            backgroundColor: '#fcfcfc',
            color: '#151515',
            transition: 'all .3s ease-in-out',
        },
    },


    buttonLight: {
        textTransform: 'none',
        color: '#151515',
        letterSpacing: '1.5px',
        border: 'none',
        margin: '0 1rem',

        '&:hover': {
            backgroundColor: '#009E81',
            color: '#fcfcfc',
            transition: 'all .3s ease-in-out',
        },
    },

    mobileButton: {
        width: '100%',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: '#fcfcfc',
        letterSpacing: '1.5px',
        border: 'none',
        margin: '0',

        '&:hover': {
            backgroundColor: '#fcfcfc',
            color: '#151515',
            transition: 'all .3s ease-in-out',
        },
    },

    mobileMenuDark: {
        fontSize: '2rem',
        color: '#fcfcfc'
    },

    mobileMenuLight: {
        fontSize: '2rem', color: '#151515'
    },
    paperDark: {
        width: 290,
        backgroundColor: '#151515',
        borderRadius: '2rem 0 0 2rem',
    },

    paperLight: {
        width: 290,
        backgroundColor: '#f39f30',
        borderRadius: '2rem 0 0 2rem',
    },

    switchContainer: {
        display: 'flex',
        alignItems: 'center',

        '@media (max-width: 1025px)': {
            display: 'none',
        },
    },

    switchMobileContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    switch_base: {
        color: "#009E81",
        "&.Mui-checked": {
            color: "#009E81"
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#4CAF50",
        }
    },

    switch_primary: {
        "&.Mui-checked": {
            color: "#4CAF50",
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#4CAF50",
        },
    },

    switchIconsDark: {
        fontSize: '1.5rem',
        color: '#151515',
    },

    switchIconsLight: {
        fontSize: '1.5rem',
        color: '#fcfcfc',
    },

});

export default function NavBar({ setNightMode, nightMode }) {
    const classes = useStyles();

    const [drawer, setDrawer] = useState(false);
    const [switchButton, setSwitchButton] = useState(false);

    const drawerHandler = () => {
        setDrawer(!drawer);
    };

    const switchHandler = () => {
        setSwitchButton(!switchButton);
        setNightMode(!nightMode);
    };

    return (
        <AppBar className={nightMode ? classes.rootDark : classes.rootLight} elevation={1}>

            <Toolbar className={classes.wrapper}>

                <IconButton className={classes.logoWrapper}>
                    <img className={classes.logo} src={Logo} alt='Company' />
                    <Typography variant='h6' className={nightMode ? classes.logoTextDark : classes.logoTextLight}>
                        People
                    </Typography>
                </IconButton>

                <div className={classes.desktopTabWrapper}>
                    <Button
                        className={nightMode ? classes.buttonDark : classes.buttonLight}
                        variant='outlined'>
                        About Us
                    </Button>
                    <Button
                        className={nightMode ? classes.buttonDark : classes.buttonLight}
                        variant='outlined'>
                        Mentors
                    </Button>
                    <Button
                        className={nightMode ? classes.buttonDark : classes.buttonLight}
                        variant='outlined'>
                        Become a Mentor
                    </Button>
                </div>

                {/* <div className={classes.userWrapper}>
                    <IconButton>
                        <PersonIcon style={{ fontSize: '2rem', color: '#fcfcfc' }} />
                    </IconButton>
                </div> */}

                <div className={classes.mobileTabWrapper}>
                    <IconButton onClick={drawerHandler}>
                        <MenuIcon className={nightMode ? classes.mobileMenuDark : classes.mobileMenuLight} />
                    </IconButton>
                </div>

                <div className={classes.switchContainer}>
                    <NightsStayIcon
                        className={nightMode ? classes.switchIconsLight : classes.switchIconsDark}
                    />
                    <Switch
                        classes={{
                            switchBase: classes.switch_base,
                            colorPrimary: classes.switch_primary,
                        }}
                        size='medium'
                        onChange={switchHandler}
                    />

                    <Brightness4Icon
                        className={nightMode ? classes.switchIconsLight : classes.switchIconsDark}
                    />
                </div>

                <SwipeableDrawer
                    anchor='right'
                    open={drawer}
                    onClose={drawerHandler}
                    onOpen={drawerHandler}
                    classes={nightMode ? { paper: classes.paperDark } : { paper: classes.paperLight }}
                >
                    <List >
                        <ListItem style={{ justifyContent: 'flex-end' }}>

                            <IconButton onClick={drawerHandler}>
                                <CloseIcon className={nightMode ? classes.mobileMenuLight : classes.mobileMenuDark} />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <Button className={classes.mobileButton} variant='outlined' onClick={drawerHandler}>About Us</Button>
                        </ListItem>
                        <ListItem>
                            <Button className={classes.mobileButton} variant='outlined' onClick={drawerHandler}>Mentors</Button>
                        </ListItem>
                        <ListItem>
                            <Button className={classes.mobileButton} variant='outlined' onClick={drawerHandler}>Become a Mentor</Button>
                        </ListItem>
                        <ListItem>
                            <div className={classes.switchMobileContainer}>
                                <NightsStayIcon
                                    className={nightMode ? classes.switchIconsLight : classes.switchIconsDark}
                                />
                                <Switch
                                    classes={{
                                        switchBase: classes.switch_base,
                                        colorPrimary: classes.switch_primary,
                                    }}
                                    size='medium'
                                    onChange={switchHandler}
                                />

                                <Brightness4Icon
                                    className={nightMode ? classes.switchIconsLight : classes.switchIconsDark}
                                />
                            </div>
                        </ListItem>
                    </List>
                </SwipeableDrawer>

            </Toolbar>

        </AppBar>
    )
}
