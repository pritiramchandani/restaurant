// @flow 
import React, { useState } from 'react'
import styled from 'styled-components'
import toastr from "toastr";


const Maindiv = styled.div`
{
    overflow:hidden;
    height: 100vh;
    width:100%;
   
  }
  
  label{
    margin-top: 0.5rem;
    font-size: small;
  }
  
  input[type=text],input[type=email],input[type=password]{
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid gray;
    width: 300px;
  }
  
  .button{
    margin-top: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    text-align: center;
    border-radius: 5px;
    border: 1px solid gray;
   background-color: #F8B525;
   color: black;
   cursor: pointer;
   border: none;
  }
  
  .form{
    background-color:white;
    display: flex;
    flex-direction: column;
    justify-content: left;
    justify-items: flex-start;
    width: auto;
    padding: 30px;
    box-shadow: 2px 4px 10px rgba(0,0,0,0.7);
    border-radius: 5px;
  }
  
  .forget-password{
  
    float: right;
    text-decoration: none;
    cursor: pointer;
  }
  



`

const Link = styled.div``

export const Login = (props) =>{

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const submitForm = (event)=>{
    event.preventDefault();

    const newEntry = {email:email, password:password};

    toastr.success("Hello mere sonu");
    
}








  return (
        <div>
            <Maindiv className='login-div bg-dark'>
                <form action=""  onSubmit={submitForm}>
                    <div className='form'>
                        {/* <label>Username</label>
                <input type='text' name='user'/> */}

                        <label>Email</label>
                        <input type='email' name='email' value={email} onChange={(event) => setEmail(event.target.value)}/>

                        <label>Password</label>
                        <input type='password' name='pass1' value= { password} onChange={(event)=> setPassword(event.target.value)}/>

                        <label><Link to='' className='forget-password'>Forget Password</Link></label>

                        {/* <label>Confirm Password</label>
                <input type='password' name='pass2'/> */}

                        <label></label>
                       <button type='submit' className='button'>Login</button>
                    </div>
                </form>
            </Maindiv>
        </div>
    );
};