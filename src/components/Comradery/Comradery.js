import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  CardFooter,
  CardImg,
  Button
} from "shards-react";

const Comradery = () => (
  <div data-testid="Comradery">
     <Card>
      <CardBody>
        <CardTitle>Our Mission</CardTitle>
        <p>Harnessing the butterfly effect, small things can have a large effect on the world. Through the use of non-permanent installation automation devices and AI, we believe we can help renters save power, lowering their monthly costs, while helping conserve energy to save the environment.</p>
        <Button disabled>Read more &rarr;</Button>
      </CardBody>
    </Card>
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
  </div>
);

Comradery.propTypes = {};

Comradery.defaultProps = {};

export default Comradery;
