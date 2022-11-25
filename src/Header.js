import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import imgmain from './img/1.png';

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
  const productstyle = {
    
    width: "65%",
    margin: "0 auto"
    };

  function CarouselComp() {
    return (
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block "
            src={imgmain}
            alt="First slide"
            style={productstyle}
          />
          <Carousel.Caption>
            <h3>First slide img</h3>
            <p>test1</p>
          </Carousel.Caption>
        </Carousel.Item>
  </Carousel>
  
     
    );
  }


  function HeaderComp() {
    return (
        <>       
         <NavComp/>
          
        <Container>
        <CarouselComp/>
        </Container>
  
        </>

    );
  }
  export default HeaderComp;