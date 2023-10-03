import React from 'react'
import { Navbar } from './Navbar'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { SwiperSlider } from '../components/SwiperSlider'

const Maindiv = styled.p``

export const Feedback = () => {
  return (
    <><Navbar></Navbar>
      {/* First section */}
      <Maindiv className='bg-dark'>
        <firstsection className='text-white '>
          <p className='text-center fs-5'>
            <FontAwesomeIcon icon={faMinus} className=' fa-minus pt-2 pe-2' />
            Feedback
            <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 ps-2' />
          </p>
        </firstsection>
            <SwiperSlider />

        <secondsection>
          
        </secondsection>

























      </Maindiv>

    </>

  )
}
