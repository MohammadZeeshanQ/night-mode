import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

// CSS
import '../../Styles/detail.css'

// Image
import Mentor from '../../Assets/Background/Mentor.png';
import MessageIcon from '../../Assets/Background/chat.png';
import ContactIcon from '../../Assets/Background/chatting.png';


const useStyles = makeStyles({
    rootDark: {
        backgroundColor: '#242424',
        padding: '6rem 0',

        '@media(max-width: 600px)': {

        },

        '@media(min-width: 601px) and (max-width: 1025px)': {

        },
    },

    rootLight: {
        backgroundColor: '#fcfcfc',
        padding: '6rem 0',
    },

    wrapperDark: {
        width: '80%',
        margin: 'auto',
        padding: '4rem 0',
        borderRadius: '2rem',
        backgroundColor: '#131313',

        '@media(max-width: 600px)': {
            width: '90%',
        },

        '@media(min-width: 601px) and (max-width: 1025px)': {
            width: '90%',
        },
    },

    wrapperLight: {
        width: '80%',
        margin: 'auto',
        padding: '4rem 0',
        borderRadius: '2rem',
        backgroundColor: '#DFF6F2',

        '@media(max-width: 600px)': {
            width: '90%',
        },

        '@media(min-width: 601px) and (max-width: 1025px)': {
            width: '90%',
        },
    },

    imageContainer: {
        padding: '2rem',
        textAlign: 'center',
    },

    image: {
        width: '90%',
        height: '100%',
        objectFit: 'cover',
    },

    textContainer: {
    },

    headerDark: {
        color: '#fcfcfc',
        fontSize: '2.4rem',
        letterSpacing: '2px',
        fontFamily: 'Mont-B'
    },

    headerLight: {
        color: '#FE9F30',
        fontSize: '2.4rem',
        letterSpacing: '2px',
        fontFamily: 'Mont-B'
    },

    descriptionDark: {
        color: '#8D8D8D',
        fontFamily: 'Mont-R',
        letterSpacing: '1px',
        marginTop: '1rem',
    },

    descriptionLight: {
        color: '#151515',
        fontFamily: 'Mont-R',
        letterSpacing: '1px',
        marginTop: '1rem',
    },

    boxContainer: {
        margin: '4rem 0 2rem 0',
    },

    iconMain: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },

    textWrapper: {
        marginLeft: '2rem',
    },

    textLabelDark: {
        color: '#fcfcfc',
        fontFamily: 'Mont-B',
        letterSpacing: '1px',
        fontSize: '1.1rem',
    },

    textLabelLight: {
        color: '#272727',
        fontFamily: 'Mont-B',
        letterSpacing: '1px',
        fontSize: '1.1rem',
    },


    textCaptionDark: {
        color: '#fcfcfc',
        marginTop: '1rem',
        fontFamily: 'Mont-L',
        letterSpacing: '1px',
    },

    textCaptionLight: {
        color: '#333333',
        marginTop: '1rem',
        fontFamily: 'Mont-L',
        letterSpacing: '1px',
    },

});


export default function Details({ nightMode }) {

    const classes = useStyles();

    return (
        <div className={nightMode ? classes.rootDark : classes.rootLight}>
            <div className={nightMode ? classes.wrapperDark : classes.wrapperLight}>

                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                        sm={5}
                        md={5}
                        className={classes.imageContainer}
                    >
                        <img src={Mentor} className={classes.image} alt='Be a Mentor' />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={7}
                        md={7}
                        className={classes.texContainer}
                    >
                        <Typography variant='h2' className={nightMode ? classes.headerDark : classes.headerLight}>
                            Find Your Right Mentor
                        </Typography>

                        <Typography variant='body1' className={nightMode ? classes.descriptionDark : classes.descriptionLight}>
                            Learn from various availabe mentor on a monthly or yearly basis.
                        </Typography>


                        <div className={classes.boxContainer}>

                            <div className={nightMode ? 'boxWrapperDark' : 'boxWrapperLight'}>

                                <div className='boxIconWrapper'>
                                    <img src={MessageIcon} className={classes.iconMain} alt='Icons Message' />
                                </div>

                                <div className={classes.textWrapper}>
                                    <Typography variant='body1' className={nightMode ? classes.textLabelDark : classes.textLabelLight}>
                                        Ring or message your mentor anytime
                                    </Typography>
                                    <Typography variant='body2' className={nightMode ? classes.textCaptionDark : classes.textCaptionLight}>
                                        We have the right mentor to learn any skill you want to excel in. We aim to provide best to our customers.
                                    </Typography>

                                </div>

                            </div>


                            <div className={nightMode ? 'boxWrapperDark' : 'boxWrapperLight'}>

                                <div className='boxIconWrapper'>
                                    <img src={ContactIcon} className={classes.iconMain} alt='Icons Message' />
                                </div>

                                <div className={classes.textWrapper}>
                                    <Typography variant='body1' className={nightMode ? classes.textLabelDark : classes.textLabelLight}>
                                        Became a mentor and help out people
                                    </Typography>
                                    <Typography variant='body2' className={nightMode ? classes.textCaptionDark : classes.textCaptionLight}>
                                        We have the right mentor to learn any skill you want to excel in. We aim to provide best to our customers.
                                    </Typography>

                                </div>

                            </div>

                        </div>
                    </Grid>

                </Grid>

            </div>
        </div>
    )
}
