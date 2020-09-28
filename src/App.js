import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";
import { Container, Row, Col, Slider } from "shards-react";


import BarnsleyFern from "./components/BarnsleyFern";
import NavigationBar from "./components/NavigationBar"
import PastProjects from "./components/PastProjects"
import Route from "./components/Route"
import IOT from "./components/IOT/IOT"
import Comradery from "./components/Comradery/Comradery"
import ThingAMonth from "./components/ThingAMonth/ThingAMonth"

function App() {

  const [limit, setLimit] = useState(10000)
  const [path, setPath] = useState("/")

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <BarnsleyFern width="640" height="425" limit={limit} />
            <Slider 
              onSet={(e) => setLimit(parseFloat(e[0]))} range={{min:200, max:40000}}
              start={[limit]}
              connect={[true, false]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavigationBar />
          </Col>
        </Row>
        <Row>
          <Col>
          <Route path="/PastProjects">
           <PastProjects />
          </Route>
          <Route path="/IOT">
           <IOT />
          </Route>
          <Route path="/Comradery">
           <Comradery />
          </Route>
          <Route path="/ThingAMonth">
           <ThingAMonth />
          </Route>
          <Route path="/">
            <div />
          </Route>
         </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
