'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCart, getCart } from '../../actions/cartActions';

class Cart extends React.Component {
    componentDidMount(){
        this.props.getCart();
    }

    onDelete(_id) {

        const currentCartToDelete = this.props.cart;
        const indexToDelete = currentCartToDelete.findIndex(cartItem => cartItem._id === _id);
        
        let cartAfterDelete = [
            ...currentCartToDelete.slice(0, indexToDelete),
            ...currentCartToDelete.slice(indexToDelete + 1)
        ]

        console.log('onDelete() function...');
        this.props.deleteCartItem(cartAfterDelete);
    }

    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }


    open() {
        this.setState({ showModal: true })
    }

    close() {
        this.setState({ showModal: false })
    }

    render() {
        if (this.props.cart[0]) {
            // console.log('there is atleast one book');
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }
    }

    renderEmpty() {
        return <div></div>
    }

    onIncrement(_id) {
        this.props.updateCart(_id, 1, this.props.cart);
    }

    onDecrement(_id, quantity) {
        if (quantity > 1) {
            this.props.updateCart(_id, -1, this.props.cart);
        }
        // else do no thing
    }

    renderCart() {
        const cartItemsList = this.props.cart.map(function (cartItem) {
            return (
                <Panel
                    key={cartItem._id}
                    style={{ margin: '15px' }}>
                    <Row style={{ margin: '5px' }}>
                        <Col xs={12} sm={4}>
                            <h6>{cartItem.title}</h6>
                            <span>    </span>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>usd. {cartItem.price}</h6>
                        </Col>

                        <Col xs={12} sm={2}>
                            <h6>qty. <Label bsStyle="success">{cartItem.quantity}</Label></h6>
                        </Col>
                        <Col xs={12} sm={4}>
                            <ButtonGroup style={{ minWidth: '300px' }}>
                                <Button
                                    bsStyle="default" bsSize="small"
                                    onClick={this.onDecrement.bind(this, cartItem._id, cartItem.quantity)}
                                >-</Button>
                                <Button
                                    bsStyle="default" bsSize="small"
                                    onClick={this.onIncrement.bind(this, cartItem._id)}
                                >+</Button>
                                {/* <span>  </span> */}
                                <Button
                                    onClick={this.onDelete.bind(this, cartItem._id)}
                                    bsStyle="danger"
                                    bsSize="small">DELETE</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Panel>
            )
        }, this);

        // return cartItemsList;
        return (
            <Panel header="Cart" bsStyle="primary" style={{ margin: '15px' }}>
                {cartItemsList}
                <Row style={{ padding: '15px' }}>
                    <Col xs={12}>
                        <h6>Total amount: {this.props.totalAmount}</h6>
                        <Button
                            onClick={this.open.bind(this)}
                            bsStyle="success"
                            bsSize="small">
                            PROCESS TO CHECKOUT
                    </Button>
                    </Col>
                </Row>
                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thank you!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Your order has been saved!</h6>
                        <p>You will receive an email confirmation.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Col xs={6}>
                            <h6>total $: {this.props.totalAmount} </h6>
                        </Col>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        totalAmount: state.cart.totalAmount,
        totalQty: state.cart.totalQty
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteCartItem: deleteCartItem,
        updateCart: updateCart,
        getCart: getCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);