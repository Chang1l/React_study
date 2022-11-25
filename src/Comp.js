
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function CardComp(props) {
  let str="좋아요";
  let [likecnt, likecntModi]=useState(0);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`img/${props.name}.png`} className="App-logo" />
      <Card.Body>
        <Card.Title>깜짝! {props.name}</Card.Title>
        <Card.Text>
        <span className="likeCnt" id={props.name} onClick={()=>{likecntModi(++likecnt)}}> ♥ {str} {likecnt}</span>
        </Card.Text>
    
      </Card.Body>
    </Card>
  );
}


function ContentComp(){

  let arr = [1,2,3,4,5,6];

  return(
      <Container>
          <Row className='justify-content-center ' >
          {arr.map((v, i) => {
            return(
              <Col md={4}><CardComp name={arr[i]}/> </Col>
            );
          }
   )}
          </Row>
        </Container>
  );
}


export default ContentComp;