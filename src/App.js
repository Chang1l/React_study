import './App.css';
import React,{useState} from 'react';
import { Button,Collapse,Card } from 'react-bootstrap';
function App(){
  const[open,setOpen]=useState(false);

  return(
    <div className="App">
        <Button onClick={()=> setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={true}>click
        </Button>
   

    <div style={{minHeight:'150px'}}>
      <Collapse in={open} dimension="width">
        <div id="example-collapse-text">
          <Card body style={{width:'400px'}}>
          꽁기깅깅깅공강강꽁기깅깅꽁기깅강
          </Card>
        </div>

      </Collapse>

    </div>
    </div>

  );
}

export default App;
