/**
 * repos
 **/

import React, {Component} from 'react';
import Repo from './repo';

class Repos extends Component {
    constructor(props) {
        super(props);

        this.state = {
            repos: [],
            total: 0
        };

        this.getRepos = this.getRepos.bind(this);
    }

    componentDidMount() {
        this.getRepos();
    }

    getRepos() {
        fetch('https://api.github.com/search/repositories?q=topic:react&sort=stars')
            .then(response => {
                return response.json();
            }).then(body => {
            if (body.items && body.total_count) {
                this.setState({
                    total: body.total_count,
                    repos: body.items
                });
            }
        });
    }

    render() {
        return (
            <div className="ui container">
                <p>In Github, there are about <strong>{this.state.total}</strong> repos present related to React</p>
                <p>You can find below the most starred <strong>{this.state.repos.length}</strong> of them.</p>
                <div className="ui cards">
                    {
                        this.state.repos.map(repo => {
                            return <Repo key={repo.id} repo={repo}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Repos;