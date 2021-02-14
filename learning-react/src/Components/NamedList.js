import React from "react";
import { Person } from "./Person";

function NamedList() {
  const names = ["Bruce", "Clark", "Diana"];
  const persons = [
    { id: 1, name: "Bruce", age: 30, skill: "React" },
    { id: 2, name: "Clark", age: 25, skill: "Angular" },
    { id: 3, name: "Diana", age: 28, skill: "Vue" },
  ];

  const personInfo = persons.map((person) => <Person person={person} />);
  return (
    <>
      {/* {personList} */}
      {personInfo}
    </>
  );
}

export default NamedList;
