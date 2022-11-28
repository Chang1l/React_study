
import './App.css';
import HeaderCon from './Header';
import SubCon from './SubCon';
import Footer from './Footer';

function App() {
  let str = "좋아요";
  let arr = [1,2,3,4,5,6,7,8,9];

  return (
    <div className="App">
      <HeaderCon />
      {
        arr.map(function(v, i){
          if(v%3==1){
            return(
              <div className='contentDiv' key={i}>
                { 
                  [v, v+1, v+2].map(function(j, k){
                    return(<SubCon str={str} item={j} key={k}/>)
                  })  
                }
              </div>
            );
          }
          
        })
      }
      <Footer />
    </div>
  );
}

export default App;
