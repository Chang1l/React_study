import './App.css';
import React,{Component} from 'react';
import  ContentComp from './Comp';
import  FooterComp from './Footer';
import  HeaderComp from './Header';

class App extends Component{
  render(){

  return (
    <div className="App">
    
            <HeaderComp/>
           <ContentComp/>
           <FooterComp/>   
           </div>
  );
}
}

export default App;
