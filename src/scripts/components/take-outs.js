/**
 * take-outs
 **/

import React, {Component} from 'react';
import TakeOut from './take-out';

class TakeOuts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            takeOuts: []
        };

        this.getTakeouts = this.getTakeouts.bind(this);
    }

    componentDidMount() {
        this.getTakeouts()
    }

    getTakeouts() {
        fetch("/data/take-outs.json")
            .then(response => response.json())
            .then(result => this.setState({takeOuts: result}))
    }

    render() {
        return (
            <div className="ui dividing right rail">
                <h4 className="ui large header">Key Take Outs</h4>
                <p>Here are the key points for a React component you need to know</p>

                {
                    this.state.takeOuts.map(takeOut => {
                        return <TakeOut key={Math.random()} group={takeOut}/>
                    })
                }
            </div>
        )
    }
}

export default TakeOuts;