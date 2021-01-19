import React from 'react'
import CloudIcon from '@material-ui/icons/Cloud';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import {
    useHistory 
} from "react-router-dom";

import {
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText,
    Divider,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    colortext:{
        color:"#aaa",
        
    },
    colorIcon:{
        color:"#00695c",
        
    }
}))

const Listas = () => {
    const classes = useStyles();

    const history = useHistory();
    
    function handleClick(linkUrl) { 
        history.push(linkUrl)
    }
   

    

    return (

        <List className={classes.colortext} component="nav" >
            <ListItem button onClick={() => handleClick("/")} >
                <ListItemIcon>
                    <CloudIcon className={classes.colorIcon}/>
                </ListItemIcon>
                <ListItemText  primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleClick("/detalles")}>
                <ListItemIcon>
                    <DesktopMacIcon  className={classes.colorIcon}/>
                </ListItemIcon>
                <ListItemText primary="Detalles" />
            </ListItem>
            <Divider/>
        </List>
    )
}

export default Listas
