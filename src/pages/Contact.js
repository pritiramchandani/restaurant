import React from 'react'
import { Navbar } from './Navbar'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faMinus } from '@fortawesome/free-solid-svg-icons'

const Maindiv = styled.p``

export const Contact = () => {
  return (
    <>
      <Navbar></Navbar>
      <Maindiv className='bg-dark'>
        <firstsection className='text-white'>
          <p className='text-center fs-5'>
            <FontAwesomeIcon icon={faMinus} className=' fa-minus pt-2 pe-2' />
            Contact Us
            <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 ps-2' />
          </p>
        </firstsection>

        <secondsection>
          <div className='container'>
            <div className='row'>
            <div className='col-sm-6 pt-5'>
              <div class="d-flex">
                <div class="p-2 flex-fill">
                  <p className=' address  ps-4 fs-5'>
                    <FontAwesomeIcon icon={faMinus} className='fa-minus pe-2 ' />
                    Address</p>
                    <p className='text-white ps-3'>24 Dovercroft pl SE,Calgory Canada</p>
                    {/*  */}
                    <p className=' address pt-4  ps-4 fs-5'>
                    <FontAwesomeIcon icon={faMinus} className='fa-minus pe-2 ' />
                    Number</p>
                    <p className='text-white ps-3'>+91-7690960102</p>
                    {/*  */}
                    <p className=' address pt-4  ps-4 fs-5'>
                    <FontAwesomeIcon icon={faMinus} className='fa-minus pe-2 ' />
                    Schedule</p>
                    <p className='text-white ps-3'>Mon.-Fri.:8a.m-8p.m.</p>
                    <p className='text-white ps-3'>Sat.-Sun.:9a.m-7p.m.</p>
                </div>

              </div>
            </div>


            
          </div>
          </div>
        </secondsection>
      </Maindiv>
    </>

  )
}
