import React from 'react';

function NamedList(){
  const names = ['Bruce', 'Clark', 'Diana']
  const persons = [
    { id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    { id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    { id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]

  const personList =  names.map(name => { return <div> {name} </div>});
  const personInfo = persons.map(person => {  
    return (
      <div key = {person.id}>
        I am {person.name} and I am {person.age} years old. I know {person.skill}
      </div>
    ) });

  return(
    <>
      {/* {personList} */}
      {personInfo}
    </>
  )

}

export default NamedList;
