
##Steps:
    0. Structure & webpack.config.js

    1. Packages:
        npm i --save express
        npm i --save-dev webpack webpack-cli
    2. 
        npm i --save react react-dom
        npm i --save redux react-redux react-router@3
        npm i --save babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-1
        npm i --save-dev redux-logger

    3.  
        server.js
        
    4.  client.jsx

---------------------------------------------------------------------------
client.jsx

'use strict'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


// REDUCERS
const postsReducer = function (state = { posts: [] }, action) {
    switch (action.type) {
        default:
            return state;
            break;
    }
}

const catsReducer = function (state = { cats: [] }, action) {
    switch (action.type) {
        default:
            return state;
            break;
    }
}

const reducers = combineReducers({
    posts: postsReducer,
    cats: catsReducer
});

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

// COMPONENTS
const Menu = () => (
    <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </div>
);
const Footer = () => (
    <div>
        @CopyRight ReactJS Theme . 2018. Alright reverse.
    </div>
);

const Home = () => (
    <div>
        Home
    </div>
);
const About = () => (
    <div>
        About
    </div>
);
const Contact = () => (
    <div>
        Contact
    </div>
);

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <Menu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

const Routes =  (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Route>
        </Router>
    </Provider>
);

// render(<div>Home page</div>, document.getElementById('app'));
render(Routes, document.getElementById('app'));

---------------------------------------------------------------------------
webpack.config.js

var path = require('path');

const webpack = require('webpack');

module.exports = {
    entry: './src/client.jsx',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }

            }
        ]
    }
}