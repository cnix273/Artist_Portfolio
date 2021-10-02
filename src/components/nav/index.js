import React from "react";
import "./style.css";

import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    return (
        <Navbar id="navbar" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="links" href="#aboutContainer" id="home">HOME</Nav.Link>
                    <Nav.Link className="links" href="#skillsContainer" id="about">ABOUT</Nav.Link>
                    <Nav.Link className="links" href="#projectContainer" id="gallery">GALLERY</Nav.Link>
                    <Nav.Link className="links" href="#contactContainer" id="contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;