import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage=()=>{
    const [email,setEmail]= useState('');
    const navigate = useNavigate()
    const [password,SetPassword]=useState('');
     useEffect(() => {
       let auth = localStorage.getItem("user")   
       if(auth){
        navigate("/product")
       }
    });
     const handleData = async ()=>{
        // console.log("email password",email,password)
        let result = await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.log(result)
        if(result.auth){
            localStorage.setItem("user",JSON.stringify(result.user));
            localStorage.setItem("token",JSON.stringify(result.auth))
            navigate("/product")
        }
        else{
            alert("please enter your correct credential ")
        }
     }
    return(
        <div className="login">
            <h1 className="log-head">login </h1>
            <input className='input-box' onChange={(e)=>{setEmail(e.target.value)}} value={email} type="email" placeholder='Enter Your Email' />
            <input className='input-box' onChange={(e)=>{SetPassword(e.target.value)}} type="password" placeholder='Enter Your Password' />
            <button onClick={handleData} className='input-box' >Login In</button>
        </div>
    )
}
export default LoginPage; 