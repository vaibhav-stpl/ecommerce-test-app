import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { requestToAddCart } from "../../Redux/actions";
import "./index.scss";
const ThankyouSection = (props) => {
  //Dispatching Actions
  const dispatch = useDispatch();

  //Use Effect for initial page render
  useEffect(() => {
    try {
      dispatch(requestToAddCart([]));
    } catch (error) {
      console.log("Errrrrrrrrrrrr", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"container"}>
      <div className="jumbotron text-center">
        <h1 className="display-3">Thank You For Shoping With us!</h1>
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
