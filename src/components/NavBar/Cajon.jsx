import React from 'react'
import { makeStyles, Drawer, Divider } from '@material-ui/core'
import Listas from './Listas'



const estilos = makeStyles(theme => ({
    drawer : {
        width: 240, 
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: 240,backgroundColor:'#222'
    },
    toolbar: theme.mixins.toolbar,
}))

function Cajon(props) {

    const classes  = estilos()
    return (
        <Drawer
            className = {classes.drawer}
            variant="temporary"
            anchor="left"
            open={props.open}
            onClose={props.onClose ? props.onClose : null }
            classes={{
                paper: classes.drawerPaper,
            }}
            
        >
            <div className={classes.toolbar}></div>
            <Divider />
            <Listas />
        </Drawer>
    )
}

export default Cajon
