// @flow 
import React, { useState } from 'react'
import styled from 'styled-components'
import toastr from "toastr";


const Maindiv = styled.div``

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
            <Maindiv className='main-div bg-dark'>
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
                       <button type='submit' className='button' >Login</button>
                    </div>
                </form>
            </Maindiv>
        </div>
    );
};