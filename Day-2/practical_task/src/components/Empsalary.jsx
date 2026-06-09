// Question 4: Employee Salary Bonus Create a form with: Employee Name Salary Requirements: Salary > 30000 → Bonus 5000 Salary > 20000 → Bonus 3000 Otherwise → Bonus 1000 Display Bonus and Final Salary.

import React, { useState } from 'react'

const Empsalary = () => {
    const [emp, setEmp ] = useState({empName : "", salary : ""})
    const [updateEmp, setUpdateEmp] = useState([])
    function handleChange(e){
        setEmp({...emp, [e.target.name] : e.target.value })
    }
    function handlesubmit(e){

        // Salary > 30000 → Bonus 5000 
        // Salary > 20000 → Bonus 3000 
        // Otherwise → Bonus 1000 
        // Display Bonus and Final Salary

        e.preventDefault()
        let empSalary = Number(emp.salary)
        let finalSalary = 0
        const totsal = document.getElementById("totsal")

        if(empSalary > 30000){
            finalSalary = empSalary + 5000
            totsal.innerText = finalSalary
        }
        else if(empSalary > 20000){
            finalSalary = empSalary + 3000
            totsal.innerText = finalSalary
        }
        else {
            finalSalary = empSalary + 1000
            totsal.innerText = finalSalary
        }

        setUpdateEmp({...updateEmp, emp})
        setEmp({empName : "", salary : ""})


    }

  return (
    <>
    <form onSubmit={handlesubmit}>
        <label htmlFor="empName">Employee Name</label>
        <input type="text" name='empName' onChange={handleChange} />

        <label htmlFor="salary">Employee salary</label>
        <input type="number" name='salary' onChange={handleChange} />

        <button type='submit'>Submit</button>

        <p id='totsal'></p>

    </form>
    </>
  )
}

export default Empsalary