import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import './App.css';
import { Nav, NavItem, NavLink } from "shards-react";
import { Container, Row, Col} from "shards-react";
import BarnsleyFern from './BarnsleyFern';


function App() {
  return (
  <div className="App">
    <Container className="dr-example-container">
        <Row>
          <Col sm="12" lg="12"> <BarnsleyFern width="640" height="425"/></Col>
          </Row>
          <Row>
            <Col sm={{ size: 8, order: 2, offset: 2}}>
              <Nav>
                  <NavItem>
                    <NavLink active href="#">
                      Active
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink disabled href="#">
                      Disabled Link
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
      </Container>
  </div>
  );
}

export default App;
