import React from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{ background: 'rgba(255, 255, 255, 0.63)' }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            alt=""
            style={{ height: '3rem', width: '3rem' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link
              href="#pricing"
              style={{ color: '#000', fontWeight: 'bold' }}
            >
              Home
            </Nav.Link>
            <Nav.Link href="#features">For Tenants</Nav.Link>
            <Nav.Link href="#features">For Flatmates</Nav.Link>
            <Nav.Link href="#pricing">For Owners</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Button variant="secondary" className="text-white fw-bold">
                Create Your Listing
              </Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Link to="/auth" className="btn btn-primary text-white fw-bold">
                Login/Signup
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
