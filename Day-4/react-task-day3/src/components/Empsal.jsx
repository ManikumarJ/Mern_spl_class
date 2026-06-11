// Task 1: Employee Salary Filter (filter()) You have employee data. 
// const employees = [ { id: 1, name: "John", salary: 25000 }, 
//     { id: 2, name: "David", salary: 45000 },
//      { id: 3, name: "Sam", salary: 60000 }, 
//      { id: 4, name: "Peter", salary: 30000 } ]; 
// Task: Display only employees whose salary is greater than 40,000. 
// Show Name and Salary. Interview Focus: filter()

import React from 'react'

const Empsal = () => {
    const employees = [ 
        { id: 1, name: "John", salary: 25000 }, 
        { id: 2, name: "David", salary: 45000 },
         { id: 3, name: "Sam", salary: 60000 }, 
          { id: 4, name: "Peter", salary: 30000 }
     ]; 

      const filterEmp = employees.filter((empsal)=> empsal.salary >= 40000)

        
  return (
    <>
    {
        filterEmp.map((emp)=>(
            <div key={emp.id}>
                <h2> Name : {emp.name} | Salary : {emp.salary}</h2>
            </div>
        ))
    }
    </>
  )
}

export default Empsal