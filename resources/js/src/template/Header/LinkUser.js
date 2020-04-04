/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

import { FaCog, FaUser, FaDoorOpen } from 'react-icons/fa';

export default function LinkUser() {
    return (
        <Nav>
            <NavDropdown title="UserMenu" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">
                    <FaCog size={16} color="#e02041" />
                    Setings
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                    <FaUser size={16} color="#e02041" />
                    Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                    <FaDoorOpen size={16} color="#e02041" />
                    Logout
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}
