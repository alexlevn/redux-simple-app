'use strict'

import React from 'react';
import { Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap';

export default class Cart extends React.Component {

    render() {
        const cartItemList = [1, 2, 3].map(function (cartId) {
            return (
                <Panel
                    key={cartId}
                    style={{ margin: '15px' }}
                >
                    <Row style={{ margin: '15px' }}>
                        <Col xs={12} sm={4}>
                            <h6>Tiêu đề sách</h6>
                            <span>         </span>
                        </Col>

                        <Col xs={12} sm={2}>
                            <h6>usd. {60 / cartId}</h6>
                        </Col>

                        <Col xs={12} sm={2}>
                            <h6>qty.
                                <Label bsStyle="success">
                                    {cartId * 2}
                                </Label>
                            </h6>
                        </Col>

                        <Col xs={12} sm={4}>
                            <ButtonGroup style={{ minWidth: '300px' }}>
                                <Button
                                    bsStyle="default" bsSize="small"
                                >-</Button>
                                <Button
                                    bsStyle="default" bsSize="small"
                                >+</Button>
                                <Button
                                    bsStyle="danger"
                                    bsSize="small"
                                >DELETE</Button>
                            </ButtonGroup>
                        </Col>

                    </Row>

                </Panel>
            )
        })

        return (
            <div className="container">
                <Panel headers="Cart" bsStyle="primary" bsStyle={{ marginTop: '15px' }}>
                    <Row>
                        <Col>
                            {cartItemList}
                        </Col>
                    </Row>

                    <Row style={{ padding: '15px' }}>
                        <Col xs={12}>
                            <h6>Total Amount: 33</h6>
                            <Button bsStyle="success" bsSize="small" >PROCESS TO CHECKOUT</Button>
                        </Col>
                    </Row>

                    <Modal show={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Thanh you!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>Your order has been saved!</h6>
                            <p>You will receive an email confirm</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Col xs={6}>
                                <h6>total $: 99</h6>
                            </Col>
                            <Button>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Panel>
            </div>
        )
    }
}