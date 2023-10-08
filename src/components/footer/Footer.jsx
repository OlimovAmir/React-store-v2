import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import 'font-awesome/css/font-awesome.min.css';
import { Col, Container, Navbar, Row, Form } from 'react-bootstrap';


function Footer() {
  return (
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
        <Link>
          <i className='fa fa-microchip'> My company</i>
        </Link>
        
        


        <Form inline>
          <Row>
            <Col xs="auto">
              <Link >
                <i className="fa fa-youtube ms-4"></i>
              </Link>
              <Link>
                <i className='fa fa-facebook ms-4'></i>
              </Link>
              <Link>
                <i className='fa fa-twitter ms-4'></i>
              </Link>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  )
}

export default Footer