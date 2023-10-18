import React from 'react'
import { Navbar } from '../components/Navbar'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faMinus } from '@fortawesome/free-solid-svg-icons'
import Image1 from './../images/image1.jpg'
import Image3 from './../images/image3.jpg'
import Image4 from './../images/image4.jpg'





const Maindiv = styled.div`
padding-top:180px;

`

export const Aboutus = () => {

  // fetch("../data.json")
  // .then(async     (response)=>{
  //  const data = await response.json();
  //  console.log(data);
  // } )
  // .catch(error => console.error("Network error:", error));



  const data = [
    {
      "heading": "Why Dopamine?",
      "content": "food, substance consisting essentially of protein,carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. <br></br> The absorption and  utilization of food by the body is fundamental to nutrition and is facilitated by digestion.",
      "image": Image1
    },
    {
      "heading": " Why Should you choose?",
      "content": "food, substance consisting essentially of protein,carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. <br></br> The absorption and  utilization of food by the body is fundamental to nutrition and is facilitated by digestion.",
      "image": Image3
    },
    {
      "heading": "Why Dopamine?",
      "content": "food, substance consisting essentially of protein,carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. <br></br> The absorption and  utilization of food by the body is fundamental to nutrition and is facilitated by digestion.",
      "image": Image4
    }


  ];




  return (
    <><Navbar> </Navbar>
      <Maindiv className='bg-dark'>
        <div className='text-white'>
          <p className='text-center fs-5'>
            <FontAwesomeIcon icon={faMinus} className=' fa-minus pt-2 pe-2' />
            About Us
            <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 ps-2' />
          </p>
        </div>
        {/* Second Section */}
        <div>

          {data.map((element, index) => {

            let elePosition = false
            if (index % 2 == 0) {
              elePosition = true
            }



            return  <div className="d-flex container align-items-center" key={index}>
    
              {elePosition ?<><div className="p-2  col-sm-6  flex-fill">
                <p className='fs-5 text-white fw-bold'>
                  <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 pe-2' />
                  {element.heading}</p>
                <p className='text-white' dangerouslySetInnerHTML={{__html:element.content}}>
                 
                </p>
              </div>
              <div className="p-2  col-sm-6 flex-fill   text-white">
                <img src={element.image} className='mx-auto d-flex rounded  about-image'></img>
              </div>

              </>:


                 <> 
                 <div className="p-2  col-sm-6 flex-fill   text-white">
                    <img src={element.image}  className='mx-auto d-flex rounded  about-image '></img>
                  </div>
                 <div className="p-2  col-sm-6  flex-fill">
                    <p className='fs-5 text-white fw-bold'>
                      <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 pe-2' />
                      {element.heading}</p>
                    <p className='text-white' dangerouslySetInnerHTML={{ __html: element.content }}>

                    </p>
                  </div>
                  
                  </>}
            </div>

          })}




          {/*  */}




          {/*  */}


          {/* <div className="d-flex container mt-5">
            <div className="p-2  col-sm-6  flex-fill mt-5">
              <p className='fs-5 text-white fw-bold '>
                <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 pe-2' />
                Why Dopamine?</p>
              <p className='text-white'>food, substance consisting essentially of protein,
                carbohydrate, fat, and other nutrients used in the body
                of an organism to sustain growth and vital processes and to furnish energy. <br></br>
                The absorption and utilization of food by
                the body is fundamental to nutrition and is facilitated by digestion.</p>
            </div>
            <div className="p-2  col-sm-6 flex-fill img-first  text-white">
              <img src='/images/image4.jpg' height='400px' width='400px' className='mx-auto d-flex rounded imagebox-first img-fluid '></img>
            </div>
          </div> */}




        </div>


        {/*  Third section*/}

        <div className='container pb-5 pt-3'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='aboutus-lastsection'>
                <FontAwesomeIcon icon={faArrowUp} style={{ color: "#FFD160", }} className=' arrowup ps-2 pt-1 fs-5' />
              </div>
            </div>
          </div>
        </div>



      </Maindiv>
    </>

  )
}
