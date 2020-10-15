import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import { NavLink, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from './Header';
import Services from './Services';
import Footer from './Footer';

function App() {
	return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className="navbar-custom">
        <Navbar.Brand href="/"><img src="images/logo_new.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav id="navClass" className="ml-auto nav-item">
            <Nav.Link id="navLink" href="/">Home</Nav.Link>
            <Nav.Link id="navLink" href="/services">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <Switch>
    	<Route exact path="/"><Header /></Route>
      <Route exact path="/services"><Services /></Route>
    </Switch>
  </Router>
  );
}
export default App;
