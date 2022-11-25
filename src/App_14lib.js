import './App.css';
import { Component, useState } from 'react';
import $ from 'jquery';
import UseJquery from './UseJquery';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className='black-nav'>
            <div>라이브러리 의존성 관리</div>
        </div><br/>
        <UseJquery/>
          </div>
      );
}
}

export default App;