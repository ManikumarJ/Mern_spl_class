import React, { useState } from 'react'

const FormValidation = () => {
    const [value , setValue] = useState({Email: "",password : "" })
    const [form , setForm] = useState([])
    function handleChange(e){
        setValue({...value,[e.target.name] : e.target.value})
    }
    function handlesubmit(e){
        e.preventDefault()
        if(value.Email === "")
        {
            alert("Email Required")
            return
        }
        if(!value.Email.includes("@")){
            alert("Enter valid email")
            return;
        }

        if(value.password === ""){
             alert("Password Required");
             return;
        }

        if(value.password.length < 6){
            alert("Password must contain at least 6 characters");
             return;
        }

        const updatedForm = [...form, value];
        setForm(updatedForm);
        console.log(updatedForm);

        setValue({Email: "",password : "" })
        alert("Login Successful");
        console.log(form);

    }
  return (
    <>

    <form onSubmit={handlesubmit}>
        <label htmlFor="email"></label>
        <input type="email"   placeholder='Enter your Email id'  name="Email" value={value.Email} onChange={handleChange}  />
    

        <label htmlFor="password"></label>
        <input type="password" placeholder='Enter your password' name="password" value={value.password} onChange={handleChange} />

        <button type='submit'>Submit</button>
    </form>
    
    </>
  )
}

export default FormValidation