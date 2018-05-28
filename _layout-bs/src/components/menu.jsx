'use strict'

import React from 'react';
import { Navbar, Nav, NavItem, Badge, NavDropdown, MenuItem } from 'react-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">CEREZIN Shop</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/">
                        BooksList
                    </NavItem>
                    <NavItem eventKey={2} href="/contact">
                        Contact
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                    </NavDropdown>
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