import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Grid } from '@material-ui/core'

// Background
import People from '../../Assets/Background/PeopleBg.png';

const useStyle = makeStyles({
    rootDark: {
        backgroundColor: '#151515',
        position: 'relative',
        overflow: 'hidden',
        zIndex: '0',
    },

    rootLight: {
        backgroundColor: '#fcfcfc',
        position: 'relative',
        overflow: 'hidden',
        zIndex: '0',
    },


    circle: {
        position: 'absolute',
        backgroundColor: '#FE9F30',
        opacity: '.2',
        top: '20%',
        right: '-10%',
        height: '700px',
        width: '700px',
        borderRadius: '50%',
        zIndex: '-5',

        '@media (max-width: 600px)': {
            top: '45%',
            right: '-60%',
            height: '600px',
            width: '600px',
        },

        '@media (min-width: 601px) and (max-width: 900px)': {
            top: '25%',
            right: '-20%',
            height: '500px',
            width: '500px',
        },
    },

    wrapper: {
        position: 'relative',
        zIndex: '2',
        width: '80%',
        margin: 'auto',
        padding: '4rem 0',

        '@media (max-width: 600px)': {
            width: '90%',
        },

        '@media (min-width: 601px) and (max-width: 1024px)': {
            width: '90%',
        },
    },

    textWrapper: {
        display: 'grid',
        placeItems: 'center',

        '@media (max-width: 600px)': {
            textAlign: 'center',
            padding: '3rem 0 5rem 0',
        },
    },

    headerDark: {
        fontSize: '3rem',
        color: '#FE9F30',
        letterSpacing: '2px',
        fontFamily: 'Mont-B',

        '@media (max-width: 600px)': {
            fontSize: '2.8rem',
            letterSpacing: '3px',
            lineHeight: '120%',
        },

        '@media (min-width: 601px) and (max-width: 1024px)': {
            fontSize: '1.7rem',
        },
    },

    headerLight: {
        fontSize: '3rem',
        color: '#FF8A01',
        letterSpacing: '2px',
        fontFamily: 'Mont-B',

        '@media (max-width: 600px)': {
            fontSize: '2.8rem',
            letterSpacing: '3px',
            lineHeight: '120%',
        },

        '@media (min-width: 601px) and (max-width: 1024px)': {
            fontSize: '1.7rem',
        },
    },


    descriptionDark: {
        color: '#A5A5A5',
        margin: '2rem 0',
        letterSpacing: '1px',
        lineHeight: '180%',
        fontFamily: 'Mont-R',
        width: '95%',

        '@media (max-width: 600px)': {
            textAlign: 'center',
            lineHeight: '190%',
            margin: '3rem 0',
            width: '100%',
        },

        '@media (min-width: 601px) and (max-width: 1024px)': {
            fontSize: '.75rem',
            lineHeight: '160%',
        },
    },

    descriptionLight: {
        color: '#565656',
        margin: '2rem 0',
        letterSpacing: '1px',
        lineHeight: '180%',
        fontFamily: 'Mont-R',
        width: '95%',

        '@media (max-width: 600px)': {
            textAlign: 'center',
            lineHeight: '190%',
            margin: '3rem 0',
            width: '100%',
        },

        '@media (min-width: 601px) and (max-width: 1024px)': {
            fontSize: '.75rem',
            lineHeight: '160%',
        },
    },

    button: {
        backgroundColor: '#009E81',
        color: '#fcfcfc',
        letterSpacing: '3px',
        padding: '.7rem 3rem',
        textTransform: 'none',
        fontFamily: 'Mont-S',

        '@media (min-width: 601px) and (max-width: 1024px)': {
            padding: '.5rem 2rem',
            fontSize: '.7rem',
        },
    },

    imageWrapper: {

    },

    image: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',

        '@media (max-width: 600px)': {
            objectFit: 'cover',
        },
    },

});



export default function Hero({ nightMode }) {
    const classes = useStyle();

    return (
        <div className={nightMode ? classes.rootDark : classes.rootLight}>

            <div className={classes.circle}></div>

            <div className={classes.wrapper}>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        className={classes.textWrapper}
                    >
                        <div >
                            <Typography variant='h1' className={nightMode ? classes.headerDark : classes.headerLight}>
                                Learn New Skills From A Mentor or Be A Mentor
                            </Typography>
                            <Typography variant='body1' className={nightMode ? classes.descriptionDark : classes.descriptionLight}>
                                Being a person with multiple skill sets makes provides you higher chances to get hired. Here in People we believe in growing and enhancing knowledge, problem solving and technniques.
                            </Typography>
                            <Button variant='contained' className={classes.button} href='/'>
                                Join Now!
                            </Button>
                        </div>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        className={classes.imageWrapper}
                    >
                        <img className={classes.image} src={People} alt='People Uni' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
