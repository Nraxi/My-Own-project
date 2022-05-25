import React from 'react'
import "../scss/style.scss";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Form, FormControl, Button } from 'react-bootstrap'


function NavMfunk() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Nraxi page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/varukorg">Varukorg</Nav.Link>
            <Nav.Link href="/backoffice">Backoffice</Nav.Link>
          </Nav>
          <Form className="d-flex" nav>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavMfunk