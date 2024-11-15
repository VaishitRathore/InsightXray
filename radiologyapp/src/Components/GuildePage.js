import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../GuidePage.css'; // Importing a custom CSS file

const GuidePage = () => {
  return (
    <Container fluid className="guide-page">
      <Row className="justify-content-center my-4">
        <Col xs={12} className="text-center">
          
          <p className="subtitle">Welcome! Follow these steps to get started:</p>
        </Col>
      </Row>
      <Row className="step-cards">
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card className="step-card">
            <Card.Body>
              <Card.Title className="step-title">Step 1: Upload an X-ray Image</Card.Title>
              <Card.Text>
                Click on the "Upload Image" button and select an X-ray image from your computer or device.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card className="step-card">
            <Card.Body>
              <Card.Title className="step-title">Step 2: Submit the Image</Card.Title>
              <Card.Text>
                Once you have selected an X-ray image, click the "Submit" button to send the image to our server.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <Card className="step-card">
            <Card.Body>
              <Card.Title className="step-title">Step 3: View the Results</Card.Title>
              <Card.Text>
                After submitting the image, view the results in the form of a message and image indicating if signs of pneumonia are present.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GuidePage;
