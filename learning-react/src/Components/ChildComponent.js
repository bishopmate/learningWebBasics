import React from 'react';

export default function ChildComponent(props){
  const clickEventHandler = (child) => {
    props.greetHandler(child);
  }
  return(
   <div>
     <button onClick = { () => clickEventHandler("Sam")}>Greet Parent</button>
   </div>
 ) 
}