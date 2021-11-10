import React from "react";
import "./style.css";

import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";
// import { Router } from "react-router";
import {LinkContainer} from 'react-router-bootstrap'
// import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar id="navbar" expand="lg" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link className="links" id="home">HOME</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link className="links" id="about">ABOUT</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/gallery">
                        <Nav.Link className="links" id="gallery">GALLERY</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;