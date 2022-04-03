import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export const Header = () => {
  return (
    <Navbar color="dark" dark>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <NavbarBrand href="/">오늘의 할일</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              추가
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
