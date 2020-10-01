import React from "react";
import {
  Container,
  Row,
  Card,
  CardTitle,
  CardBody,
  Button,
  CardHeader,
  Col,
} from "shards-react";

const ThingAMonth = () => (
  <div data-testid="ThingAMonth" type="dark" theme="primary" expand="ld">
    <Card theme="light">
      <CardBody>
        <CardTitle>Thing A Month</CardTitle>
        <p>
          {" "}
          Starting in October I will begin posting a project a month. Below are
          some of the projects I have lined up.
        </p>
      </CardBody>
    </Card>
    <Container>
      <Row>
        <Col sm="12" md="4" lg="3">
          <br></br>
          <Card>
            <CardHeader>September</CardHeader>
            <CardBody>
              <CardTitle>Fractal FX Portfolio</CardTitle>
              <p>
                Setup CI/CD pipeline with Azure Static pages and built out this
                site hosted on Azure. Update the Barnsley component to take user
                input with a slider. Built initial navigation.
              </p>
              <Button href="https://github.com/keener2u/barnsleyfern">Done &rarr;</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="4" lg="3">
          <br></br>
          <Card>
            <CardHeader>October</CardHeader>
            <CardBody>
              <CardTitle>Teams: Agenda and Conch</CardTitle>
              <p>
                We have a layer 8 collision problem with video conferencing.
                This will be plugin to help run a virtual meeting and minimize
                people needing to be agressive to get their point across.
              </p>
              <Button disabled>More to come &rarr;</Button>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="4" lg="3">
          <br></br>
          <Card>
            <CardHeader>November</CardHeader>
            <CardBody>
              <CardTitle>CoinPCB Refactor</CardTitle>
              <p>
                Refactor the ESP8266 CoinPCB to work with Mozilla IOT and Azure
                IOT. Refactor my roomba virtual wall code to work with Mozilla
                IOT.{" "}
              </p>
              <Button href="https://github.com/keener2u/CoinPCB">More to come &rarr;</Button>
            </CardBody>
          </Card>
        </Col>

        <Col sm="12" md="4" lg="3">
          <br></br>
          <Card>
            <CardHeader>December</CardHeader>
            <CardBody>
              <CardTitle>Coming Soon</CardTitle>
              <p>To Be Announced</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ThingAMonth;
