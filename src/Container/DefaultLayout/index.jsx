import React, { Fragment, Suspense } from "react";
import Loader from "../../Component/Common/spinner";
import DeafaultHeader from "../DefaultHeader";
import Routes from "../../routesPath";
import { Route, Switch } from "react-router-dom";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { requestToAddCart } from "../../Redux/actions";
import Swal from "sweetalert2";

const DefaultLayout = (props) => {
  //Get data from reducer state
  const productReducer = useSelector((state) => state.productReducer);

  //Dispatching Actions
  const dispatch = useDispatch();
  const handleRemoveItem = (id, size) => {
    console.log("sizesize", size);
    const tempData = productReducer.cartProducts;
    const newProductsList = tempData.filter(function (item) {
      if (item.id === id && item.size === size) {
        return false;
      }
      return true;
    });
    Swal.fire({
      title: "Do you want to remove this Item?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Remove`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(requestToAddCart(newProductsList));
      } else {
        return false;
      }
    });
  };
  return (
    <Fragment>
      <DeafaultHeader
        cartCount={
          productReducer.cartProducts && productReducer.cartProducts.length
            ? productReducer.cartProducts.length
            : 0
        }
        productList={
          productReducer.cartProducts && productReducer.cartProducts.length
            ? productReducer.cartProducts
            : []
        }
        handleRemoveItem={(id, size) => handleRemoveItem(id, size)}
        {...props}
      />
      <Fragment>
        <div className={"component"}>
          <Suspense fallback={<Loader />}>
            <Switch>
              {Routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <route.component {...props} {...props} />
                    )}
                  />
                ) : null;
              })}
            </Switch>
          </Suspense>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default DefaultLayout;
