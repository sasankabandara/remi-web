import React from "react";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import "../navbar/navbar.css"

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" variant="light" style={{ backgroundColor: 'transparent' }}>
      <Container className="justify-content-between">
        <Navbar.Brand href="#home">
          <Image src="images/logo.png" className="logo" alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Accomplishments</Nav.Link>
            <Nav.Link href="#link">Goals</Nav.Link>
            <Nav.Link href="#link">Road Map</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-primary" className="ml-auto">$REMY</Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
