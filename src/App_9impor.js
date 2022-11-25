import logo from './logo.svg';
import $ from 'jquery';
import './App.css';
import  abb from './Test';
import  {ha} from './Test';
import {Abc,DevItem} from './Test';

function App(){
console.log(abb);
  return (
    <div className="App">
        <div className="black-nav">
            <div>외부파일 참조하기 </div>
            </div><br/>
            abb 1: {abb}<br />
            abb 2: {Abc}<br />
            DevItem : x : {DevItem.x}, y: {DevItem.y}<br/>
            ha(): {ha()}<br />
        </div>
  );
}

export default App;
