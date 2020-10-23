import React, { Component } from "react";
import Button from "./Button";
import "./Homepage.css";
import data from "../questions.json";

class QuestionPage extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      currentQuestion: 0,
    };
  }
  componentDidMount() {
    console.log(data);
  }
  //Function to handle go to next question functionality in the UI
  nextClickHandler = () => {
    this.setState((prevState) => {
      if (prevState.currentQuestion < prevState.data.length - 1)
        return {
          currentQuestion: prevState.currentQuestion + 1,
        };
      else {
        alert("Questions Completed");
      }
    });
  };

  //Function to handle go to Previous question functionality in the UI
  prevClickHandler = () => {
    this.setState((prevState) => {
      if (prevState.currentQuestion > 0)
        return {
          currentQuestion: prevState.currentQuestion - 1,
        };
      else {
        alert("You are in first Question");
      }
    });
  };

  //Render Function to render the UI Components
  render() {
    return (
      <div className="QuestionPage">
        <div>
          <h1>Question</h1>
          <p>{data[this.state.currentQuestion].question}</p>
          <div>
            <div className="buttonTop">
              <Button
                className="QuestionPage_button"
                option={data[this.state.currentQuestion].optionA}
              ></Button>
              <Button
                className="QuestionPage_button"
                option={data[this.state.currentQuestion].optionB}
              ></Button>
            </div>
            <div className="buttonBottom">
              <Button
                className="QuestionPage_button"
                option={data[this.state.currentQuestion].optionC}
              ></Button>
              <Button
                className="QuestionPage_button"
                option={data[this.state.currentQuestion].optionD}
              ></Button>
            </div>
          </div>
          <div className="QuestionPage_button-next-previous">
            <Button
              id="previous"
              className="QuestionPage_button margin blue"
              option="Previous"
              onclick={this.prevClickHandler}
            ></Button>
            <Button
              id="next"
              className="QuestionPage_button margin green"
              option="Next"
              onclick={this.nextClickHandler}
            ></Button>
            <Button
              id="quit"
              className="QuestionPage_button margin red"
              option="Quit"
            ></Button>
          </div>
        </div>
      </div>
    );
  }
}
export default QuestionPage;
