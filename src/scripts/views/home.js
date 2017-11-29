/**
 * home
 **/

import React, {Component} from 'react';
import Heading from '../components/heading';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Hello World',
            originalTitle: 'Hello World'
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.restoreTitle = this.restoreTitle.bind(this);
    }

    restoreTitle(originalTitle) {
        this.setState({
            title: originalTitle
        });
    }

    updateTitle(e) {
        let newTitle = e.currentTarget.value;

        this.setState({
            title: newTitle.length > 0 ? newTitle : this.state.originalTitle
        });
    }

    render() {
        return (
            <div className="ui main container">
                <Heading name={this.state.title}/>
                <input onChange={this.updateTitle} placeholder="Update Title"/>
                <p>As you change the input, the title updates it self. Even if the <code>Heading</code> element is another React component.</p>
            </div>
        )
    }
}

export default Home;