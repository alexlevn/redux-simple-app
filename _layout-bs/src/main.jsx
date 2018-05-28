'use strict'

import React from 'react';
import Menu from './components/menu'
import Footer from './components/footer'

import { connect } from 'react-redux';

import { Well } from 'react-bootstrap';

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="container-fluid">
                    <Well>
                        {this.props.children}
                    </Well>
                </div>
                <Footer />
            </div>
        )
    }
}