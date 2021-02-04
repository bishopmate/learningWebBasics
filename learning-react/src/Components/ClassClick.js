import react, { Component } from 'react';

export class ClassClick extends Component{
  
  clickHandler(){
    console.log("Class Button Clicked");
  };
  
  render(){
    return (
      <>
        <button onClick = { this.clickHandler }> ClassButton </button>
      </>
    );
  };

}