// Task 1: Employee Registration Form Create a form with: Employee Name Department Salary 
// Requirements: Use useState(). Store submitted employee details in an array. 
// Display all employees below the form. Show total employee count.
//  Topics: useState, Form Handling, Array of Objects, map()

import React, { useState } from 'react'

const EmpRegist = () => {
    const [emp, setEmp] = useState({empName : "", deptSalary : ""})
    const [allEmp , setAllemp] = useState([])

    function handleChange(e){
        setEmp({...emp, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        setAllemp([...allEmp, emp])
        setEmp({empName : "", deptSalary : ""})

    }

  return (
    <>
        <h1>Employee Registration Form</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="empName">Employee Name</label>
            <input type="text" name='empName' value={emp.empName}  onChange={handleChange} />

            <label htmlFor="deptSalary">Department Salary</label>
            <input type="text" name='deptSalary' value={emp.deptSalary} onChange={handleChange} />

            <button type='submit'>Submit</button>
        </form>

         <div>
      <h3>Employee List</h3>

        {
            allEmp.map((emp , index)=>(
                <div key={index}>
                    <p>{emp.empName}</p>
                    <p>{emp.deptSalary}</p>
                </div>
            ))
        }
    </div>
    </>

  )
}

export default EmpRegist