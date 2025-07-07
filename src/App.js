import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Container, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="mt-4">
          <h1 className="text-center">Welcome to My Card Gallery</h1>

          {/* Card Row */}
          <Row className="mt-4">
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg" />
                <Card.Body>
                  <Card.Title>Card One</Card.Title>
                  <Card.Text>This is the first card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg" />
                <Card.Body>
                  <Card.Title>Card Two</Card.Title>
                  <Card.Text>This is the second card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg" />
                <Card.Body>
                  <Card.Title>Card Three</Card.Title>
                  <Card.Text>This is the third card.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;

