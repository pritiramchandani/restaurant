// @flow 
import React, { useState } from 'react'
import styled from 'styled-components'
import toastr from "toastr";


const Maindiv = styled.div`

  height:100vh;
  background-color:black;


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
    width: 100%;
  }
  
  .login-button{
    margin-top: 0.8rem;
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
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: left;
    justify-items: flex-center;
    height:auto;
    width:28%;
    padding: 30px;
    box-shadow: 2px 4px 10px rgba(0,0,0,0.7);
    border-radius: 5px;
  }
  
  .forget-password{
    text-align:right;
    text-decoration: none;
    cursor: pointer;
  }
  



`

const Link = styled.div``

export const Login = (props) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const submitForm = (event) => {
    event.preventDefault();

    const newEntry = { email: email, password: password };

    toastr.success("Hello mere sonu");

  }








  return (

    <Maindiv>
      <form className='form mx-auto d-flex' action="" onSubmit={submitForm}>
        <div >
          {/* <label>Username</label>
                <input type='text' name='user'/> */}

          <label>Email</label>
          <input type='email' name='email' value={email} onChange={(event) => setEmail(event.target.value)} />

          <label>Password</label>
          <input type='password' name='pass1' value={password} onChange={(event) => setPassword(event.target.value)} />

          <label><Link to='' className='forget-password'>Forget Password</Link>

            <button type='submit' className='login-button'>Login</button>
          </label>

          {/* <label>Confirm Password</label>
                <input type='password' name='pass2'/> */}

        </div>
      </form>
    </Maindiv>



  );
};