import React from 'react';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';

const NavbarComponent = ({studentsList, onShowAddStudent, onSortStudents}) => {
  return (
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Navbar.Brand>
        <h1>Students</h1>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse id='navbar' className='justify-content-center'>
        <Nav className='align-items-center'>
          <Nav.Item className='mr-2 my-2'>
            <Button variant='outline-light' onClick={onShowAddStudent}>
              Add Student
            </Button>
          </Nav.Item>
          <Nav.Item className='ml-2 my-2'>
            <Dropdown>
              <Dropdown.Toggle variant='outline-light' id='sort'>
                Sort By
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => onSortStudents('username', studentsList)}
                >
                  Name
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => onSortStudents('average', studentsList)}
                >
                  Average
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
