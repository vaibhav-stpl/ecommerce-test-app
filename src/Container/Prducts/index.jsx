import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestProductList } from "../../Redux/actions";
const Products = () => {
  //Initial state Data
  const [state, setState] = useState({
    productList: [],
  });

  //Dispatching Actions
  const dispatch = useDispatch();

  //Get data from reducer state
  const productReducer = useSelector((state) => state.productReducer);

  //Use Effect for initial page render
  useEffect(() => {
    try {
      dispatch(requestProductList());
    } catch (error) {
      console.log("Errrrrrrrrrrrr", error);
    }
  }, []);

  return (
    <div className={"container"}>
      <div className={"row"}>
        {productReducer.data && productReducer.data.length
          ? productReducer.data.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <div className={"col-md-3"}>
                    <Card className={"mb-2"}>
                      <Card.Img
                        variant="top"
                        src={data.image_src[0]}
                        height={"100%"}
                      />
                      <Card.Body>
                        <Card.Title>{data.vendor}</Card.Title>
                        <Card.Text>
                          <small>{data.name.substring("...", 32)}</small>
                        </Card.Text>
                        <Card.Text>
                          <b>{`$${data.price}`}</b>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </React.Fragment>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Products;
