import React from 'react'
import { makeStyles, Button, AppBar, Typography, IconButton, Toolbar } from '@material-ui/core'
import {Menu, PersonOutline} from '@material-ui/icons';


import {
  useHistory 
} from "react-router-dom";

const useStyles = makeStyles(theme =>  ({
    offset: theme.mixins.toolbar,
    colorTxt:{
      color: 'black', 
      flexGrow:1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },

    // appBar : {
    //   width:  `calc(100% - ${240}px)`,
    //   marginLeft: 240, 
    // }

   
}))

const Navbar = (props) => {

    const history = useHistory();
    const classes = useStyles();
  
    function handleClick(linkUrl) { 
      history.push(linkUrl)
    }

    //const [btnDrawer, setBtnDrawer] = useState({actBtn: false})

    return (


      <div>
        {/* className={classes.appBar}  */}
        <AppBar  color="primary">
          <Toolbar>

            <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu"
              onClick={() => props.accionAbrir()}
            >
              <Menu/>
              
            </IconButton>
              
            <Typography spacing={3}  variant="h5" className={classes.colorTxt}>
              AppBar
            </Typography>

            <Button onClick={() => handleClick("/login")} 
              variant="contained" 
              color="secondary" 
              startIcon={<PersonOutline/>}
            >LOGIN</Button>
            {/* <Button  
              onClick={() => handleClick("/detalles")} 
              variant="contained" 
              color="secondary" 
              startIcon={<PersonOutline/>}
            >REGISTER</Button>      */}

          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </div>
    )
}

export default Navbar
