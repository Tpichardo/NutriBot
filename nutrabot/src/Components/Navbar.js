import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navbar.css";
import NutriLogo from "../Assets/Nutribot.png";
import Searchbar from "./SearchBar";


export default function NavBar({
  clearSearch,
  input,
  invalidInput,
  handleInput,
  handleSubmit,
}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav.Link as={NavLink} to="/">
          <Navbar.Brand>
            <img src={NutriLogo} alt="home" onClick={clearSearch} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Nav.Link>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Item>
              <Nav.Link as={NavLink} to="/resources">
                <div onClick={clearSearch}>
                  Resources
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/mymeals">
                <div onClick={clearSearch}>
                  My Meals
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Searchbar
            input={input}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
            invalidInput={invalidInput}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
