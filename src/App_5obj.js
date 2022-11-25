import logo from './logo.svg';
import './App.css';



function App() {
  let a=1;
  let b=5;
  let obj={a,b};
  let addstr="Id";
  let obj2= {['one'+addstr]: '키이름 변경하기'};
  let obj3={ obj2, 
            md1(){return 'md1메소드실행';}
            ,md2(){return 'md2메소드 실행';}
};
let obj4={ obj2, 
  md1 :function(x,y){return `md1메소드실행:${x+y}` ;}
  ,md2(){return 'md2메소드 실행';}}

  return (
    <div className="App">
        <div className="black-nav">
            <div>객체 확장 표현</div>
            </div><br/>
      obj 객체 확장 표현값 : {obj.a}, {obj.b}<br/>
      obj2 객체의 요소값 : {obj2['one'+addstr]}<br/>
      obj3 객체의 md1() : {obj4.md1(5,3)}<br/>
      obj3 객체의 md2() : {obj3.md2()}<br/>
      obj3 객체의 obj2객체의 요소 값 : {obj3.obj2['one'+addstr]}<br/>


        </div>
  );
}

export default App;
