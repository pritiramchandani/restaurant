import React from 'react'
import styled from "styled-components";
import { Navbar } from '../components/Navbar';


const Maindiv = styled.div`
  height:100vh;
`

export const Home = () => {
  return (
    <><Navbar></Navbar>
      <Maindiv className='bg-dark bg-image'>
        <div className='container  hero-section text-white main-div'>
          <div className='row vh-100  align-items-center'>
            <div className='col-sm-6 pt-5'>
              <h6 className='pt-5 pe-4'>grab your smartphone, prepare your appetite, and embark 
              on a captivating journey through these food quotes and captions that are 
              sure to tantalize not only your followers' taste buds but also their imagination.</h6>
              <div className='mt-5'>
              <button type="button" className="btn btn-outline-warning Reserve-button mt-5">Reserve a Table</button>
              </div>
             
            </div>
          </div>
        </div>
      </Maindiv></>

  )
}
