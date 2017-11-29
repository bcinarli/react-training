/**
 * index
 **/

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, About, Help} from '../views';
import Menu from '../components/menu';

const Container = ({store}) => (
    <Provider store={store}>
        <Router>
            <div id="example">
                <div className="ui masthead vertical segment">
                    <div className="ui container">
                        <Menu/>
                    </div>
                </div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/help" component={Help}/>
            </div>
        </Router>
    </Provider>
);

export default Container;