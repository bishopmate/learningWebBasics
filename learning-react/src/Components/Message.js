import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor"
    };
    this.clickEventHandler = this.clickEventHandler.bind(this);
  }

  clickEventHandler() {
    if (this.state.message === "Welcome visitor") {
      this.setState({
        message: "Thanks for donating"
      });
    } else {
      this.setState({
        message: "Wow, you are so generous"
      });
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickEventHandler}> Donate </button>
      </>
    );
  }
}

export { Message };
