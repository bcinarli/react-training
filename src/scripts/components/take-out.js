/**
 * take-out
 **/

import React, {Component} from 'react';

class TakeOut extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="item">
                <h4 className="ui medium header"><strong>{this.props.group.groupName}</strong></h4>
                <div className="ui vertical fluid text menu">
                    {
                        this.props.group.description
                            ? <div className="item"><p dangerouslySetInnerHTML={{__html: this.props.group.description}}/></div>
                            : ''
                    }

                    {
                        this.props.group.keys.map(key => {
                            return (
                                <div key={Math.random()} className="item">
                                    <h5 className="ui small header">{key.key}</h5>
                                    <p dangerouslySetInnerHTML={{__html: key.description}}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="ui divider"/>
            </div>
        )
    }
}

export default TakeOut;