
import './App.css';
import PropsComponent from './PropsComponent';
import ChildApp from './ChildApp';
import React,{Component} from 'react';

class App extends Component{
  render(){
  return (
    <div className="App">
        <h2>onClick 이벤트와 State</h2>
        <PropsComponent str="프로퍼티 전달하기"/><br/><br/>
        <ChildApp 
        boolVal={true}
        numVal={1}
        arrVal={[1,2,3]}
        obVal={{k:'값'}}
        nodeVal={<h1>노드</h1>}
        />
        </div>
  );
}
}

export default App;
