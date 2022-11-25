import logo from './logo.svg';
import './App.css';



function App() {
  let sum=(a,b)=> a+b;
  function sum1(a,b){
    return a+b;
  }

  const addAndMultiple=(a,b)=>({
  add:a+b,
  mul:a*b
    });  

    function addAndMul(a,b){
      return {add:a+b, mul:a*b};
    }

  return (
    <div className="App">
        <div className="black-nav">
            <div>화살표 함수</div>
            </div><br/>
      {sum(5,2)}<br/>
      {sum(9,7)}<br/>
      {addAndMultiple(3,3).add},{addAndMultiple(3,3).mul}<br/>
      {addAndMul(5,3).add},{addAndMul(5,3).mul}<br/>
        </div>
  );
}

export default App;
