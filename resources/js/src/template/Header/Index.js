import React from "react";
import { Navbar } from "react-bootstrap";
import NavLinks from "./NavLinks";
import LinkUser from "./LinkUser";

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavLinks />
                <LinkUser />
            </Navbar.Collapse>
        </Navbar>
    );
}
