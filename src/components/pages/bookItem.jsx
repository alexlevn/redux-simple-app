// 'use strict'

import React from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, deleteCartItem } from '../../actions/cartActions';


class BookItem extends React.Component {

    handleCart() {
        const book = {
            _id: this.props._id,
            description: this.props.description,
            title: this.props.title,
            price: this.props.price
        };
        this.props.addToCart(book);
    }

    render() {
        return (
            <div className="well">
                <Row>
                    <Col xs={12}>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.description}</p>
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
        carts: state.carts.carts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToCart: addToCart
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);