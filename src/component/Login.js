import React from 'react'
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'

function Login() {

  const history=useNavigate();

    const initialValue={
        email:"",
        password:"",
   }
    const [info,setInfo] = useState(initialValue);

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const inputHandler=(e)=>{
        const {name,value}=e.target;
        setInfo({...info,[name]:value});
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };


    const submitHandler=(e)=>{
        e.preventDefault();
        setFormErrors(validate(info));
        setIsSubmit(true);
        history("/card");
        }
        
        useEffect(() => {
            console.log(formErrors);
            if (Object.keys(formErrors).length === 0 && isSubmit) {
              console.log(info);
            }
          });
        

  return (
    <>
    <form className='d-flex justify-content-center mt-4 form' onSubmit={submitHandler}>
        <div className="row align-items-center col-3">
  <div className="mb-2 col-auto">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control input" name='email' value={info.email} onChange={inputHandler} />
    <p style={{color:"red"}}>{formErrors.email}</p>
  </div>
  <div className="mb-2 col-auto">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control input" name='password' value={info.password} onChange={inputHandler} />
    <p style={{color:"red"}}>{formErrors.password}</p>
  </div>
  <div className="mb-2 form-check ms-3">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary col-auto ms-3">Login</button>
  </div>
</form>
    </>
  )
}

export default Login