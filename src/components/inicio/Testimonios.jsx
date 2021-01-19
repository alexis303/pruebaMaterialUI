import React, { Fragment, useState} from 'react'

import { 
    makeStyles, 
    Grid, 
    Paper,
    Button, 
    MobileStepper,
    useTheme 
} from '@material-ui/core'

import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles((theme) => ({

    paper1: {
        marginTop: 20,
        background: '#ccc',
        textAlign: 'center',
        color: '#333'
    },
    
    cssBtn: {
        
        direction: 'column',
        color:"#0099ff",
        backgroundColor: "rgba(51, 51, 51, 0.199)",
        height: '100%'
    },

    stepp:{
        textAlign: 'center',
        alignItems: 'center',
        color:"#0099ff",
        background: '#ccc',
    }

}))


const tutorialSteps = [
    {
      nombreP: 'Nombre de la persona 1',
      testimonio: 'este es el testimonio 1'
    },
    {
        nombreP: 'Nombre de la persona 2',
        testimonio: 'este es el testimonio 2'
    },
    
    {
        nombreP: 'Nombre de la persona 3',
        testimonio: 'este es el testimonio 3'
    },
      
    {
        nombreP: 'Nombre de la persona 4',
        testimonio: 'este es el testimonio 4'
    },
      
    {
        nombreP: 'Nombre de la persona 5',
        testimonio: 'este es el testimonio 5'
    },
      
    {
        nombreP: 'Nombre de la persona 6',
        testimonio: 'este es el testimonio 6'
    },
    
      
    
  ];


const Testimonios = () => {
    
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Fragment>
            <Grid >
                <Paper className={classes.paper1}>
                    <h1>Testimonios</h1>
                    <Grid container spacing={3}>
                       
                        <Grid item xs>
                            <Button  
                                className={classes.cssBtn}
                                onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                
                            </Button>
                        </Grid>

                        <Grid item xs={10}>
                            
                            <h2>{tutorialSteps[activeStep].nombreP}</h2>
                            <h4>{tutorialSteps[activeStep].nombreP}</h4>
                            <h4>{1+activeStep}/{maxSteps}</h4>
                        </Grid>
                       
                        
                        <Grid item xs>
                            <Button
                                className={classes.cssBtn}
                                onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            </Button>
                        </Grid>
                   
                    

                    </Grid>

                    
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="flex-end"
                    >
                        <MobileStepper
                                className={classes.stepp}
                                steps={maxSteps}
                                position="static"
                                variant="dots"
                                activeStep={activeStep}
                                
                    />

                    </Grid>

                </Paper>
            </Grid>
        </Fragment>


    )
}

export default Testimonios
