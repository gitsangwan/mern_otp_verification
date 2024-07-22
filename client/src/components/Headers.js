import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"

const Headers = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">HpCloud</Navbar.Brand>
      <Nav className="">
        <Nav.Link href="#home">register</Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Headers
