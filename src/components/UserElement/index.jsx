import React, { Component } from 'react'

export default class UserElement extends Component {
    
    render() {
        const {login, avatar_url, html_url} = this.props;
        return (
            <div className="card">
                <a rel="noreferrer" href={html_url} target="_blank">
                    <img alt="Avatar" src={avatar_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{login}</p>
            </div>
        )
    }
}
