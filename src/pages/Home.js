import React from 'react'
import styled from "styled-components";
import { Navbar } from './Navbar';


const Maindiv = styled.p`

`

export const Home = () => {
  return (
    <><Navbar></Navbar>
    <Maindiv style={{backgroundImage:`url(${process.env.PUBLIC_URL+'/Desktop-1.jpg'})`,
  backgroundRepeat:'no-repeat', width:'100%'}}>
      <div className='container-fluid bg-dark hero-section text-white'>
        <div className='row'>
          <div className='col-sm-6'>
            <h6>grab your smartphone, prepare your appetite, and embark on a captivating journey through these food quotes and captions that are sure to tantalize not only your followers' taste buds but also their imagination.</h6>
          </div>
        </div>
      </div>
    </Maindiv></>
    
  )
}
