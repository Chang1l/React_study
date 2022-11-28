import namu from './img/tree.jpg';
import './App.css';

function Title(){
   
    return(
        <>
            <div className='divTitle'><h2 className='hTitle'>TodoList  <a href="">메뉴1</a>  <a href="">메뉴2</a>  <a href="">메뉴3</a></h2></div>
            <div className='imgDiv'><img src={namu} /></div>
        </>
    );

}
      
export default Title;