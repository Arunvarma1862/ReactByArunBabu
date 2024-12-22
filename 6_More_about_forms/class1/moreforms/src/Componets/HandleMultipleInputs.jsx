import React, { useState } from "react";
import { SiGnuprivacyguard } from "react-icons/si";
import { toast} from 'react-toastify';

//show toast message if input field is empty
//show toast message if password and confirm not password
// show if leave input with red border
// show password and confirm password not match on live
// clear input field
//

function HandleMultipleInputs() {

    const [errors,setErrors]=useState({
        firstName:false,
        lastName:false
    })

    const handleBlur = (e) => {
        const { id, value } = e.target;
        // Mark as error if the input is empty
        if (value.trim() === '') {
          setErrors((currentState) => ({
            ...currentState,
            [id]: true,
          }));
        }
      };

      const [error, setError] = useState('');
      const[formdata,setFormData]=useState({
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:"",
        confirmPassword:"",
        phone: "",
        address:""
    })
    const {firstName,lastName,userName,email,password,confirmPassword,phone,address}=formdata

    function handleChange(e){
       setFormData((currentState)=>{
        return {...currentState,[e.target.id]:e.target.value}
       });

       setErrors((currentState) => ({
        ...currentState,
        [e.target.id]: false,
      }));
      
      // Real-time validation for confirmPassword
    if (e.target.id === 'confirmPassword') {
        if (e.target.value !== password) {
          setError('Passwords do not match');
        } else {
          setError('');
        }
      }
    }
    function handleSubmit(e){
        e.preventDefault();
        if(firstName.trim().length === 0  || lastName.trim().length ===0  || userName.trim().length===0 || email.trim().length===0 || password.trim().length===0 || confirmPassword===0 || phone.length===0 || address.trim().length ===0){
            toast.info("please fill the input",{
                autoClose:2000
            });
            return;
        }
        if(password !== confirmPassword){
            toast.error("password and confirm password not match",{
                autoClose:2000
            });
            return;
        }
        console.log(formdata)
        console.log("Form Submitted"); 
        setFormData({
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        password:"",
        confirmPassword:"",
        phone: "",
        address:""
       }) 
       setErrors({
        firstName: false,
        lastName: false,
      });

      setError('');
    }
  return (
    <form action="" style={{margin:"5px"}} onSubmit={handleSubmit}>
      <h1>Form</h1>
         <div className="formGroup">
           <label htmlFor="firstName">FirstName</label><br></br>
           <input type="text" name="firstName" id="firstName"  value={firstName} onChange={handleChange}
           onBlur={handleBlur}
           style={{
            border: errors.firstName ? '2px solid red' : '1px solid #ccc',
          }}
        />
        {errors.firstName && <p style={{ color: 'red' }}>First name is required</p>}
        </div>
        <div className="formGroup">
           <label htmlFor="lastName">LastName</label><br></br>
           <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleChange} />
        </div>
        <div className="formGroup">
            <label htmlFor="userName">UserName</label><br></br>
            <input type="text" name="userName" id="userName" value={userName} onChange={handleChange}  />
        </div>
        <div className="formGroup">
           <label htmlFor="email">Email</label><br></br>
           <input type="email" name="email" id="email" value={email} onChange={handleChange} />     
        </div>
        <div className="formGroup">
           <label htmlFor="password">password</label><br></br>
           <input type="password" name="password" id="password" value={password} onChange={handleChange} />
        </div>
        <div className="formGroup">
           <label htmlFor="confirmPassword">confirmPassword</label><br></br>
           <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={handleChange} />
           {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className="formGroup">
            <label htmlFor="phone">phone</label><br></br>
            <input type="number" name="phone" id="phone" value={phone} onChange={handleChange}  />
        </div>
        <div className="formGroup">
           <label htmlFor="address">address</label><br></br>
           <textarea name="address" id="address" rows={2} cols={50} value={address} onChange={handleChange} ></textarea>
        </div>
        <input type="submit" value="signUp" style={{marginTop:"1rem"}} />
      
    </form>
  );
}

export default HandleMultipleInputs;
