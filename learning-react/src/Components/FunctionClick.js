import React from 'react';

export const FunctionClick = () => {
  function clickHandler (){
    console.log("Function Button Clicked");  
  }
  // NOTE : Event handler is a function and not a function call
  return(
    <button onClick = { clickHandler }> FunctionButton</button>
  );
}