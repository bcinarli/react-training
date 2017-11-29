/**
 * heading
 **/

import React, {Component} from "react";

class Heading extends Component {
    render() {
        return (
            <h1 className="ui dividing header">{this.props.name}</h1>
        )
    }
}

export default Heading;