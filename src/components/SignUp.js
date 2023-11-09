import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


 const SignUp=()=>{
 const [name,Setname] = useState("");
 const [email,SetEmail] = useState("");
 const [password,SetPassword] = useState("")
  const navigate = useNavigate()
  const auth = localStorage.getItem("user");
  const collectData=async ()=>{
 console.warn(name,email,password);
 let result = await fetch("http://localhost:5000/register",{
  method:"post",
  body: JSON.stringify({name,email,password}),
  headers: {
    "Content-Type":"application/json"
  }
 });
 result = await result.json()
 console.log(result);
 localStorage.setItem("user",JSON.stringify(result.result));
 localStorage.setItem("token",JSON.stringify(result.auth));
 navigate("/product")
  }
 useEffect(()=>{
 if (auth){
  navigate("/product")
 }
 
 });

 
//  const onSubmit= ()=>{
//    const result= {"name":name,
//    "email":email,
//    "password":password}
//    localStorage.setItem("user",JSON.stringify(result));
   
//  }
    return(
        <div className="container">
            <h3 className="head">Register As a Contributor</h3> 
           
            <input type="text" value={name} onChange={(e)=>Setname(e.target.value)} placeholder='Enter Your Name' />
            <input type="email" value={email} onChange={(e)=>SetEmail(e.target.value)}  placeholder='Enter Your email' />
            <input type="password" value={password} onChange={(e)=>SetPassword(e.target.value)} placeholder='Enter Your Password' />
         <button className="btn" onClick={collectData}>Submit</button>
        </div>
        
    )
 };

 export default SignUp;