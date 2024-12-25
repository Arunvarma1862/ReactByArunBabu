import React, { useState } from 'react'
import { toast} from 'react-toastify';

function HandleMultiplInput2() {

    const[formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:"",
        confirmPassword:"",
        phone:"",
        address:""
    })
    const {firstName,lastName,userName,email,password,confirmPassword,phone,address}=formData

    const[passwordMatch,setPasswordMatch]=useState("");

    const [errors,setErrors]=useState({
        firstName:false,
        lastName:false,
        userName:false,
        email:false,
        password:false,
        confirmPassword:false,
        phone:false,
        address:false
    })

    function handleBlur(e){
        if(e.target.value.trim()===""){
            setErrors((currentState)=>{
                return {...currentState,[e.target.id]:true}
            })
        }
       
    }
    function handleChange(e){
        setFormData((currentState)=>{
            return {...currentState,[e.target.name]:e.target.value}
        })

        setErrors((currentState)=>{
            return {...currentState,[e.target.id]:false}
        })
       

        // Real-time validation for confirmPassword
        if(e.target.id ==="confirmPassword"){
            if(e.target.value !== password){
                setPasswordMatch("Password not Matched")
            }
            else{
                setPasswordMatch("")
            }
        }
      
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(firstName.trim().length ===0 || lastName.trim().length===0 || userName.trim().length===0 || email.trim().length===0 || password.trim().length===0 || confirmPassword.trim().length===0 || phone.trim().length===0 || address.trim().length===0){
            toast.info("Please fill the input",{
                autoClose:2000
            })
            return;
        }

        if(password !== confirmPassword){
            toast.error("Password and confirmPassword is not Matched!!!")
            return;
        }
        console.log(formData);
        console.log("Form submitted");
        setFormData({
            firstName:"",
            lastName:"",
            userName:"",
            email:"",
            password:"",
            confirmPassword:"",
            phone:"",
            address:""
        })
        setPasswordMatch('')

        setErrors({
            firstName:false,
            lastName:false,
            userName:false,
            email:false,
            password:false,
            confirmPassword:false,
            phone:false,
            address:false
        })
       
    }
  return (
    
    <form action="" style={{marginLeft:"1rem"}} onSubmit={handleSubmit}>
        <h1>Form</h1>
        <div className="formGroup">
            <label htmlFor="firstName">FirstName</label><br/>
            <input type="text" name='firstName' id='firstName' value={firstName} onChange={handleChange} onBlur={handleBlur} style={{border:errors.firstName?"2px solid red": "1px solid grey"}}/>
            {errors.firstName  && <p style={{color:"red"}}>First Name is required</p>}
            
        </div>
        <div className="formGroup">
            <label htmlFor="lastName">LastName</label><br/>
            <input type="text" name='lastName' id='lastName' value={lastName} onChange={handleChange} onBlur={handleBlur} style={{border:errors.lastName?"2px solid red": "1px solid grey"}}/>
            {errors.lastName  && <p style={{color:"red"}}>Last Name is required</p>}
        </div>
        <div className="formGroup">
            <label htmlFor="userName">UserName</label><br/>
            <input type="text" name='userName' id='userName' value={userName} onChange={handleChange} onBlur={handleBlur} style={{border:errors.userName?"2px solid red": "1px solid grey"}} />
            {errors.userName  && <p style={{color:"red"}}>User Name is required</p>}
        </div>
        <div className="formGroup">
            <label htmlFor="email">Email</label><br/>
            <input type="email" name='email' id='email' value={email} onChange={handleChange}onBlur={handleBlur} style={{border:errors.email?"2px solid red": "1px solid grey"}} />
            {errors.email  && <p style={{color:"red"}}>Email  is required</p>}
        </div>
        <div className="formGroup">
            <label htmlFor="password">Password</label><br/>
            <input type="password" name='password' id='password' value={password} onChange={handleChange} onBlur={handleBlur} style={{border:errors.password?"2px solid red": "1px solid grey"}} />
            {errors.password  && <p style={{color:"red"}}>password is required</p>}

        </div>
        <div className="formGroup">
            <label htmlFor="confirmPassword">ConfirmPassword</label><br/>
            <input type="password" name='confirmPassword' id='confirmPassword' value={confirmPassword} onChange={handleChange} onBlur={handleBlur} style={{border:errors.confirmPassword?"2px solid red": "1px solid grey"}}/>
            {passwordMatch && <p style={{color:"red"}}>{passwordMatch}</p>}
            {errors.confirmPassword  && <p style={{color:"red"}}>Confirm password is required</p>}
        </div>
        <div className="formGroup">
            <label htmlFor="phone">Phone</label><br/>
            <input type="number" name='phone' id='phone' value={phone} onChange={handleChange}onBlur={handleBlur} style={{border:errors.phone?"2px solid red": "1px solid grey"}} />
            {errors.phone  && <p style={{color:"red"}}>phone number is required</p>}
        </div>
        <div className="formGroup">
            <label htmlFor="address">Address</label><br/>
            <textarea name="address" id="address" rows={2} cols={40} placeholder='enter here' value={address} onChange={handleChange} onBlur={handleBlur} style={{border:errors.address?"2px solid red": "1px solid grey"}}></textarea>
            {errors.address  && <p style={{color:"red"}}>address is required</p>}
        </div>
        <input type="submit" value="signUp" />
    </form>
  )
}

export default HandleMultiplInput2