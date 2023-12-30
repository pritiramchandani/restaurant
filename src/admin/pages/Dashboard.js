import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort, faBars, faBell, faUsers } from '@fortawesome/free-solid-svg-icons';
import Dp from './../../images/dp.png'

const Maindiv = styled.div`
.pos-main-div{
  overflow: hidden;
}

`



export default function Dashboard() {
    return (
        <>
            <div className='row'>
                <div className=" col-sm-6 d-flex justify-content-start mb-3">
                    <div className="p-2"><FontAwesomeIcon icon={faBars} style={{ color: "#ffd160", }} className='fs-3' /> </div>
                    <div className="p-2"><h4 className='text-white'>Dashboard</h4></div>
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





            <div className="  d-flex justify-content-around">
                <div className=" order pt-2 fs-5">
                    <div className='d-flex ps-2 justify-content-start'>
                        <div className='order-icon'><FontAwesomeIcon icon={faArrowUpWideShort} className='p-2' /></div>
                        <p className='text-secondary d-flex justify-content-start p-2 fs-6 pt-2'>Total Sales</p>
                    </div>
                    <div>
                        <h3 className='d-flex ps-4'>AED 4,820.06</h3>
                    </div>
                </div>


                <div className="p-2 product  fs-5">
                    <div className='d-flex ps-2 justify-content-start'>
                        <div className='order-icon'><FontAwesomeIcon icon={faArrowUpWideShort} className='p-2' /></div>
                        <p className='text-secondary  d-flex justify-content-start p-2 fs-6 pt-2'>Total Order</p>
                    </div>

                    <div>
                        <h3 className='d-flex ps-5'>152</h3>
                    </div>
                </div>



            </div>



            <div className="d-flex justify-content-around pt-5">
                <div className="p-2 employee  fs-5">
                    <div className='d-flex ps-2 justify-content-start'>
                        <div className='order-icon'><FontAwesomeIcon icon={faArrowUpWideShort} className='p-2' /></div>
                        <p className='text-secondary d-flex justify-content-start p-2 fs-6 pt-2'>Total Services</p>
                    </div>
                    <div>
                        <h3 className='d-flex ps-5'>78</h3>
                    </div>
                </div>
                <div className="p-2  category  fs-5 ">
                    <div className='d-flex ps-2 justify-content-start'>
                        <div className='order-icon'><FontAwesomeIcon icon={faUsers} className='p-2' /></div>
                        <p className='text-secondary d-flex justify-content-start p-2 fs-6 pt-2'>Total Customers</p>
                    </div>
                    <div>
                        <h3 className='d-flex ps-5'>15</h3>
                    </div>
                </div>

            </div>

















        </>
    )
}
