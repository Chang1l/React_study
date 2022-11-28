import './App.css';
import logo from './logo.svg';
import {useState} from 'react';

function SubCon (props){
    let [likecnt, likecntModi] = useState(0);
    return(
        <>
        <div className='itemDiv'>
        <div className='subDiv'>
            <img src={logo} className="App-logo" alt="logo" /><br />
            <p>리액트 강의 {props.item}</p>
            <span className="likeCnt" onClick={()=>{likecntModi(++likecnt)}}>♥ {props.str} {likecnt}</span>
        </div>
        </div>
        </>
    )
}

export default SubCon;