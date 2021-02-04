import React, { Component } from 'react'

export class EventBind extends Component {
  
  constructor (props) {
    super(props);

    this.state = {
      message : 'Hey, ya!',
      message2 : 'Ciao (Hello)'
    }

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      ...this.state,  // I know I write cool code too (It's Object Destructuring)
      message : 'Bye'
    });
  }
  // A neat trick from ReactJS Docs in clickHandler2, no need to bind this(Class's this) to the method
  // https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding

  clickHandler2 = () => {
    this.setState({
      ...this.state,
      message2 : "Ciao (Goodbye)"
    
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div><br/>
        <button onClick = {this.clickHandler}> Click (English)</button>      
        <br/>
        <div>{this.state.message2}</div><br/>
        <button onClick = {this.clickHandler2}> Click (Spanish) </button>
      </div>
    )
  }
}     

export default EventBind
