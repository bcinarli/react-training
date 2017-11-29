/**
 * menu
 **/

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            links: [
                {name: 'Home', path: '/'},
                {name: 'About', path: '/about'},
                {name: 'Help', path: '/help'}
            ]
        }
    }

    render() {
        return (
            <ul className="ui bulleted list">
                {
                    this.state.links.map(link => {
                        return (
                            <li className="item" key={link.name}><Link to={link.path}>{link.name}</Link></li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Menu;