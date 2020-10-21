import React, { Component } from "react";
import "./Homepage.css";
import Button from "./Button";
class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <h1>Quiz App</h1>
        <Button className="Homepage_button"></Button>
      </div>
    );
  }
}
export default Homepage;
