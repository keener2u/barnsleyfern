import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Row,
  Col,
  Container,
} from "shards-react";

const Comradery = () => (
  <div data-testid="Comradery">
    <Card theme="light">
      <CardBody>
        <CardTitle>Value Proposition</CardTitle>
        <p>
          Many things that come natural in a colocated team become exponentially
          harder when working remote. The following are projects and ideas to
          help build team comaradery and run an agile team more efficiently
        </p>
        <Button disabled>Read more &rarr;</Button>
      </CardBody>
    </Card>
    <Container>
      <Row>
        <Col sm="12" md="6" lg="6">
          <br></br>
          <Card>
            <CardBody>
              <CardTitle>Teams Plugin: Live Agenda and The Conch</CardTitle>
              <p>
                We have a layer 8 collision issue when communicating or
                videoteleconferencing. Based off Lord of the Flies, this is a
                team's plugin that enables people to click a button and enter a
                queue when they want to make a comment. At this point the
                current speaker will have a small amount of time to finish up
                their point before moving the conch to the next person.
              </p>
              <Button disabled>More to come &rarr;</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="6">
          <br></br>
          <Card>
            <CardBody>
              <CardTitle>Teams Plugin: Agile MMORPG Pong</CardTitle>
              <p>
                This will be plugin used during daily standups. Scrums teams
                will be pitted against each other. Each standup the pong ball
                will move one step. Each member will get a paddle and after
                their yesterday, today and blockers update they will get the
                chance to move their paddle for on iteration. Other upgrades may
                be given based off JIRA checkins and Github commits.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);
export default Comradery;
