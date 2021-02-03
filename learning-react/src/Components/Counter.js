import React, { Component } from 'react';

export class Counter extends Component{
  constructor(props){
    super();
    this.state = {
      count : 0
    }
  }

  increment(){
    this.setState({
      count : this.state.count + 1
    },
    () => {
      console.log("this.state.count after Callback ", this.state.count);
    }
    );
    console.log("this.state.count before Callback (just after click to be precise)", this.state.count);
//     The first parameter is the updated state and the second parameter is the callback function to 
//     be executed after the state has been updated if it has been updated
  }

  increment2(){
    this.setState((prevState, props) => {
      return {
        count : prevState.count + 1
      }
    });
  }

  incrementer(){
    if(this.state.count % 2 === 0){
      this.increment();
    }else{
      this.increment2();
    }
  }
  render(){
    return(
      <>
        Count - {this.state.count} <br />
        <button onClick = { () => this.incrementer()}> Increment</button>
      </>
    );
  }
}

export default Counter;