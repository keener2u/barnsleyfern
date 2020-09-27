import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./App.css";
import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Collapse
} from "shards-react";

function MainContent(props) {
  return (
    <Collapse open={props.collapsed}>
    <Card theme="light">
      <CardBody>
        <CardTitle>Native Android Software Defined Radio</CardTitle>
        <iframe title="AOSP SDR"width="560" height="315" src="https://www.youtube.com/embed/LGtPD1jLRVI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <h5>This was my final capstone for my Master's in Information Security. In this project I developed, from scratch, a SDR radio application for Android AOSP to run replay atttacks against Family Radio Service. I ported the linux kernel module over to AOSP and then built the native service interface to communicate to the devices as well as the Android application that communicated to it with intents.</h5>
        <Button disabled>More coming soon! &rarr;</Button>
      </CardBody>
      
    </Card>
    </Collapse>
  );
}

export default MainContent;
