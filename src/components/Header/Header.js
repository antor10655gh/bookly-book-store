import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="#home">
            <i className="fas fa-book"></i> bookly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <NavDropdown title="Blog" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/blog-1">
                  Blog-1
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog-2">
                  Blog-2
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog-3">
                  Blog-3
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog-4">
                  Blog-4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {user ? (
                <Nav.Link onClick={handleSignOut}>
                  <i
                    style={{
                      color: "var(--green)",
                    }}
                    className="fas fa-user"
                  ></i>
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <i className="fas fa-user"></i>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
