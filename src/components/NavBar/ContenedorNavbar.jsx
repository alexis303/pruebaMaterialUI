import React,{useState} from 'react';
import Navbar from './Navbar';
import Cajon from './Cajon';


import {
    makeStyles
} from '@material-ui/core';

const estilos  =  makeStyles ( theme => ({
    root : {
        display : 'flex'
        
    },
    toolbar: theme.mixins.toolbar,
    
    content: {
        felxGrow: 1,
        padding: theme.spacing(3), 
    }
}))


const ContenedorNavbar = () => {
    
    const classes = estilos()
    
    const [abrir, setAbrir] = useState(false);
    const accionAbrir = () => {
        console.log(abrir)
        setAbrir(!abrir)
    }

    return (
        <div className={classes.root}>
            <Navbar accionAbrir={accionAbrir} /> 
            
            <Cajon
                open={abrir}
                onClose={accionAbrir}
            />  
            
            
            {/* <div className={classes.content}>
                <div className = {classes.toolbar}></div>
                
            </div> */}
            
        </div>
    )
}

export default ContenedorNavbar
