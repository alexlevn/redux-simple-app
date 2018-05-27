'use strict'

import React from 'react';
import Menu from './components/menu';
import Footer from './components/footer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { getCart } from './actions/cartActions';
import { getCart } from './actions/cartActions';

class Main extends React.Component {

    componentDidMount() {
        this.props.getCart();
    }

    render() {
        return (
            <div>
                <Menu cartItemsNumber={this.props.totalQty} />
                {this.props.children}
                <Footer />
                {/* <p>ABC HELLO TEST </p> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        totalQty: state.cart.totalQty
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCart
    }, dispatch)
}
// export default Main;
export default connect(mapStateToProps, mapDispatchToProps)(Main);