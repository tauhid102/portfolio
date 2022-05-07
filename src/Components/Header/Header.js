import React from "react";
import "./header.css";
import logo from "../../Image/T@UHID.png";
import { Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <div className="container">
          <Navbar.Brand to="/home">
            <Image className="logo" src={logo}></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link to="#home" className="menu">Home</Nav.Link>
              <Nav.Link to="#features" className="menu">Features</Nav.Link>
              <Nav.Link to="#portfolio" className="menu">Portfolio</Nav.Link>
              <Nav.Link as={Link} to="https://drive.google.com/file/d/1QR8wvUqT1nofOj41xjbT0gEdzc-QaVcx/view?usp=sharing" className="menu">Resume</Nav.Link>
              {/* <Nav.Link to="#blog" className="menu">Blog</Nav.Link> */}
              <Nav.Link to="#contact" className="menu">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
