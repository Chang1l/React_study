import logo from './logo.svg';
import roomhaha from './img/room.jpg';
import './App.css';

function App() {
  //템플릿 문자열
  let str1='안녕~ ';
  let str2='리액트!!!';
  let strconcat=`${str1} ${str2}`;

  let pobj={fruit: '사과', price: '1,200원'};
  let pstr=`${pobj.fruit}의 가격은 ${pobj.price}입니다.`;
  
  let lnum=5;
  let rnum=7;
  let mul= `${lnum} X ${rnum} = ${lnum*rnum}`;

  let bl=false;
  let opr=`bl변수의 값은 '${bl? '참': '거짓'}'입니다.`;

  return (
    <div className="App">
        <div className="black-nav">
            <div>템플릿 문자열</div>
            </div><br/>
        {strconcat}<br/>
        {pstr}<br/>
        {mul}<br/>
        {opr}<br/>
        </div>
  );
}

export default App;
