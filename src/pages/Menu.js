import React from 'react'
import { Navbar } from '../components/Navbar'
import { styled } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faMinus } from '@fortawesome/free-solid-svg-icons'
import Menuimage0 from '../images/image1.jpg'
import Menuimage1 from '../images/image2.jpg'
import Menuimage2 from '../images/image3.jpg'
import Menuimage3 from '../images/image4.jpg'


const Maindiv = styled.div`
  padding-top:180px;

`

export const Menu = () => {
 const data = [
    {
      "title": "Caramelized <br></br>Squilied Fillet",
      "price": "$34",
      "image": Menuimage0,
    },

    {
      "title": "Sea Boss<br></br>Pieces",
      "price": "$28",
      "image": Menuimage1,
    },

    {
      "title": "Chicken<br></br>Steak",
      "price": "$34",
      "image": Menuimage2,
    },
    {
      "title": "Pizza<br></br>Squilied Fillet",
      "price": "$34",
      "image": Menuimage3,
    }









  ]



  return (
    <>
      <Navbar></Navbar>
      <Maindiv className='bg-dark pb-5'>
        <firstsection className='text-white '>
          <p className='text-center fs-5'>
            <FontAwesomeIcon icon={faMinus} className=' fa-minus pt-2 pe-2' />
            Menu
            <FontAwesomeIcon icon={faMinus} className='fa-minus  pt-2 ps-2' />
          </p>
        </firstsection>




        {/* Second section */}





        <div class="container d-flex justify-content-around bg-dark pb-5 mb-3">

          {data.map((element, index) => {

            let elePosition = false
            if (index % 2 == 0) {
              elePosition = true
            }

            return <>{elePosition ? <div class="p-2 pb-4 text-white menu-div">

              <p className='text-center' dangerouslySetInnerHTML={{ __html: element.title }}></p>
              <img src={element.image} className='mx-auto d-flex rounded img-fluid pt-3'></img>
              <div className='discount-tag-first text-center text-dark pt-2 '>{element.price}</div>
              

            </div>
              :

              
              <div class="p-2 pb-4 text-white menu-div">
                <p className='text-center' dangerouslySetInnerHTML={{ __html: element.title }}></p>
                <img src={element.image} className='mx-auto d-flex rounded img-fluid pt-3'></img>
                <div className='discount-tag-second text-center text-dark pt-2 '>{element.price}</div>
              </div>}     </>
              
            
            
            
            })}


            {/* <div class="p-2 pb-4 text-white menu-div">
            <p className='text-center'>Chicken<br></br>Steak</p>
            <img src='/images/image4.jpg' className='mx-auto d-flex rounded img-fluid pt-3'></img>
            <div className='discount-tag-first text-center text-dark pt-2 '>$34</div>
          </div>
          <div class="p-2 pb-4 text-white menu-div">
            <p className='text-center'>Pizza<br></br>Squilied Fillet</p>
            <img src='/images/pizza.jpg' className='mx-auto d-flex rounded img-fluid pt-3'></img>
            <div className='discount-tag-second text-center text-dark pt-2 '>$34</div>
          </div> */}


        </div>


        {/* Third Section */}

        <div className='container-fluid pb-5'>
          <div className='row'>
            <div className='col-sm-12'>
              <p className=' text-center fs-4 see-all-menu'>See all the Menu
                <FontAwesomeIcon icon={faArrowRight} className='ps-2 pt-3' />
              </p>
            </div>
          </div>
        </div>






      </Maindiv>
    </>

  )
}
