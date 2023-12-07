import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpWideShort, faUsers } from '@fortawesome/free-solid-svg-icons';


export default function Dashboard() {
    return (
        <>
            <div class="  d-flex justify-content-around">
                <div class=" order pt-2 fs-5">
                    <div className='d-flex ps-2 justify-content-start'>
                        <div className='order-icon'><FontAwesomeIcon icon={faArrowUpWideShort} className='p-2' /></div>
                        <p className='text-secondary d-flex justify-content-start p-2 fs-6 pt-2'>Total Sales</p>
                    </div>
                    <div>
                        <h3 className='d-flex ps-4'>AED 4,820.06</h3>
                    </div>
                </div>


                <div class="p-2 product  fs-5">
                    <div className='d-flex ps-2 justify-content-start'>
                        <div className='order-icon'><FontAwesomeIcon icon={faArrowUpWideShort} className='p-2' /></div>
                        <p className='text-secondary  d-flex justify-content-start p-2 fs-6 pt-2'>Total Order</p>
                    </div>

                    <div>
                        <h3 className='d-flex ps-5'>152</h3>
                    </div>
                </div>



            </div>



            <div class="d-flex justify-content-around pt-5">
                <div class="p-2 employee  fs-5">
                    <div className='d-flex ps-2 justify-content-start'>
                        <div className='order-icon'><FontAwesomeIcon icon={faArrowUpWideShort} className='p-2' /></div>
                        <p className='text-secondary d-flex justify-content-start p-2 fs-6 pt-2'>Total Services</p>
                    </div>
                    <div>
                        <h3 className='d-flex ps-5'>78</h3>
                    </div>
                </div>
                <div class="p-2  category  fs-5 ">
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
