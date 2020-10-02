import React from 'react';
import './App.css';
import {Button, ButtonGroup, Col, Container, Image, Row} from "react-bootstrap";

const App = () => {
  return (
    <Container fluid>
      <Row>
          <Col xs={6} md={4}>
              <Image src={require("./assets/img1.png")} rounded data-testid="img" thumbnail />
          </Col>
      </Row>
        <Row >
            <ButtonGroup>
                <Button variant="primary">Button 1</Button>
                <Button variant="primary">Button 2</Button>
                <Button variant="primary">Button 3</Button>
            </ButtonGroup>
        </Row>
    </Container>
  );
}

export default App;
