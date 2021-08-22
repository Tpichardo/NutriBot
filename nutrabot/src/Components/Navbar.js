import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./Navbar.css";
import resourcesIcon from "../Assets/resources.png";
import mymealsIcon from "../Assets/dinner.svg";
import nutrabot from "../Assets/nutrabot.png";
import Searchbar from "./SearchBar";
import mymeals from "../Assets/mymeals.png";
import links from "../Assets/linksl.png";

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
            <img src={nutrabot} alt="home" onClick={clearSearch} />
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
                <img
                  src={resourcesIcon}
                  alt="resources"
                  onClick={clearSearch}
                />
                <img src={links} alt="resources" onClick={clearSearch} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/mymeals">
                <img src={mymealsIcon} alt="my meals" onClick={clearSearch} />
                <img src={mymeals} alt="my meals" onClick={clearSearch} />
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
