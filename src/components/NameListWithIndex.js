// List Rendering using Index as Key Anti-pattern - Tutorial 19
// Map() uses 2 parameters, Index as 2nd paramter
// Using the Index as a key "will cause some serious UI issues"
import React from "react";
import Person from './Person'

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];

  const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
  return <div>{nameList}</div>;
}

export default NameList;
