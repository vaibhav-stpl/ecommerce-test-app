import React from "react";
import { Button } from "react-bootstrap";
import "./index.scss";
const ThankyouSection = (props) => {
  console.log(">>>>>>>>>>>>>>props Thankyou page", props);
  return (
    <div className={"container"}>
      <div className="jumbotron text-center">
        <h1 className="display-3">Thank You For Shouping With us!</h1>
        <p className="lead">
          Do follow us on instagram and facebook for more insteresting updates!!
        </p>
        <hr />
        <Button className={"go-back"} onClick={() => props.history.push("/")}>
          Shop more :)
        </Button>
      </div>
    </div>
  );
};

export default ThankyouSection;
