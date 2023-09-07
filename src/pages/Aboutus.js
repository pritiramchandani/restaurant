import React from 'react'
import { Navbar } from './Navbar'
import { styled } from 'styled-components'





const Maindiv = styled.p``

export const Aboutus = () => {
  return (
    <><Navbar> </Navbar>
      <Maindiv className='bg-dark'>
        <firstsection className='text-white'>
          <h4 className='text-center'>About Us</h4>
        </firstsection>

        <secondsection>
          <div class="d-flex">
            <div class="p-2 bg-info flex-fill">
              <h5 className='container'>Why Dopamine</h5>
            </div>
            <div class="p-2 bg-warning flex-fill">
              <image src='/images/Desktop-1.jpg'></image>
            </div>
        
          </div>
        </secondsection>
      </Maindiv>
    </>

  )
}
