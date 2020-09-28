import React from "react";
import { Card, CardTitle, CardBody, Row, Col, Container } from "shards-react";

const Comradery = () => (
  <div data-testid="Comradery" style={{color: 'black'}}>
    <Card theme="light">
      <CardBody>
        <CardTitle>Value Proposition</CardTitle>
        <p>
          Many things that come natural in a colocated team become exponentially
          harder when working remote. The following are projects and ideas to
          help build team comaradery and run an agile team more efficiently.
        </p>
      </CardBody>
    </Card>
    <Container>
      <Row>
        <Col sm="12" md="6" lg="6">
          <br></br>
          <Card>
            <CardBody>
              <CardTitle>Teams Plugin: Live Agenda and The Conch</CardTitle>
              <p5>
                We have a layer 8 collision issue when using online tools. Based
                off Lord of the Flies, this is a Microsoft Teams plugin that
                enables people to click a button and enter a queue, when they
                want to make a comment in the conversation. Once queued the
                current speaker will have a small amount of time to finish up
                their point before the conch moves to the next person. This
                should enable fairness with online meetings and make sure the
                person comfortable with breaking into a conversation doesn't
                lead the chat.
              </p5>
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
