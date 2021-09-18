import React, { Component } from 'react'
import UserElement from '../UserElement'
import './index.css'

export default class List extends Component {
    render() {
        const {userList, isFirst, isLoading, err} = this.props;
        return (
            <div className="row">
                {
                    isFirst ? <h2>Welcome, enter user name</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2 style={{color: 'red'}}>{err}</h2> :
                    userList.map(user => {
                        return (<UserElement key={user.id} {...user}/>)
                    })
                }
            </div>
        )
    }
}
