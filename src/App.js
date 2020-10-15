import React from 'react';
import Footer from './Footer';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {HashRouter, Link, NavLink, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import Services from './Services';

function App() {
  return (
     
  <HashRouter basename='/'>
  <div className="App">
  
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="navbar-custom">
        <Navbar.Brand href="/"><img src="images/logo_new.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id="navClass" className="ml-auto nav-item">
            <Link id="navLink" to="/">Home</Link>
            <Link id="navLink" to="/services">Services</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <Switch>
    	<Route exact path="/"><Header /></Route>
      <Route exact path="/services"><Services /></Route>
    </Switch>
      <h1>Hello World</h1>
      <Footer />
      </div>
  </HashRouter>
  
    
  );
}

export default App;
