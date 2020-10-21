import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={`${this.props.className}`}>Play</div>;
  }
}
