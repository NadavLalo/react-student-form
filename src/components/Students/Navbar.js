import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavbarComponent = ({ onShowAddStudent }) => {
  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Navbar.Brand>
        <h1>Students</h1>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id='navbar' className='justify-content-center'>
        <Nav className='align-items-center'>
          <Nav.Item>
            <Button variant='outline-light' onClick={onShowAddStudent}>
              Add Student
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
