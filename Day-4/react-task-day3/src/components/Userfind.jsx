// Task 2: Find a User by ID (find()) 
// const users = [ { id: 1, name: "Sudhan" }, 
//     { id: 2, name: "Kumar" }, 
//     { id: 3, name: "Ravi" } ];
//  Task: Find the user whose id is 2. 
//  Display user details. Interview Focus: find()


import React from 'react';

const Userfind = () => {
  const users = [
    { id: 1, name: "Sudhan" },
    { id: 2, name: "Kumar" },
    { id: 3, name: "Ravi" }
  ];

  const filterUser = users.find((user) => user.id === 2);

  return (
    <>
      <div>
        <h2>ID: {filterUser.id}</h2>
        <h2>Name: {filterUser.name}</h2>
      </div>
    </>
  );
};

export default Userfind;