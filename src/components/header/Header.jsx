import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { ROUTES } from './../../utils/routes';
import logo from '../img/logo.jpg';
import 'font-awesome/css/font-awesome.min.css';
import { Button, Col, Container, Nav, NavDropdown, Navbar, Row, Form } from 'react-bootstrap';


function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark" variant='dark'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="logo"
              height="50"
              width="50"
              style={{ borderRadius: '30%' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={ROUTES.HOME} className="nav-link">About as</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
              <Nav.Link href="#link" >Link</Nav.Link>
              <NavDropdown title={<span >Dropdown</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                  autoComplete='off'
                  onChange={() => { }}

                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
                <Link >
                  <i className="fa fa-home ms-4"></i>
                </Link>
                <Link className='link'>
                  <i className="fa fa-shopping-bag ms-4"></i>
                  <span>25</span>
                </Link>
              </Col>
            </Row>
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header