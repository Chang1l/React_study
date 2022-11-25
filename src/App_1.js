import logo from './logo.svg';
import roomhaha from './img/room.jpg';
import './App.css';

function App() {
  
  let str ="내가 해야할 일";
  let cnm= "hStyle";
  let imgStyle={width:'200px',height:'200px;',borderRadius:'5px',border:'1px solid #4545'};

  function btn(){
    return "클릭버튼";
  }
  
  
  return (
    <div className="App">
        <div className="black-nav">
            <div>Todo 리스트</div>
        </div>
        <h4 className={cnm}>{str}</h4>
        <img src={roomhaha} style={imgStyle}/>
        {/* <img src={roomhaha} style={{width:'200px',height:'200px;',borderRadius:'5px',border:'1px solid #4545'}}/>  */}
        </div>
  );
}

export default App;
