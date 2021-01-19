import React, {Fragment} from 'react';
import '../src/index.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // NavLink
} from "react-router-dom";
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig';
import {makeStyles} from '@material-ui/core'


import Detalles from './components/detalles/Detalles';
import Inicio from './components/inicio/Inicio';
import ContenedorNavbar from './components/NavBar/ContenedorNavbar';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Footer from './components/footer/Footer';


const useStyled = makeStyles((theme) => ({

  fondo: {
    backgroundColor: '#333333'
  }

}))



function App() {

  const classes = useStyled();

  return (
    <div className={classes.fondo}>

    
    <Router>
      <ThemeProvider theme={theme}>
        <ContenedorNavbar/>

        {/* 
        <form className="container-fluid justify-content-start m-3">
            <a className="navbar-brand fs-1 text-success "  >Pag_Prueba</a>
            <Link to="/" className="btn btn-outline-success mr-4 ">
              Inicio
            </Link>
            
          </form> 
        */}

        <Switch>
          <Route path="/detalles" exact>
            <Detalles />
          </Route>
          <Route path="/" exact>
            <Inicio /> 
          </Route>
          <Route path="/login" exact>
            <Login /> 
          </Route>
          <Route path="/Register" exact>
            <Register /> 
          </Route>
        </Switch>

        <Footer/>
      </ThemeProvider>
    </Router>

    </div>
    
  );
}

export default App;
