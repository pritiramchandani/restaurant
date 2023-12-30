import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import Dp from './../../images/dp.png';
import Image1 from './../../images/pasta.png';
import Image2 from './../../images/chowmin.png';
import Image3 from './../../images/pizza.png';
import Image4 from './../../images/rolls.png';
import Image5 from './../../images/momos.png';
import Image6 from './../../images/pavbhaji.png';

const Maindiv = styled.div`
.pos-main-div{
  overflow: hidden; 
}

.pos-search-button{
  border:solid 1px rgb(233, 255, 178);

}

.pos-image-1{
    height:120px;
    width:25%;
    border:dotted 2px rgb(233, 255, 178);
    border-radius:20px;
    text-align:center;
    font-size:12px;
}


.pos-image-hover:hover{
  
    transform: scale(1.1);
    transition:.5s;
    width:80px;
    height:50px;
}


.select-div{
  border:solid 1px rgb(233, 255, 178);
  width:98%;
  Height:37px;
  background-color:#0000;
}


.food-menu{
  height:67px;
  width:100%
}


.automatic-add-order{
  height:40px;
  width:90%;
  border:solid 1px rgb(233, 255, 178);
}

add-btn{
  border:solid 1px rgb(233, 255, 178);
 
}

.order-div{
  height:40px;
  width:100%;
  background-color: rgb(233, 255, 178);
  border:none;
  
 
}



`







export default function POS() {
  return (
    <>
      <Maindiv className='pos-main-div'>
        <div className='row'>
          <div className=" col-sm-6 d-flex justify-content-start mb-3">
            {/* <div className="p-2"><FontAwesomeIcon icon={faBars} style={{ color: "#ffd160", }} className='fs-3' /> </div> */}
            <div className="p-2"><h4 className='text-white'>POS</h4></div>
          </div>


          <div className=" col-sm-6 d-flex justify-content-end mb-3">
            <div className=" me-5 mt-2">
              <FontAwesomeIcon icon={faBell} style={{ color: "#ffd160", }} className='fs-5  ps-2 pt-2 text-center' />
            </div>
            <div className='me-5 mb-5'>
              <img src={Dp} height='60px' width='60px' className='d-flex mx-auto img-fluid'></img>
            </div>

          </div>
        </div>


        {/*  Second Section*/}



        <div className='row'>
          <div className='col-sm-6'>
            <div className="d-grid ">
              <button type="button" className="btn d-flex justify-content-start  btn-block text-secondary pos-search-button">
                Search...
              </button>
            </div>
            <div className="d-flex mt-3 justify-content-between  mb-3">
              <div className="ms-2 ps-2 pos-image-1">
                <img src={Image1} className='img-fluid pos-image-hover pt-2 '></img>
                <p className='text-white '>Pasta</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image2} className='img-fluid pos-image-hover pt-0 '></img>
                <p className='text-white '>PaniPuri</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image3} className='img-fluid pos-image-hover pt-2'></img>
                <p className='text-white '>Pizza</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image4} className='img-fluid pos-image-hover pt-2'></img>
                <p className='text-white '>Rolls</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image5} className='img-fluid pos-image-hover pt-3'></img>
                <p className='text-white '>Momos</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image6} className='img-fluid pos-image-hover pt-2'></img>
                <p className='text-white '>Pav Bhaji</p>
              </div>
            </div>



            <div className="d-flex mt-3 justify-content-between mb-3">
              <div className="ms-2 ps-2 pos-image-1">
                <img src={Image1} className='img-fluid pos-image-hover pt-2 '></img>
                <p className='text-white '>Pasta</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image2} className='img-fluid pos-image-hover pt-0 '></img>
                <p className='text-white '>PaniPuri</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image3} className='img-fluid pos-image-hover pt-2'></img>
                <p className='text-white '>Pizza</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image4} className='img-fluid pos-image-hover pt-2'></img>
                <p className='text-white '>Rolls</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image5} className='img-fluid pos-image-hover pt-3'></img>
                <p className='text-white '>Momos</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image6} className='img-fluid pos-image-hover pt-2'></img>
                <p className='text-white '>Pav Bhaji</p>
              </div>
            </div>



            <div className="d-flex mt-3 justify-content-between mb-3">
              <div className="ms-2 ps-2 pos-image-1">
                <img src={Image1} className='img-fluid pos-image-hover pt-2 '></img>
                <p className='text-white '>Pasta</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image2} className='img-fluid pos-image-hover pt-0 '></img>
                <p className='text-white '>PaniPuri</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image3} className='img-fluid pos-image-hover pt-2'></img>
                <p className='text-white '>Pizza</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image4} className='img-fluid pos-image-hover pt-2'></img>
                <p className='text-white '>Rolls</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image5} className='img-fluid pos-image-hover pt-3'></img>
                <p className='text-white '>Momos</p>
              </div>
              <div className="p-2 ms-2 pos-image-1">
                <img src={Image6} className='img-fluid pos-image-hover pt-2'></img>
                <p className='text-white '>Pav Bhaji</p>
              </div>
            </div>
          </div>




          <div className=' col-sm-6'>

            <div>
              <select className="select-div text-secondary rounded  mt-0" id="Branch">
                <option value="dubai text-white">Dubai</option>
                <option value=" london text-white">London</option>
                <option value=" california text-white">California</option>
                <option value="washiston text-white">Washigton</option>
              </select>
            </div>



            {/* Food Menu */}
            <div className='row mt-4'>
              <div className='col-sm-8'>
                <select className="select-div text-secondary rounded  mt-0" id="Branch">
                  <option value="select-dish text-white">Select Dish</option>
                  <option value=" momos text-white">Momos</option>
                  <option value=" pizza text-white">Pizza</option>
                  <option value="pav-bhaji text-white">Pav Bhaji</option>
                  <option value="dosa text-white">Dosa</option>
                  <option value="chole-bhature text-white">Chole Bhature</option>
                  <option value=" palak-paneer text-white">Palak Paneer</option>
                  <option value=" dal-fry text-white">Dal Fry</option>
                  <option value=" chowmin text-white">Chowmin</option>
                  <option value=" sandwich text-white">Sandwich</option>
                  <option value=" burger text-white">Burger</option>
                </select>
              </div>

              <div className='col-sm-3'>
                <div>
                  <button type="button" className="btn add-btn btn-primary">
                    <FontAwesomeIcon icon={faPlus} className='pe-2' />
                    Add
                  </button>

                </div>
              </div>
            </div>
        {/* Order */}

        <div className='row mt-4'>
          <div className='col-sm-7 '>
            <div className='rounded p-2 text-white automatic-add-order'>
              <p>Order#123</p>
            </div>

          </div>
          <div className='col-sm-5 pe-5'>
            <div className='' >
              <input className='order-div  rounded text-center' type='date' id='order-date' name='order-date'></input>
            </div>
          </div>



        </div>














          </div>


        </div>























      </Maindiv>

    </>


  )
}
