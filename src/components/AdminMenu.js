import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUpWideShort, faArrowsTurnToDots, faBagShopping, faBars, faDownLeftAndUpRightToCenter, faEnvelope, faFile, faMagnifyingGlass, faPen, faPlus, faRightFromBracket, faTicket, faUpDownLeftRight, faUser, faUserGroup, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useLocation } from 'react-router-dom';


export const AdminMenu = () => {
    return (

        <div className='search-button  pt-3 ps-3'>
            <Link className="d-flex ps-3 dashboard flex-row " to={'/admin/dashboard'}>
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>Dashboard</p>
                </div>
            </Link>
            {/*  */}

            <Link className="d-flex pos ps-3 flex-row" to={'/admin/pos'}>
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>POS</p>
                </div>
            </Link>
            {/*  */}
            <div className="d-flex ps-3 flex-row">
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>Order</p>
                </div>
            </div>

            {/*  */}

            <div className="d-flex ps-3 flex-row">
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>Customer</p>
                </div>
            </div>

            {/*  */}

            <div className="d-flex ps-3 flex-row">
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faTicket} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>Coupon</p>
                </div>
            </div>

            {/*  */}

            <div className="d-flex ps-3 flex-row">
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faPen} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>Expense</p>
                </div>
            </div>

            {/*  */}

            <Link className="d-flex product-text ps-3 flex-row" to={'/admin/product'}>
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faBagShopping} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4 '>Product</p>
                </div>
            </Link>

            {/*  */}

            <div className="d-flex ps-3 flex-row">
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>Branch/Store</p>
                </div>
            </div>

            {/*  */}

            <div className="d-flex ps-3 flex-row">
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faFile} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>Reports</p>
                </div>
            </div>

            {/*  */}

            <div className="d-flex ps-3 flex-row">
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faArrowsTurnToDots} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>Tools</p>
                </div>
            </div>
            {/*  */}

            <div className="d-flex ps-3 flex-row">
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>Profile</p>
                </div>
            </div>

            <Link to={"/admin/login"} className="d-flex ps-3 flex-row">
                <div className="p-2  text-white">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </div>
                <div className="p-2 text-white">
                    <p className='fw-4'>Logout</p>
                </div>
            </Link>
        </div>


    )
}
