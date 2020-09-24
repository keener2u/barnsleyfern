import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";
import { Container, Row, Col } from "shards-react";


import BarnsleyFern from "./BarnsleyFern";
import NavigationBar from "./NavigationBar"
import MainContent from "./MainContent"
function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <BarnsleyFern width="640" height="425" />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavigationBar onPastProjectClick={() => setCollapsed(!collapsed)}/>
          </Col>
        </Row>
        <Row>
          <Col>
         <MainContent collapsed={collapsed}></MainContent>
         </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
