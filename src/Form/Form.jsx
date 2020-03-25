import React, { Component } from "react";

import styles from './Form.module.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedForm: null
    };
  }

  onSubmit = async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    this.setState({ submittedForm: data });
  };

  render() {
    return this.state.submittedForm ? (
      <div className={styles.submitText}>Thanks for your subscription! {this.state.submittedForm.get("email")}.</div>
    ) : (
      <form onSubmit={this.onSubmit}>
        <input className={styles.email} placeholder="Email Address *" required type="email" name="email" maxLength="50" pattern="^[^@ ]+@[\w\-]+(\.(?!(?:[^0-9]*[0-9]){3})[\w\-]{2,20})+$"/>
        <input className={styles.signup} type="submit" value="Sign up" />
      </form>
    );
  }
}
