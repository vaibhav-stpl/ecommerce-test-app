import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import ProductsComponent from "../../Component/Products";
import { requestProductList, requestToAddCart } from "../../Redux/actions";
import { showSuccess } from "../../Utils/Toaster";
import "./index.scss";
import Loader from "../../Component/Common/spinner";

const filters = [
  {
    name: "All Products",
    tag: "all products",
  },
  {
    name: "Tea Shirts",
    tag: "T-shirt",
  },
  {
    name: "Denim",
    tag: "Denim",
  },
  {
    name: "Sweatshirt",
    tag: "Sweat-shirt",
  },
  {
    name: "Polo Tee Shirt",
    tag: "Polo Tee Shirt",
  },
  {
    name: "Shirt",
    tag: "shirt",
  },
];

const Products = () => {
  //Initial state Data
  const [cartProduct, setProductToCart] = useState([]);

  const [numberProduct, setNumberProduct] = useState("");

  //Filter State
  const [filterBy, setFilterBy] = useState({
    name: "All Products",
    tag: "all products",
  });

  //Dispatching Actions
  const dispatch = useDispatch();

  //Get data from reducer state
  const productReducer = useSelector((state) => state.productReducer);

  //Use Effect for initial page render
  useEffect(() => {
    try {
      dispatch(requestProductList());
      setProductToCart(cartProduct);
    } catch (error) {
      console.log("Errrrrrrrrrrrr", error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (productReducer.data && productReducer.data.length) {
      if (filterBy.tag !== "all products") {
        const filterData = productReducer.data.filter(
          (item) => item.tag === filterBy.tag
        );
        setNumberProduct(filterData.length);
      } else {
        setNumberProduct(productReducer.data.length);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy]);

  //Use Effect for initial page render
  useEffect(() => {
    if (productReducer.data && productReducer.data.length) {
      setNumberProduct(productReducer.data.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productReducer]);

  //function for addind product to cart
  const handleAddToCart = (details) => {
    const { data, selectedSize } = details;
    try {
      let size = "";
      if (selectedSize === 38) {
        size = "XS";
      } else if (selectedSize === 39) {
        size = "S";
      } else if (selectedSize === 30) {
        size = "M";
      } else if (selectedSize === 44) {
        size = "L";
      } else if (selectedSize === 40) {
        size = "XL";
      } else if (selectedSize === 46) {
        size = "XXL";
      }

      const productDetails = {
        id: data.id,
        image: data.image_src[0],
        size,
        price: data.price,
        vendor: data.vendor,
        tag: data.name,
        selectedSize,
      };

      const cartData = cartProduct;

      const isAddedToCart = cartData.some(
        (item) =>
          parseInt(item.id) === parseInt(data.id) &&
          parseInt(item.selectedSize) === parseInt(selectedSize)
      );
      if (!isAddedToCart) {
        cartProduct.push(productDetails);
        setProductToCart(cartProduct);
        dispatch(requestToAddCart(cartProduct));
        showSuccess("Added To cart suceessfully");
      }
    } catch (error) {
      console.log(">>>>>>>>>>>>Error", error);
    }
  };
  return (
    <div className={"container"}>
      <div className={"mb-4"}>
        <h4 className={"mb-4"}>
          <b>All Products:</b>
          <span className="counter-color">({numberProduct} Products)</span>
        </h4>
        <div className={"row m-0"}>
          <h5 className={"mt-3 mobile-filter-text"}>
            <b>Filters:</b>
          </h5>{" "}
          {filters.map((data, index) => {
            return (
              <div
                className={`${
                  filterBy.name === data.name ? "filter-active" : "filter"
                } mr-2 ml-2 cursor-pointer`}
                key={index}
                onClick={() => setFilterBy(data)}
              >
                {data.name}
              </div>
            );
          })}
        </div>
      </div>
      {!productReducer.isLoadingProduct ? (
        <div className={"row product-section"}>
          <Col sm={12} className={"top-border"}></Col>
          <ProductsComponent
            productList={
              productReducer.data && productReducer.data.length
                ? productReducer.data
                : []
            }
            handleAddToCart={(data) => handleAddToCart(data)}
            cartProduct={productReducer.cartProducts}
            filterBy={filterBy}
            isNoProductData={numberProduct !== 0 ? false : true}
            isLoadingProduct={productReducer.isLoadingProduct}
          />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
