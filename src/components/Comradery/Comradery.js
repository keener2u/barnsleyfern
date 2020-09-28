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
        <CardTitle>Value Proposition</CardTitle>
        <p>Many things that come natural in a colocated team become exponentially harder when working remote. The following are projects and ideas to help build team comaradery and run an agile team more efficiently</p>
        <Button disabled>Read more &rarr;</Button>
      </CardBody>
    </Card>
  </div>
);

Comradery.propTypes = {};

Comradery.defaultProps = {};

export default Comradery;
