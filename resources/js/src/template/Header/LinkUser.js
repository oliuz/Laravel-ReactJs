import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog, faUser, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCog, faUser, faDoorOpen);

export default function LinkUser() {
    return (
        <Nav>
            <NavDropdown title="UserMenu" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">
                    <FontAwesomeIcon
                        icon={["fa", "cog"]}
                        style={{ "margin-right": "10px" }}
                    />
                    Setings
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                    <FontAwesomeIcon
                        icon={["fa", "user"]}
                        style={{ "margin-right": "10px" }}
                    />
                    Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                    <FontAwesomeIcon
                        icon={["fa", "door-open"]}
                        style={{ "margin-right": "10px" }}
                    />
                    Logout
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}
