'use strict'

import React from 'react';
import Menu from './components/menu';
import Footer from './components/footer';

import { connect } from 'react-redux';

class Main extends React.Component {
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
        totalQty: state.carts.totalQty
    }
}

// export default Main;
export default connect(mapStateToProps)(Main);