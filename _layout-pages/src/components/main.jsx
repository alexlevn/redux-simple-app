'use strict'

import React from 'react';
import Menu from './menu';
import Footer from './footer';

import { connect } from 'react-redux';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Menu noname={99}/>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         noVariable: 0
//     }
// }

// export default connect(mapStateToProps)(Main);

export default Main;