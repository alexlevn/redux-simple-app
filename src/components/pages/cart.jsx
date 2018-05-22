'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCart } from '../../actions/cartActions';

class Cart extends React.Component {

    onDelete(_id) {

        // console.log('delete id = ', _id);

        const currentCartToDelete = this.props.carts;
        const indexToDelete = currentCartToDelete.findIndex(cart => cart._id === _id);

        // console.log('indexToDelete = ', indexToDelete);

        let cartAfterDelete = [
            ...currentCartToDelete.slice(0, indexToDelete),
            ...currentCartToDelete.slice(indexToDelete + 1)
        ]

        // console.log("Cart after delete: ", cartAfterDelete);

        console.log('onDelete() function...');
        this.props.deleteCartItem(cartAfterDelete);
    }

    render() {
        if (this.props.carts[0]) {
            // console.log('there is one book');
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }
    }

    renderEmpty() {
        return <div></div>
    }

    onIncrement(_id) {
        this.props.updateCart(_id, 1);
    }

    onDecrement(_id, quantity) {
        if (quantity > 1) {
            this.props.updateCart(_id, -1);
        }
        // else do no thing
    }

    renderCart() {
        const cartItemsList = this.props.carts.map(function (cartItem) {
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
            </Panel>
        )
    }

}

function mapStateToProps(state) {
    return {
        carts: state.carts.carts
    }
}

function mapDispatchToProps(dispatch) {
    // console.log('Binding Action..Callaction... and get Props Obj To State...');
    return bindActionCreators({
        deleteCartItem: deleteCartItem,
        updateCart: updateCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);