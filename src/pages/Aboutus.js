import React from 'react'
import { Navbar } from './Navbar'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faMinus } from '@fortawesome/free-solid-svg-icons'


const Maindiv = styled.p``

export const Aboutus = () => {
  return (
    <><Navbar> </Navbar>
      <Maindiv className='bg-dark'>
        <firstsection className='text-white'>
          <p className='text-center fs-5'>
            <FontAwesomeIcon icon={faMinus} className=' fa-minus pt-2 pe-2' />
            About Us
            <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 ps-2' />
          </p>
        </firstsection>
        {/* Second Section */}
        <secondsection>

          <div class="d-flex container">
            <div class="p-2  col-sm-6  flex-fill">
              <p className='fs-5 text-white fw-bold'>
                <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 pe-2' />
                Why Dopamine?</p>
              <p className='text-white'>food, substance consisting essentially of protein,
                carbohydrate, fat, and other nutrients used in the body
                of an organism to sustain growth and vital processes and to furnish energy. <br></br>
                The absorption and utilization of food by
                the body is fundamental to nutrition and is facilitated by digestion.</p>
            </div>
            <div class="p-2  col-sm-6 flex-fill   text-white">
              <img src='/images/image1.jpg' height='400px' width='400px' className='mx-auto d-flex rounded imagebox-first img-fluid '></img>
            </div>
          </div>

          {/*  */}

          <div class="d-flex container pt-5">

            <div class="p-2  col-sm-6 flex-fill   text-white">
              <img src='/images/image3.jpg' height='200px' width='300px' className='mx-auto d-flex rounded imagebox-first img-fluid '></img>
            </div>
            <div class="p-2  col-sm-6  flex-fill pt-4">
              <p className='fs-5 text-white fw-bold'>
                <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 pe-2' />
                Why Should you choose?</p>
              <p className='text-white ' >food, substance consisting essentially of protein,
                carbohydrate, fat, and other nutrients used in the body
                of an organism to sustain growth and vital processes and to furnish energy. <br></br>
                The absorption and utilization of food by
                the body is fundamental to nutrition and is facilitated by digestion.</p>
            </div>
          </div>


          {/*  */}


          <div class="d-flex container mt-5">
            <div class="p-2  col-sm-6  flex-fill mt-5">
              <p className='fs-5 text-white fw-bold '>
                <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 pe-2' />
                Why Dopamine?</p>
              <p className='text-white'>food, substance consisting essentially of protein,
                carbohydrate, fat, and other nutrients used in the body
                of an organism to sustain growth and vital processes and to furnish energy. <br></br>
                The absorption and utilization of food by
                the body is fundamental to nutrition and is facilitated by digestion.</p>
            </div>
            <div class="p-2  col-sm-6 flex-fill img-first  text-white">
              <img src='/images/image4.jpg' height='400px' width='400px' className='mx-auto d-flex rounded imagebox-first img-fluid '></img>
            </div>
          </div>
        </secondsection>


        {/*  Third section*/}

        <div className='container pb-5 pt-3'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='aboutus-lastsection'>
              <FontAwesomeIcon icon={faArrowUp} style={{color: "#FFD160",}}  className=' arrowup ps-2 pt-1 fs-5' />
              </div>
            </div>
          </div>
        </div>
       


      </Maindiv>
    </>

  )
}
