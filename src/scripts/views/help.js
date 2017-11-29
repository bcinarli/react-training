/**
 * help
 **/

import React, {Component} from 'react';
import Repos from '../components/repos';
import TakeOuts from '../components/take-outs';
import Heading from '../components/heading';

class Help extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui main container">
                <TakeOuts/>
                <Heading name="Help"/>
                <Repos/>
            </div>
        )
    }
}

export default Help;