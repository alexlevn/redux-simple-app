// 'use strict'

import React from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';

class BookItem extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.description}</p>
                        <h6>{this.props.price}</h6>
                        <Button bsStyle='success'>Buy now</Button>
                    </Col>
                </Row>
            </div>
        );
    }
};
export default BookItem;