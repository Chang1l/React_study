import logo from './logo.svg';

import './App.css';
import React,{Component} from 'react';
import {Fnc1,Fnc2} from './FncCom';

// 함수형 컴포넌트에서는 리액트에서지원하는 기능 중 StaticRange,lifeCycle 등의 기능들을 
// 사용할 수 없다.
// state 는 react hook을 이용할 경우는 함수형 컴포넌트에서도 state 이용이 가능하다

class App extends Component{
  render(){
  return (
    <div className="App">
        <div className="black-nav">
            <div>map()함수 </div>
            </div><br/>
          
            <Fnc1/>
            <Fnc2/>
        </div>
  );
}
}

export default App;
