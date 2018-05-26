'use strict'

import React from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';
import { WSAEINVALIDPROVIDER } from 'constants';

class Menu extends React.Component {
    render() {
        // console.log('QTY = ', this.props.carts.totalQt);
        // console.log('PROPS = ', this);
        return (
            <Navbar inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/about">About</NavItem>
                        <NavItem eventKey={2} href="/contacts">Contact Us</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/admin">Admin</NavItem>
                        <NavItem eventKey={1} href="/cart">Your cart
                            {(this.props.cartItemsNumber > 0) ? (<Badge style={{ margin: '0px 5px', textAlign: 'center' }} className="badge">{this.props.cartItemsNumber}</Badge>) : (' ')}
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

export default Menu;