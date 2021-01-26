import React, { Fragment } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    //  Navigation
    <Fragment>
      <Navbar className="backGround " expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="textColor" href="#home">
              Aman-Portfolio
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span>Menu</span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" bg="light" variant="light">
            <Nav className="mr-auto">
              <LinkContainer to="/personaldetail">
                <Nav.Link className="textColor">Personal Detail</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/education">
                <Nav.Link className="textColor">Education</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/skills">
                <Nav.Link className="textColor">Skills</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contactme">
                <Nav.Link className="textColor">Contact Me</Nav.Link>
               
              </LinkContainer>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </Fragment>
  );
};

export default Header;