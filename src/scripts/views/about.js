/**
 * about
 **/

import React, {Component} from 'react';
import Heading from '../components/heading';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui main container">
                <Heading name="About"/>
                <p>This is a sample React App that you can try & learn</p>
                <p>App contains basic needs for creating your views. You need to add backend related code by yourself.</p>
            </div>
        )
    }
}

export default About;