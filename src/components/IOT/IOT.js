import React from "react";
import { Card, CardTitle, CardBody, Button } from "shards-react";

const IOT = () => (
  <div data-testid="IOT">
    <Card theme="light">
      <CardBody>
        <CardTitle>Value Proposition</CardTitle>
        <p>
          Harnessing the butterfly effect, small things can have a large effect
          on the world. Through the use of non-permanent installation automation
          devices and AI, we believe we can help renters save power, lowering
          their monthly costs, while helping conserve energy to save the
          environment.
        </p>
        <Button disabled>Read more &rarr;</Button>
      </CardBody>
    </Card>
  </div>
);
export default IOT;
