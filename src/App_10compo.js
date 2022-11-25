import logo from './logo.svg';
import $ from 'jquery';
import './App.css';
import {Fnc1,Fnc2} from './FncCom';


function App(){

  return (
    <div className="App">
        <div className="black-nav">
            <div>map()함수 </div>
            </div><br/>
            <SubApp/>
            <Fnc1/>
            <Fnc2/>
        </div>
  );
}

function SubApp(){
return(
  <div>추가한 함수형 컴포넌트</div>
);

}
export default App;
