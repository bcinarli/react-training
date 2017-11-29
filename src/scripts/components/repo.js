/**
 * repo
 **/

import React, {Component} from 'react';

class Repo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <img src={this.props.repo.owner.avatar_url}/>
                </div>
                <div className="content">
                    <a className="ui header" href={this.props.repo.html_url}>{this.props.repo.name}</a>
                    <div className="description">
                        <p>{this.props.repo.description}</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui stackable three column grid" style={{whiteSpace: 'nowrap'}}>
                        <span className="column">
                            <i className="unhide icon"/>
                            {this.props.repo.watchers_count}
                        </span>
                        <span className="column">
                            <i className="star icon"/>
                            {this.props.repo.stargazers_count}
                        </span>
                        <span className="column">
                            <i className="fork icon"/>
                            {this.props.repo.forks}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Repo;