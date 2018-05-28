// 'use strict'

import React from 'react';
import { Image, Row, Col, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, deleteCartItem, updateCart } from '../../actions/cartActions';


class BookItem extends React.Component {

    constructor() {
        super();
        this.state = {
            isClicked: false
        }
    }

    onReadMore() {
        this.setState({ isClicked: true })
    }

    handleCart() {
  
            _id: this.props._id,
            description: this.props.description,
            title: this.props.title,
            images: this.props.images,
            price: this.props.price,
            quantity: 1
        };

        // CHECK IF CART IS EMPTY
        if (this.props.cart.length > 0) {
            // CART IS NOT EMPTY

            let _id = this.props._id;
            let cartIndex = this.props.cart.findIndex(cartItem => cartItem._id === _id);

            // IF RETURN TO -1 THERE ARE NO ITEMS WITH SAME ID
            if (cartIndex === -1) {
                this.props.addToCart([book]);
            } else {
                this.props.updateCart(_id, 1, this.props.cart);
            }

        } else {
            // CART IS EMPTY
            this.props.addToCart([book]);
        }

    }

    render() {
        return (
            <div className="well">
                <Row>
                    <Col xs={12} sm={4}>
                        <Image src={this.props.images} responsive />
                    </Col>
                    <Col xs={12} sm={8}>
                        <h4>{this.props.title}</h4>
                        <p>{
                            (this.props.description.length > 50 && this.state.isClicked === false) ?
                                (this.props.description.substring(0, 50)) :
                                (this.props.description)
                        } <button className="link" onClick={this.onReadMore.bind(this)}>
                                {(this.state.isClicked === false && this.props.description !== null && this.props.description.length > 50) ?
                                    ('...read more') :
                                    ('')}
                            </button>
                        </p>
                        <h6>{this.props.price}</h6>
                        <Button onClick={this.handleCart.bind(this)} bsStyle='success'>Buy now</Button>
                    </Col>
                </Row>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToCart: addToCart,
        updateCart: updateCart
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);