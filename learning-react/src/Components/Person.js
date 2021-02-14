import React from "react";

export const Person = function Person({ person }) {
  return (
    <div id={person.id}>
      I am {person.name} and I am {person.age} years old, and I know{" "}
      {person.skill}
    </div>
  );
};
