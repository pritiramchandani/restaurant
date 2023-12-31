import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import Dp from './../../images/dp.png'

const Maindiv = styled.div`

.upload-service{
  background-color:#ffd160;
  border-radius:50px;
}
.enteries{
  height:30px;
  border-radius:4px;
  
 
}

.search-btn{
  height:35px;
  width:100%;
  border:1px solid #ffd160;
  
}


`


export function Product() {


  return (
    <Maindiv>
      <div className='row'>
        <div className=" col-sm-6 d-flex justify-content-start mb-3">

          <div className="p-2"><h4 className='text-white'>Products</h4></div>
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

      <div className='row'>
        <div className='col-sm-6'>
          <div className="d-flex">
            <div className="p-2  flex-fill">
              <h4 className='text-white'>Service</h4>
            </div>
          </div>
        </div>

        <div className='col-sm-6'>
          <div className="d-flex ">
            <div className="p-2 flex-fill">
              <button type="button" className="btn fw-bold upload-service">Bulk Upload Service</button>
            </div>
            <div className="p-2 flex-fill">
              <button type="button" className="btn fw-bold upload-service">
                <FontAwesomeIcon icon={faPlus} className='pe-2 plus-icon' />Add New Service
              </button>

            </div>
          </div>

        </div>
      </div>





      <div className='row pt-4'>
        <div className='col-sm-4'>
          <div className="d-flex justify-content-between mb-3">
            <div className="p-2">
              <p className='text-white fs-6'>Show Entries</p>
            </div>
            <div className="p-2">
              <select className='bg-dark text-white enteries '>
                <option value="0">10</option>
                <option value="1">25</option>
                <option value="2">50</option>
                <option value="3">100</option>
              </select>
            </div>
            <div className="p-2 pe-5 text-white">
              <p className=' pe-4'>Entries</p>
            </div>
          </div>
        </div>
        <div className='col-sm-8  pe-5 '>
          <div class="d-flex justify-content-end  mb-3">
            <div class="p-2">
              <p className='text-white'>Search:</p>
            </div>
            <div class="p-2 ">
              <input type="text" placeholder="" className='search-btn bg-dark' name="search2"></input>
            </div>

          </div>
        </div>
      </div>



      <div className='row'>
        <div className='col-sm-12'>
          <div class="table-responsive">
            <table class="table me-4 table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Service Name</th>
                  <th>Service Type</th>
                  <th>Store Name</th>
                  <th>Store</th>
                  <th>Action</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>


      <div className='row'>
        <div className='col-sm-6 pt-2'>
          <div className='text-secondary'><p>Show 1 to 10 of 100 enteries</p></div>
        </div>




      </div>






    </Maindiv>
  )
}
