import logo from './logo.svg';
import './App.css';

function App() {
  let a=[1,2];
  let [i1, i2=7, i3=5]= a;
  let[b,c] = [[5,10],[3,9]];
  let obj={k1:'one',k2:'two'};
  // let obj={k1:'one',k2:'two',k3:'hahaha'};
  let {k1:nkey,k2,k3='k3값'}=obj;

  var[it1, ...ods]=[0,1,2];
  var{y1,...others}={y1:'x',x2:'y',x3:'z'};

  return (
    <div className="App">
        <div className="black-nav">
            <div>구조분해할당</div>
            </div><br/>
        i1: {i1}<br/>
        i2: {i2}<br/>
        i3: {i3}<hr/>
      [b,c]: {b} {c}<br/>
      [b,c]: {b[0]}{b[1]} {c[0]}{c[1]}<hr/>
      obj.k1, obj.k2: {obj.k1} {obj.k2}<br/>
      nkey: {nkey}<br/>
      {/* k1: {k1}<br/> */}
      k2: {k2}<br/>
      k3: {k3}<br/>
      it1: {it1}, ods[0]: {ods[0]}, ods[1]: {ods[1]}<br/>
      y1: {y1}, others.x2: {others.x2}, others.x3: {others.x3}<br/>
        </div>
  );
}

export default App;
