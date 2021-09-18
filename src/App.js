import React, {Component} from "react";
import Search from './components/Search';
import List from './components/List';

export default class App extends Component {

  state = {
    userList:[],  //userlist初始值
    isFirst:true, //是否第一次打开界面
    isLoading:false,  //标识是否是加载中
    err:''  //错误信息 
  };
  
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  }

  render() {
    return (
      <div>
        <div className="container">
          <Search updateAppState={this.updateAppState}/>
          <List {...this.state}/>
        </div>
      </div>
    );
  }
}

