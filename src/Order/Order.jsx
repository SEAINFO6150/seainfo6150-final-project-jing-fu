import React, { Component } from "react";

import OrderConfirmation from "./OrderConfirmation";
import OrderForm from "./OrderForm";


export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedForm: null,
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    this.setState({ submittedForm: data });
  };

  render() {
    return (
      <div >
        {this.state.submittedForm ? (
          <OrderConfirmation magazine={this.props.magazine} submittedForm={this.state.submittedForm}/>
        ) : (
          <OrderForm onSubmit={this.onSubmit} magazine={this.props.magazine}/>
        )}
      </div>
    );
  }
}

