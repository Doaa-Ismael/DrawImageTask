import React, {useState} from 'react';
import './App.css';
import {ButtonGroup, Col, Container, Image, Row} from "react-bootstrap";
import MainButton from "./components/MainButton";
const App = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const images = [
        require("./assets/img1.png"),
        require("./assets/img2.png"),
        require("./assets/img3.jpg")
    ];

    const showNextImage = () => currentImageIndex === images.length - 1 ? setCurrentImageIndex(0): setCurrentImageIndex(currentImageIndex+1);

  return (
    <Container fluid>
      <Row>
          <Col xs={6} md={4}>
              <Image src={images[currentImageIndex]} rounded data-testid="img" thumbnail role='button' onClick={() => showNextImage()} />
          </Col>
      </Row>
        <Row >
            <ButtonGroup>
                {images.map((img, index) => <MainButton
                    key={index}
                    title={`Button ${index+1}`}
                    id={`button-${index+1}`}
                    onClick={() => setCurrentImageIndex(index)}
                    active={ currentImageIndex === index }
                    /> )}
            </ButtonGroup>
        </Row>
    </Container>
  );
}

export default App;
