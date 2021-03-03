import React, { Component } from "react";

const Hello = () => {
  // React Component with JSX
  // return (
  //     <div className="dummyClass">
  //         <h1>Hello again</h1>
  //     </div>
  // )

  // React Component without using JSX
  return React.createElement(
    "div",
    {id: 'hello', className: 'dummyClass'}, 
    React.createElement("h1", null, "Hello")
  );
};

export default Hello;
