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
        <div class="panel-body">
          <Form>
            <div class="row">
              <div class="col-xs-12">
                <div class="form-group">
                  <label for="cardNumber">CARD NUMBER</label>
                  <div class="input-group">
                    <input
                      type="tel"
                      class="form-control"
                      name="cardNumber"
                      placeholder="Valid Card Number"
                      autocomplete="cc-number"
                      required
                      autofocus
                    />
                    <span class="input-group-addon">
                      <i class="fa fa-credit-card"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-7 col-md-7">
                <div class="form-group">
                  <label for="cardExpiry">
                    <span class="hidden-xs">EXPIRATION</span>
                    <span class="visible-xs-inline">EXP</span> DATE
                  </label>
                  <input
                    type="tel"
                    class="form-control"
                    name="cardExpiry"
                    placeholder="MM / YY"
                    autocomplete="cc-exp"
                    required
                  />
                </div>
              </div>
              <div class="col-xs-5 col-md-5 pull-right">
                <div class="form-group">
                  <label for="cardCVC">CV CODE</label>
                  <input
                    type="tel"
                    class="form-control"
                    name="cardCVC"
                    placeholder="CVC"
                    autocomplete="cc-csc"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row" style={{ display: "none" }}>
              <div class="col-xs-12">
                <p class="payment-errors"></p>
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
