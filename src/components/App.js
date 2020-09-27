import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";
import { Container, Row, Col, Slider } from "shards-react";


import BarnsleyFern from "./BarnsleyFern";
import NavigationBar from "./NavigationBar"
import MainContent from "./MainContent"
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [limit, setLimit] = useState(10000)

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <BarnsleyFern width="640" height="425" limit={limit} />
            <Slider 
              onSlide={(e) => setLimit(parseFloat(e[0]))} range={{min:200, max:40000}}
              start={[limit]}
              connect={[true, false]}
            />
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
