import logo from './logo.svg';
import $ from 'jquery';
import './App.css';


function App() {
  $("#pival").text(`2PI=${Math.PI*Math.PI}`);
  return (
    <div className="App">
        <div className="black-nav">
            <div>라이브러리 의존성 관리</div>
            </div><br/>
      <a href="https://www.naver.com">네이버</a><br/>
      <span id='pival'></span><br/><br/>
      1. 리액트앱 폴더로 작업디렉토리 위치 이동<br />
      2. npm install jquery 실행하여 라이브러리 설치<br />
      3. 설치한 라이브러리를 이용할 때 모듈명으로 가져오기 <br />
      형식: import 엘리아스명 from '모듈명'; <br />
      예시: import $ from 'jquery';
      

        </div>
  );
}

export default App;
