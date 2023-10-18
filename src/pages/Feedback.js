import React from 'react'
import { Navbar } from '../components/Navbar'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { SwiperSlider } from '../components/SwiperSlider'

const Maindiv = styled.p``

const testimonials =
  [
    {
      name: "priti",
      review: "1234",
      image:"https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA=",
      rating:4
    },
    {
      name: "priti",
      review: "1234",
      image:"https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA=",
      rating:4
    },
    {
      name: "priti",
      review: "1234",
      image:"https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA=",
      rating:4
    },
    {
      name: "priti",
      review: "1234",
      image:"https://media.istockphoto.com/id/1318928248/photo/portrait-of-a-young-man.jpg?s=612x612&w=0&k=20&c=ayy0fWfzLoC20BlYXDQmle1vz0a9Qrv8ssSwE3dLpzA=",
      rating:4
    }
  ]

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
        <SwiperSlider testimonials={testimonials} />
        

      </Maindiv>

    </>

  )
}
