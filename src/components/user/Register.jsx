import React, { Fragment } from 'react'
import {makeStyles, TextField, withStyles, Grid, Paper, Button, Link, Typography} from '@material-ui/core'

import {
    useHistory 
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
   
    paper1: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
        marginTop: '20px',
        backgroundColor: "#666"
        
    },
    mrgTop:{
        marginTop: '2rem',
    }
    // image1: {
    //     width: 128,
    //     height: 128,
    // },
    // img1: {
    //     margin: 'auto',
    //     display: 'block',
    //     maxWidth: '100%',
    //     maxHeight: '100%',
    // },
}));

const CssTextField = withStyles({
    root: {
        
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#4a148c',
        },
        '&:hover fieldset': {
            borderColor: '#4a148c',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#4a148c',
        },
      },
    },
  })(TextField);

const Register = () => {
    
    const classes = useStyles();
    const history = useHistory();

    return (

        <Fragment>
            <form  >
                <Paper className={classes.paper1}>
                    <Grid container spacing={3}>

                        <Grid item xs={12}>
                            <CssTextField fullWidth className={classes.colorborde} label="Correo" type="email" variant="outlined" color="secondary" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <CssTextField  fullWidth id="outlined-basic" label="Nombre" variant="outlined"  color="secondary"/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <CssTextField fullWidth id="outlined-basic" label="Apellido" variant="outlined" color="secondary" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <CssTextField fullWidth id="outlined-basic" label="Password" type="password"  variant="outlined" color="secondary" className={classes.colorborde} />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <CssTextField
                                fullWidth
                                className={classes.margin}
                                label="Edad"
                                variant="outlined"
                                type="number"
                                color="secondary"
                                id="custom-css-outlined-input"
                            />
                        </Grid>

                    </Grid>
                    <Button  
                    //onClick={() => handleClick("/detalles")} 
                    variant="contained" 
                    color="secondary" 
                    fullWidth
                    className={classes.mrgTop}
                    //startIcon={<PersonOutline/>}
                    >REGISTER</Button>     

                    <Typography  >
                        <h4>¿Ya posees una cuenta? Haz clic &nbsp;<Link
                                component="button" 
                                variant="body2"
                                color="secondary"
                                onClick={() => {
                                    console.log("funca")
                                    history.push("/login")
                                }}
                                >
                                Aqui
                            </Link>
                        </h4>
                        
                    </Typography >  
                </Paper>
            </form>
        </Fragment>
        
    )
}

export default Register
