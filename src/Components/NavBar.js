import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Button, SwipeableDrawer, List, ListItem, Typography } from '@material-ui/core'

// Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';

// logo
import Logo from '../Assets/Background/logo.png';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#151515',
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

        '@media (min-width: 601px) and (max-width: 1024px)': {
            width: '90%',
        },
    },

    logoWrapper: {
        display: 'flex',
        alignItems: 'center',
    },

    logo: {
        width: '2.5rem'
    },

    logoText: {
        marginLeft: '.5rem',
        color: '#fcfcfc',
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

    button: {
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

    paper: {
        width: 290,
        backgroundColor: '#151515',
        borderRadius: '2rem 0 0 2rem',
    },

});

export default function NavBar() {
    const classes = useStyles();

    const [drawer, setDrawer] = useState(false);

    const drawerHandler = () => {
        setDrawer(!drawer);
    };

    return (
        <AppBar className={classes.root} elevation={1}>

            <Toolbar className={classes.wrapper}>

                <IconButton className={classes.logoWrapper}>
                    <img className={classes.logo} src={Logo} alt='Company' />
                    <Typography variant='h6' className={classes.logoText}>
                        People
                    </Typography>
                </IconButton>

                <div className={classes.desktopTabWrapper}>
                    <Button className={classes.button} variant='outlined'>About Us</Button>
                    <Button className={classes.button} variant='outlined'>Mentors</Button>
                    <Button className={classes.button} variant='outlined'>Become a Mentor</Button>
                </div>

                <div className={classes.userWrapper}>
                    <IconButton>
                        <PersonIcon style={{ fontSize: '2rem', color: '#fcfcfc' }} />
                    </IconButton>
                </div>

                <div className={classes.mobileTabWrapper}>
                    <IconButton onClick={drawerHandler}>
                        <MenuIcon style={{ fontSize: '2rem', color: '#fcfcfc' }} />
                    </IconButton>
                </div>

                <SwipeableDrawer
                    anchor='right'
                    open={drawer}
                    onClose={drawerHandler}
                    onOpen={drawerHandler}
                    classes={{ paper: classes.paper }}
                >
                    <List >
                        <ListItem style={{ justifyContent: 'flex-end' }}>
                            <CloseIcon />
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
                    </List>
                </SwipeableDrawer>

            </Toolbar>

        </AppBar>
    )
}
