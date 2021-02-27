// List Rendering using .map() method - Tutorial 17
// Use keys when using Lists. However, keys are not available in child componenents - Pass them as a separate prop
import React from "react";

function Person({person}) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
      </h2>
    </div>
  );
}

export default Person;