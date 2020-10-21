import React, { Component } from "react";
import Button from "./Button";
import "./Homepage.css";

class QuestionPage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div>
          <h1>Question</h1>
          <p>Which is the Only mammal that can't jump</p>
          <div>
            <div>
              <Button className="Homepage_button"></Button>
              <Button className="Homepage_button"></Button>
            </div>
            <div>
              <Button className="Homepage_button"></Button>
              <Button className="Homepage_button"></Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default QuestionPage;
