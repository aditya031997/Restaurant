import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
export default class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="/create">Create</Nav.Link> */}
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/list">List</Nav.Link>
            <Nav.Link href="/search">Search</Nav.Link>
            <Nav.Link href="/update">Update</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
