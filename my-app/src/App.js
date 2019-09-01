import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Shield">
        <img src="shield.png" className="ShieldImg" alt="Vereinswappen" />
      </div>
      <div className ="NavbarDiv">
        <Navbar bg="light" expand="">
          {/*  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Aktuelles</Nav.Link>
              <Nav.Link href="#link">Termine</Nav.Link>
              <NavDropdown title="Vorstellung" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#spiel">Spiel</Nav.Link>

            </Nav>
            {/*  <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */
            }
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="Carousel">
        <p style={{background:'red'}}>Bilder</p>
      </div>
    </div>
  );
}

export default App;
