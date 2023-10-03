import React from 'react'
import styled from "styled-components";
import { Navbar } from './Navbar';


const Maindiv = styled.p`

`

export const Home = () => {
  return (
    <><Navbar></Navbar>
    <Maindiv className='bg-dark'>
      <div className='container bg-dark hero-section text-white main-div'>
        <div className='row pt-5'>
          <div className='col-sm-6 pt-5'>
            <h6 className='pt-5'>grab your smartphone, prepare your appetite, and embark on a captivating journey through these food quotes and captions that are sure to tantalize not only your followers' taste buds but also their imagination.</h6>
            <button type="button" class="btn btn-outline-warning Reserve-button mt-5">Reserve a Table</button>
          </div>
        </div>
      </div>
    </Maindiv></>
    
  )
}
