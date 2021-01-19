import React, {Fragment} from 'react'

import {makeStyles, Paper} from '@material-ui/core'

// const useStyles = makeStyles((theme) => ({

// }))

const useStyles = makeStyles((theme) => ({
   
   
    paper1: {
        padding: theme.spacing(3),
        width: '100%',
        textAlign: 'center',
        position:'absolute',
        background: 'linear-gradient(0deg, rgba(1,37,32,1) 0%, rgba(0,105,92,1) 100%)',
    },
 
}));




const Footer = () => {


    const classes = useStyles();

    return (
        <Fragment>

            <Paper square variant="outlined"  className={classes.paper1}>
                
                <div>
                    <h1>
                        sidebar
                    </h1>
                </div>

            </Paper>
            

        </Fragment>
    )
}

export default Footer
