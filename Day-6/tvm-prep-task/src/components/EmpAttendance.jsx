// Task 2: Employee Attendance Tracker 
// Requirements: Employee Name Check In Time Check Out Time Attendance Status
//  Features: Present Employees Absent Employees Total Present Count Search Employee

import React, { useState } from 'react'

const EmpAttendance = () => {
    const employees = [
        {
            id : 1,
            name : "ManikumarJ",
            checkIn : "09.00 Am",
            checkout : "6:00 PM"
        },
         {
            id : 2,
            name : "Vimal",
            checkIn : "10.00 Am",
            checkout : "8:00 PM"
        },
         {
            id : 3,
            name : "DhanushKanth",
            checkIn : "",
            checkout : ""
        },
         {
            id : 4,
            name : "Ashika",
            checkIn : "08.00 Am",
            checkout : "5:00 PM"
        },

    ]

    const [search , setSearch] = useState("")

    const filteredEmployee = employees.filter((e)=>
        e.name.toLowerCase().includes(search.toLowerCase())
    )

    const totpresentCount = employees.filter((e)=>e.checkIn !== "").length
    // console.log(totpresentCount);
    
  return (
    <>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} name='search' placeholder='Search Employee....'/>

    <table border="5">
        <thead>
            <tr>
                <th>Employee Name</th>
                <th>Check-In</th>
                <th>Check-Out</th>
            </tr>
        </thead>
        <tbody>
            {
                filteredEmployee.map((emp)=>(
                    <tr key={emp.id}>
                        <td>{emp.name}</td>
                        <td>{emp.checkIn}</td>
                        <td>{emp.checkout}</td>
                    </tr>
                ))
            }
        </tbody>
        <tfoot>
            <tr>
                <td>Present Employee Count : {totpresentCount}</td>
            </tr>
        </tfoot>
 
    </table>

    </>
  )
}

export default EmpAttendance