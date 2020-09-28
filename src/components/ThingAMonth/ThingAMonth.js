import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Card,
  CardTitle,
  CardBody,
  Button,
  CardFooter,
  CardImg,
  CardHeader,
  Col,
} from "shards-react";

const ThingAMonth = () => (
  <div data-testid="ThingAMonth" type="dark" theme="primary" expand="ld">
        <Card>
          <CardBody>
            <CardTitle>Thing A Month</CardTitle>
            <p>
              {" "}
              Starting in October I will begin posting a project a month. Below
              are some of the projects I have lined up.
            </p>
          </CardBody>
        </Card>
      <Container>
      <Row>
        <Col sm="12" md="4" lg="3">
        <br></br>
          <Card style={{ maxWidth: "300px" }}>
            <CardHeader>Card header</CardHeader>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
              <CardTitle>Lorem Ipsum</CardTitle>
              <p>Lorem ipsum dolor sit amet.</p>
              <Button>Read more &rarr;</Button>
            </CardBody>
            <CardFooter>Card footer</CardFooter>
          </Card>
        </Col>
        <Col sm="12" md="4" lg="3">
        <br></br>
          <Card style={{ maxWidth: "300px" }}>
            <CardHeader>Card header</CardHeader>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
              <CardTitle>Lorem Ipsum</CardTitle>
              <p>Lorem ipsum dolor sit amet.</p>
              <Button>Read more &rarr;</Button>
            </CardBody>
            <CardFooter>Card footer</CardFooter>
          </Card>
        </Col>

        <Col sm="12" md="4" lg="3">
        <br></br>
          <Card style={{ maxWidth: "300px" }}>
            <CardHeader>Card header</CardHeader>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
              <CardTitle>Lorem Ipsum</CardTitle>
              <p>Lorem ipsum dolor sit amet.</p>
              <Button>Read more &rarr;</Button>
            </CardBody>
            <CardFooter>Card footer</CardFooter>
          </Card>
        </Col>

        <Col sm="12" md="4" lg="3">
        <br></br>
          <Card style={{ maxWidth: "300px" }}>
            <CardHeader>Card header</CardHeader>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
              <CardTitle>Lorem Ipsum</CardTitle>
              <p>Lorem ipsum dolor sit amet.</p>
              <Button>Read more &rarr;</Button>
            </CardBody>
            <CardFooter>Card footer</CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

ThingAMonth.propTypes = {};

ThingAMonth.defaultProps = {};

export default ThingAMonth;
