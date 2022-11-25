import logo from './logo.svg';
import './App.css';

 let arr1=['one','tow'];
 let arr2=['three','four'];
 //let arr2=[,'four'];
 let arrconcat=[arr1,arr2];
 let arrconcat2=[...arr1, ...arr2,'hahaha'];
 let [a,b,c=5,...etc]=arrconcat2;

 let obj1={ft:1, sd:2, od:3};
 let obj2={te:4, fh:5, od:-1};
 let com1= Object.assign({},obj1,obj2);
 let com2= Object.assign({},obj2,obj1);
console.log("ojb1: ");
console.log(obj1);
console.log("obj2: ");
console.log(obj2);
console.log("com1: ");
console.log(com1);
console.log("com2: ");
console.log(com2);
console.log("obj1: ");
console.log(obj1);
console.log("obj2: ");
console.log(obj2);
console.log("====================");
console.log("obj2: ");
console.log(obj2);
console.log("====================");
let com3= Object.assign(obj2,obj1);
console.log("obj2: ");
console.log(obj2);
console.log("com3: ");
console.log(com3);


function App() {
 
  return (
    <div className="App">
        <div className="black-nav">
            <div>전개 연산자</div>
            </div><br/>
      {arrconcat}<br/>
      {arrconcat[0]}<br/>
      {arrconcat[1]}<br/><hr/>
      {arrconcat2}<br/>
      {arrconcat2[0]}<br/>
      {arrconcat2[1]}<br/><hr/>
      {a},{b},{c},{etc},{etc[0]},{etc[1]}<br/>
      
        </div>
  );
}

export default App;
