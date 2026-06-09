import React, { useState } from 'react'

const Markgrade = () => {
    const [stud, setStud] = useState({studName : "", mark : ""})

    function handleChange(e){
        setStud({...stud, [e.target.name] : e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        const grade = document.getElementById("grade");

        if (stud.mark >= 90) {
            grade.innerText = "A Grade";
        } else if (stud.mark >= 75) {
            grade.innerText = "B Grade";
        } else if (stud.mark >= 50) {
            grade.innerText = "C Grade";
        } else if (stud.mark < 60 && stud.mark >= 0 ){
            grade.innerText = "fail";
        } else {
            grade.innerText = "Enter Valid Mark";
        }

    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="studName">Name</label>
            <input type="text" name='studName' onChange={handleChange} placeholder='Enter student Name' />

            <label htmlFor="mark">Mark</label>
            <input type="number" name='mark' onChange={handleChange} placeholder='Enter your mark'/>

            <button type='submit'>Submit</button>

            <h3 id="grade"></h3>
        </form>
    </>
  )
}

export default Markgrade