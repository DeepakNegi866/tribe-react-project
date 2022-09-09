import React from 'react'
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

function Registration() {
  const history=useNavigate();
    const initialValue={
        username:"",
        email:"",
        pnumber:"",
        address:"",
        password:"",
        cpassword:""
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
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if(!values.pnumber)
        {
            errors.pnumber="Phone number is requird";
        }
        else if(values.pnumber.length>10)
        {
            errors.pnumber="The Phone number is too long";
        }
        if(!values.address)
        {
            errors.address="Address is requird";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.cpassword) {
            errors.cpassword = "Confirm Password is required";
          }
        else if(values.password!==values.cpassword)
        {
            errors.cpassword="Please confirm the Confirm password";
        }
        return errors;
      };

    const submitHandler=(e)=>{
        e.preventDefault();
        setFormErrors(validate(info));
        setIsSubmit(true);
        
        }
        
        useEffect(() => {
            console.log(formErrors);
            if (Object.keys(formErrors).length === 0 && isSubmit) {
              console.log(info);
              history("/login");
            }
          });
        

  return (
    <>
     <form className='d-flex justify-content-center mt-2 form' onSubmit={submitHandler}>
        <div className="row align-items-center col-4">
        <div className=" col-auto">
    <label for="exampleInputName1" className="form-label">Full Name</label>
    <input type="text"  className="form-control input" name="username"  value={info.username} onChange={inputHandler}/>
    <p style={{color:"red"}}>{formErrors.username}</p>
  </div>
  <div className=" col-auto">
    <label for="exampleInputEmail1" className="form-label" >Email address</label>
    <input type="email" className="form-control input" name="email" value={info.email} onChange={inputHandler} />
    <p style={{color:"red"}}>{formErrors.email}</p>
  </div>
  <div className=" col-auto">
    <label for="exampleInputPhone1" className="form-label">Phone Number</label>
    <input type="number" className="form-control input" name="pnumber"   value={info.pnumber} onChange={inputHandler}/>
    <p style={{color:"red"}}>{formErrors.pnumber}</p>
  </div>
  <div className=" col-auto">
    <label for="exampleInputAddress1" className="form-label">Address</label>
    <input type="text" className="form-control input" name="address"   value={info.address} onChange={inputHandler}/>
    <p style={{color:"red"}}>{formErrors.address}</p>
  </div>
  <div className=" col-auto">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control input" name="password"  value={info.password} onChange={inputHandler} />
    <p style={{color:"red"}}>{formErrors.password}</p>
  </div>
  <div className=" col-auto">
    <label for="exampleInputPassword2" className="form-label">Confirm Password</label>
    <input type="password" className="form-control input" name="cpassword" value={info.cpassword} onChange={inputHandler}  />
    <p style={{color:"red"}}>{formErrors.cpassword}</p>
  </div>
  <div>
  <button type="submit" className="btn btn-primary col-auto ms-3">Submit</button>
  </div>
  </div>
</form>
    </>
  )
}

export default Registration
