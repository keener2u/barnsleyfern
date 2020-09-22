import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";
import { Container, Row, Col } from "shards-react";


import BarnsleyFern from "./BarnsleyFern";
import NavigationBar from "./NavigationBar"

function App() {
  return (
    <div className="App">
      <Container className="dr-example-container">
        <Row>
          <Col>
            <BarnsleyFern width="640" height="425" />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavigationBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
