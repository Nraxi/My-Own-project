import React from 'react'
import "../scss/style.scss";
import { Container, Nav, Navbar } from 'react-bootstrap';


function NavMenu() {
  return (
    <Navbar bg="dark" expand="lg" variant="light" className='meny1'>
      <Container>
        <Navbar.Brand href="/">Nraxi page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/varukorg">Varukorg</Nav.Link>
            <Nav.Link href="/backoffice">Backoffice</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavMenu