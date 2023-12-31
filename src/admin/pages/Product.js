import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';
import Dp from './../../images/dp.png'

const Maindiv = styled.div`

.product-service-row{
  border-bottom:1px #ffd160 solid;
  width:100%;
}

.upload-service{
  background-color:#ffd160;
  border-radius:50px;
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

      <div className='row product-service-row'>
        <div className='col-sm-6'>
          <div className="d-flex">
            <div className="p-2  flex-fill">
              <h4 className='text-white'>Service</h4>
            </div>
          </div>
        </div>

        <div className='col-sm-6'>
          <div className="d-flex pt-2">
            <div className="p-2 flex-fill">
              <button type="button" className="btn fw-bold upload-service">Bulk Upload Service</button>
            </div>
            <div className="p-2 flex-fill">
            <button type="button" className="btn fw-bold upload-service">
            <FontAwesomeIcon icon={faPlus} className='pe-2 plus-icon'/>Add New Service
            </button>

            </div>
          </div>

        </div>
      </div>

    </Maindiv>
  )
}
