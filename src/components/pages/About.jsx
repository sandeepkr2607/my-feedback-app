import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card>
      <h1>This is about FeedBack</h1>
      <p>
        This is a react app to leave feedback for any kind of product or
        services
      </p>
      <p>Version 1.0</p>
      <p>
        <Link to="/">Go to home</Link>
      </p>
    </Card>
  );
};

export default About;
