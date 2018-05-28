'use strict'

import React from 'react'
import { Image, Row, Col, Well, Button } from 'react-bootstrap';

class BookItem extends React.Component {
    constructor() {
        super();
        this.state = {
            isClicked: false
        }
    }

    render() {
        return (
            <Well>
                <Row>
                    <Col xs={4}>
                        <Image src={'images/' + this.props.name }responsive />
                    </Col>
                    <Col xs={8}>
                        <h4>Chiến lược đầu tư Benjamin GraHam</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tenetur enim quidem minima amet minus vel earum accusantium quasi alias odio, impedit tempora reiciendis labore animi dolore magni ipsa cumque.
                            <button className="link">
                                '...readmore'
                            </button>
                        </p>
                        <h6>$35</h6>
                        <Button bsStyle="success" >Buy Now</Button>
                    </Col>
                </Row>
            </Well>
        );
    }
}

export default BookItem;