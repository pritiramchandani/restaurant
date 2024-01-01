// @flow 
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import toastr from "toastr";
import 'toastr/build/toastr.css';


const Maindiv = styled.div`

    overflow:hidden;
    height: 100vh;
    background-color:#000;
    width:100%;
   
  
  
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
    width:100%;
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
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    flex-direction: column;
    justify-content: left;
    justify-items: flex-start;
    width:25%;
    padding: 30px;
    box-shadow: 2px 4px 10px rgba(0,0,0,0.7);
    border-radius: 5px;
  }

  @media(max-width:768px){
    .form{
      width:70%;
    }
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
const [isVisible, setVisible] = useState(false);

const navigator = useNavigate();

const submitForm = (event)=>{
    event.preventDefault();
    const newEntry = {email:email, password:password};

    axios.post('http://localhost:5000/login', newEntry)
    .then(function (response) {
      console.log(response);
      toastr.success(response.data.message);
      localStorage.setItem('token',response.data.token);
      navigator('/admin/dashboard');
    })
    .catch(function (error) {
      console.log(error);
      toastr.error(error.response.data.message);
    });

    
}


const toggle = () => {
  setVisible(!isVisible);
};

  return (
        <div>
            <Maindiv className='login-div bg-dark'>
                <form action=""  onSubmit={submitForm}>
                    <div className='form'>
                        {/* <label>Username</label>
                <input type='text' name='user'/> */}
                        <div className='form-control border-0'>
                          <label>Email</label>
                          <input type='email' name='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className='form-control border-0 align-items-center position-relative'>
                          <label>Password</label>
                          <input type={!isVisible ? "password" : "text"} name='pass1' value= { password} onChange={(event)=> setPassword(event.target.value)}/>
                          <span className="icon" onClick={toggle} style={{position: 'absolute',top: '50px', marginLeft:'-30px',cursor:'pointer,'}}> 
                            {isVisible ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                          </span>
                        </div>
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