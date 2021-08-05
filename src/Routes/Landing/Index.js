import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Dialog, DialogContent, DialogActions, Typography, Button } from '@material-ui/core'

import HeroSection from './Hero.js'
import DetailSection from './/Details.js'


const useStyles = makeStyles({
    header: {
        textAlign: 'center',
        fontFamily: 'Mont-S',
        letterSpacing: '1px',
        lineHeight: '150%',
    },
})

export default function Index({ nightMode }) {

    const classes = useStyles();
    const [dialog, setDialog] = useState(true);

    const dialogHandler = () => {
        setDialog(!dialog);
    };


    return (
        <div>

            <Dialog
                open={dialog}
                onClose={dialogHandler}
            >
                <DialogContent>
                    <Typography className={classes.header} variant='h5'>
                        This is just a UI design the tabs button links are not Working As there are no Routes assigned to them.
                        <br />
                        <br />Thank You!!
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={dialogHandler} color='secondary' variant='contained' size='medium'>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>


            <HeroSection nightMode={nightMode} />
            <DetailSection nightMode={nightMode} />
        </div>
    )
}
