import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        // const {keyWordElement} = this;
        // console.log(keyWordElement.value);
        //解构赋值的连续写法 第一个冒号是连续解构，第二个冒号是改变量名
        const {keyWordElement:{value:keyword}} = this;
        //发送前更新状态
        this.props.updateAppState({isFirst:false, isLoading:true})
        //axios.get(`http://localhost:3000/api1/search/users?q=${keyword}`).then(  //自己发自己3000可省略
        axios.get(`/api1/search/users?q=${keyword}`).then(
            response => {this.props.updateAppState({isLoading:false, userList:response.data.items})},
            error => {this.props.updateAppState({isLoading:false, err:error.message})}
        );
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    {/* ref回调执行次数两次，具体看官方文档 */}
                    <input ref={currentNode => this.keyWordElement = currentNode} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick = {this.search}>Search</button>
                </div>
            </section>
        )
    }
}
