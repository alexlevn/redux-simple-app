'use strict'

import React from 'react';
import { Navbar, Nav, NavItem, Badge, NavDropdown, MenuItem } from 'react-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">CEREZIN Shop</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/">
                        BooksList
                    </NavItem>
                    <NavItem eventKey={2} href="/contact">
                        Contact
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem href="/admin">Admin</NavItem>
                    <NavItem href="/cart">Cart</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Menu;