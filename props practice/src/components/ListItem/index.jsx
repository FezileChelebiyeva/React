import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
const ListItemComp = ({ element }) => {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <Card style={{ width: "18rem", marginTop: "1rem" }}>
              <Card.Body>
                <Card.Title className="text-danger">{element.id}</Card.Title>
                <Card.Title>{element.name}</Card.Title>
                <Card.Text>{element.email}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListItemComp;
