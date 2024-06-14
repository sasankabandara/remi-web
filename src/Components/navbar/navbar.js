import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import "../navbar/navbar.css"

const NavbarComponent = () => {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark" className="transparent-navbar">
      <Container>
        <Navbar.Brand href="/">
          <Image src="images/logo.png" className="logo" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#accomplishments">Accomplishments</Nav.Link>
            <Nav.Link href="#goals">Goals</Nav.Link>
            <Nav.Link href="#roadmap">Road Map</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
