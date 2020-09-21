import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";
import { Nav, NavItem, NavLink, Navbar } from "shards-react";
import { Container, Row, Col } from "shards-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ReactGA from 'react-ga';
import BarnsleyFern from "./BarnsleyFern";
library.add(fab, fas);
ReactGA.initialize('UA-178650588-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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
            <Navbar type="dark" theme="secondary" expand="md">
              <Nav navbar className="mr">
                <NavItem>
                  <NavLink disabled href="#">
                    Conservation through IOT
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">
                    Remote Team Comradery
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">
                    Past Projects
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink disabled href="#">
                    <FontAwesomeIcon icon={["fab", "youtube-square"]} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">
                    <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="mailto">
                    <FontAwesomeIcon icon={["fab", "instagram-square"]} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/matthew-keen-6ba886/">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/keener2u">
                    <FontAwesomeIcon icon={["fab", "github-square"]} />
                  </NavLink>
                </NavItem>
                <NavLink
                  active
                  href="mailto:info@fractalfx.net?subject=FractalFX.net referral&body=Saw your website!"
                >
                  <FontAwesomeIcon icon={["fas", "envelope-square"]} />
                </NavLink>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
