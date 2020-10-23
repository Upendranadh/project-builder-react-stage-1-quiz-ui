import React, { Component } from "react";

export default class Button extends Component {
  //Render Function to render Button Component on to the screen
  render() {
    /*conditinal rendering based on ID*/

    let id = this.props.id ? this.props.id : "";
    return (
      <div
        id={id}
        className={`${this.props.className}`}
        onClick={this.props.onclick}
      >
        {this.props.option}
      </div>
    );
  }
}
