import './App.css';
import { useState } from 'react';
import $ from 'jquery';

function App() {
  let [a,b] = useState(["아이디를 입력하세요","비밀번호를 입력하세요"]);
  // [ 변수, function]
  // a=["아이디를 입력하세요","비밀번호를 입력하세요"];
  // function b(매개변수-변경할 값){
  //   return 변경한 값;
  // }
  let [cnt, cntchk] = useState(0);
  let st = {color: 'red', fontSize: '20pt', cursor: 'pointer'};
  let [htitle, htitlefnc] = useState([' 수난이대', ' 김약국의 딸들', ' 태백산맥']);
  let [modal, setModal] = useState(0);
    return (
      <div className="App">
         <h2>onClick이벤트와 state</h2>
         <input type='text' id='id' placeholder={a[0]} />
         <input type='text' id='pw' placeholder={a[1]} />
         <button onClick={()=>b([$('#id').val(), $('#pw').val()])}>클릭</button><br />
         {`아이디 : ${a[0]} / 비번 : ${a[1]}`}<br /><hr />

         <span style={st} onClick={()=>cntchk(++cnt)}>♥ 좋아요 {cnt}개</span><br /><br /><hr />

         <button onClick={
          ()=>{
            let copy=[...htitle];//전개연산자: 배열의 요소만해서 나열해줌
            copy.sort();//오름차순 정렬
            htitlefnc(copy);//값 변경
          }
         }
         >클릭</button><br /><hr />
         {htitle.join(",")}
         {/* 구분자로 연결 */}
         <br /><br />

         <button onClick={()=> setModal(!modal)} >모달창 제어하기</button>
         {
          modal === true ? <Modal modal = {htitle.join(", ")}/> : null
         }
      </div>
      );
}

function Modal(props){
  return(
    <div className='modal'>
      <h3>모달창 띄우기(상세보기)</h3><br /><hr />
      {props.modal}
    </div>
  );
}
export default App;