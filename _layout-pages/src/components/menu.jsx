'use strict'

import React from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <Navbar inverse>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href="/about" className="navItem">About</NavItem>
                        <NavItem href="/contact" className="navItem">Contact</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem href="/admin" className="navItem">Admin</NavItem>
                        <NavItem href="/cart" className="navItem">Cart <span>({this.props.noname})</span> </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
};

export default Menu;
