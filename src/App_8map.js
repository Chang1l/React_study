import logo from './logo.svg';
import $ from 'jquery';
import './App.css';

let arr=[1,2,3,];
let res1=[];

arr.map(function(v,i){
  console.log(`1번째 arr[${i}]번째 아이템 값은 : ${v}`);
  res1[i]=v+1;
});

let res2=[];
arr.map((v,i)=>{
  console.log(`2번째 arr[${i}]번째 아이템 값은 : ${v+i}`);
  res2[i]=v+i;
});

console.log("arr 객체 값");
console.log(arr);

console.log("res1 객체 값");
console.log(res1);

console.log("res2 객체 값");
console.log(res2);

function App() {

  return (
    <div className="App">
        <div className="black-nav">
            <div>map() 함수 </div>
            </div><br/>
        map함수는 배열 객체를 다루는 함수입니다<br/>
        해당 배열 객체를 분해하여 가져올 수 있습니다<br/>
        해당 배열 객체의 요소를 변경하여 새로운 요소로 만들 경우 유용합니다<br/>

        </div>
  );
}

export default App;
