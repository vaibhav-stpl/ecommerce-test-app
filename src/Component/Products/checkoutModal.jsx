import React, { Fragment, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./index.scss";

const CheckoutModal = (props) => {
  const { openCheckout, handleCloseModal } = props;
  return (
    <Modal show={openCheckout} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          Payment Details{" "}
          <img
            className="img-responsive pull-right"
            src="http://i76.imgup.net/accepted_c22e0.png"
            alt={"img"}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <div className="panel-body">
          <Form>
            <div className="row">
              <div className="col-xs-12">
                <div className="form-group">
                  <label for="cardNumber">CARD NUMBER</label>
                  <div className="input-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="cardNumber"
                      placeholder="Valid Card Number"
                      autocomplete="cc-number"
                      required
                      autofocus
                    />
                    <span className="input-group-addon">
                      <i className="fa fa-credit-card"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-7 col-md-7">
                <div className="form-group">
                  <label for="cardExpiry">
                    <span className="hidden-xs">EXPIRATION</span>
                    <span className="visible-xs-inline">EXP</span> DATE
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    name="cardExpiry"
                    placeholder="MM / YY"
                    autocomplete="cc-exp"
                    required
                  />
                </div>
              </div>
              <div className="col-xs-5 col-md-5 pull-right">
                <div className="form-group">
                  <label for="cardCVC">CV CODE</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="cardCVC"
                    placeholder="CVC"
                    autocomplete="cc-csc"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{ display: "none" }}>
              <div className="col-xs-12">
                <p className="payment-errors"></p>
              </div>
            </div>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckoutModal;
