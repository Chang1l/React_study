import './App.css';
import React,{Component} from 'react';

function App(){
  // let[st,stcnk]=useState(0);
  return(
    <div className="App">
        <div className='divTitle'>
          <h2 className='hTitle'>TodoList</h2>
        </div>
        <div class="mpa">
        <Modal/><hr/>
        <Modal2 name="마이콜" age={28}/>

        </div>
        <div className='divBottom'><h2 className='bTitle'>리액트 연습용 페이지입니다.</h2></div>        
    </div>

  );
}
// 클래스형 컴포넌트는 반드시 constructor(), render(){}함수가 필요
// 생성자에는 반드시super() 기술,
// render(){} 함수에는 반드시 return()함수 기술 필요

  class Modal extends Component{
    constructor(){
      super();
      this.state={
        name:"홍길동",
        age:20
        }
  }
  render(){

    return(
      <div className='contentDiv'>
        <div>안녕하세요, {this.state.name}님,</div>
        <div>{this.state.name}님의 나이는 {this.state.age}세 입니다</div>
        <button onClick={()=>{this.setState({age:this.state.age+1});}}>나이변경</button>
      </div>
    );
  }
}

class Modal2 extends React.Component{
  constructor(props){
    super(props);
    this.state={ age:props.age  }
}
render(){

  return(
    <div className='contentDiv'>
      <div>안녕하세요, {this.props.name}님,</div>
      <div>{this.props.name}님의 나이는 {this.state.age}세 입니다</div>
      <button onClick={()=>{this.setState({age:this.state.age+1});}}>나이변경</button>
    </div>
  );
}
}
export default App;
