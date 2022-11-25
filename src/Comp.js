import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import goguma1 from './img/고구마.png';
import goguma2 from './img/고구마2.png';
import goguma3 from './img/고구마3.png';
import goguma4 from './img/고구마4.png';
import imgex from './img/1.png';
import imgmain from './img/3.png';
function NavComp() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">메뉴1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">메뉴2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">메뉴3</Nav.Link>
      </Nav.Item>
      </Nav.Item>
    </Nav>
  );
}



function CardComp() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgex} />
      <Card.Body>
        <Card.Title>헉</Card.Title>
        <Card.Text>
         !!!
        </Card.Text>
        <Button variant="primary">HUK</Button>
      </Card.Body>
    </Card>
  );
}


const productstyle = {
    
    width: "65%",
    margin: "0 auto"
    };


function CarouselComp() {
  return (
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block"
          src={imgmain}
          alt="First slide"
          style={productstyle}
        />
        <Carousel.Caption>
          <h3>First slide img</h3>
          <p>test1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={imgmain}
          alt="Second slide"
          style={productstyle}
             />

        <Carousel.Caption>
          <h3>Second slide img</h3>
          <p>test2</p>
        </Carousel.Caption>
      </Carousel.Item>
</Carousel>

   
  );
}


export {NavComp,CardComp, CarouselComp}