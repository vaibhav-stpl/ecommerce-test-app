import React, { Fragment, useRef, useState } from "react";
import {
  Navbar,
  Button,
  Popover,
  Col,
  Row,
  Badge,
  Overlay,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Assects/Images/logo.svg";
import cakrtImg from "../../Assects/Images/cart.svg";
import userImg from "../../Assects/Images/user.svg";
import searchImg from "../../Assects/Images/search.svg";
import "./index.scss";
import CheckoutModal from "../../Component/Products/checkoutModal";

const DeafaultHeader = (props) => {
  const { cartCount, productList, handleRemoveItem } = props;
  const [openCheckout, setOpenCheckout] = useState(false);
  const [openCardBox, setOpenCardBox] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  let totalPrice = 0;

  const handleClick = (event) => {
    setOpenCardBox(!openCardBox);
    setTarget(event.target);
  };

  const popoverBottom = (
    <Popover id="popover-positioned-bottom">
      {productList && productList.length
        ? productList.map((data, index) => {
            totalPrice += parseFloat(data.price);
            return (
              <Row className={"p-1 m-0 cart-box"} key={index}>
                <Col md={4} className={"pl-0"}>
                  <img
                    className={"product-img"}
                    src={data.image}
                    width={"100%"}
                    alt={"img"}
                  />
                </Col>
                <Col md={8} className={"p-0"}>
                  <div className={"d-flex justify-content-between"}>
                    <div>
                      <b>{data.vendor}</b>
                      <br />
                      <span>
                        <small>{data.tag}</small>
                      </span>
                      <br />
                      <br />
                      <div className={"d-flex justify-content-between"}>
                        <div>
                          <Badge variant="secondary">Size: {data.size}</Badge>
                        </div>
                        <div>
                          <Badge variant="secondary">QTY: 1</Badge>
                        </div>
                      </div>
                    </div>
                    <div className={"mr-1 text-right pl-2"}>
                      <span>
                        <b>Price ${data.price}</b>
                      </span>
                    </div>
                  </div>
                </Col>
                <Col md={"12 p-2"}>
                  <Button
                    onClick={() => handleRemoveItem(data.id, data.size)}
                    size={"sm"}
                    className={"remove-btn"}
                  >
                    {" "}
                    Remove Item
                  </Button>
                </Col>
              </Row>
            );
          })
        : null}
      <div className={"d-flex justify-content-between p-1 cart-box"}>
        <div>
          <div>Total Item:</div>
          <div>Sub Total:</div>
          <div>Discount:</div>
          <div>Total Amount:</div>
        </div>
        <div className={"text-right"}>
          <div>
            <b>{productList.length}</b>
          </div>
          <div>
            <b>${totalPrice.toFixed(2)}</b>
          </div>
          <div>10%</div>
          <div>
            <b>${(totalPrice - totalPrice * 0.1).toFixed(2)}</b>
          </div>
        </div>
      </div>
      <Col md={"12 p-2 justify-content-center text-center mb-2"}>
        <Link
          onClick={() => setOpenCardBox(false)}
          to={"/checkout"}
          className={"checkout-btn"}
        >
          {" "}
          Checkout
        </Link>
      </Col>
    </Popover>
  );
  return (
    <Fragment>
      <Navbar
        bg="light"
        variant="light"
        className={"justify-content-between custom-menu"}
      >
        <Navbar.Brand className={"logo"}>
          <img src={logo} alt={"img"} width={"100%"} height={"auto"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className={"d-flex mobileHide"}>
          <Link className={"nav-link"} to={"/"}>
            Shop
          </Link>
          <Link className={"nav-link"} to={"/"}>
            About Us
          </Link>
          <Link className={"nav-link"} to={"/"}>
            Our Store
          </Link>
          <Link className={"nav-link"} to={"/"}>
            Contact us
          </Link>
        </div>
        <div className={"cart-details"}>
          <Link className={"nav-link"} to={"/"}>
            <img src={userImg} alt={"img"} width={40} />
          </Link>
          <Link className={"nav-link"} to={"/"}>
            <img src={searchImg} alt={"img"} width={40} />
          </Link>
          <div className={"nav-link"}>
            <div ref={ref}>
              <img
                src={cakrtImg}
                alt={"img"}
                width={40}
                onClick={handleClick}
              />
              {productList && productList.length ? (
                <Overlay show={openCardBox} target={target} placement="bottom">
                  {popoverBottom}
                </Overlay>
              ) : null}
            </div>
            <span className={"cart-item"}>{cartCount}</span>
          </div>
        </div>
      </Navbar>
      <div className={"reffer-invite"}>
        <div className={"invite-friend"}>
          <span>
            Invite friends to Big Fashion Festival & get up to $150 MynCash for
            every person who visits
          </span>{" "}
          <Button size={"sm"} className={"invite-btn"}>
            Invite Now
          </Button>
        </div>
      </div>
      <CheckoutModal
        openCheckout={openCheckout}
        handleCloseModal={() => setOpenCheckout(!openCheckout)}
      />
    </Fragment>
  );
};

export default DeafaultHeader;
