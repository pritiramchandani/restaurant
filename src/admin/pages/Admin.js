// @flow 
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faDownLeftAndUpRightToCenter, faMagnifyingGlass, faPlus, faUpDownLeftRight, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Maindiv = styled.div``


export const Admin = (props) => {
    return (
        <div>
            <Outlet>
                <Maindiv className='main-div'>
        <div className=' bg-dark'>
          <div className='row'>
            <div className='col-sm-3 first-section'>
              <div className='image-div'>
                <img src='./Images/logo.png' height='100px' width='100px' className='d-flex mx-auto'></img>
              </div>

              {/*  */}
              <div className='search-button pt-3 ps-4'>
                <button type="button" class="btn btn-outline-light">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='pe-2' />
                  Secondary</button>
                {/*  */}
                <div className='pt-4'>
                  <button type="button" class=" Authorisation-btn d-flex justify-content-start pt-2">Admin</button>

                </div>
                {/* user group */}

                <div class="d-inline-flex  pt-4 text-white">
                  <div class="p-2 ">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </div>
                  <div class="p-2 ps-3 ">Group</div>
                  <div class="p-2  ps-4   ">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>
                <br></br>

                {/*  */}
                <div class="d-inline-flex   pt-4 text-white">
                  <div class="p-2 ">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div class="p-2 ps-4 ">Users</div>
                  <div class="p-2  ps-4">
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                </div>

                {/*  */}

                <div className='pt-4 user-div '>
                  <button type="button" class="p-2 myapp-btn d-flex justify-content-start ">My App</button>
                </div>

                {/*  */}
                <div class="d-inline-flex   pt-4 text-white">
                  <div class="p-2">Group</div>
                  <div class="p-2  ps-5 ">
                    <FontAwesomeIcon icon={faPlus} className='ps-3' />
                  </div>
                </div>
                <br></br>

                <div class="d-inline-flex   pt-4 text-white">
                  <div class="p-2 ps-1">Specialist</div>
                  <div class="p-2  ps-5">
                    <FontAwesomeIcon icon={faPlus} className='' />
                  </div>
                </div>
                <br></br>
                <div class="d-inline-flex   pt-4 text-white">
                  <div class="p-2 ps-1">Working</div>
                  <div class="p-2  ps-5">
                    <FontAwesomeIcon icon={faPlus} className='ps-2' />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Part */}
            <div className='col-sm-9 pt-5' >
              <div class="d-flex justify-content-around">
                <div class="p-2 order  fs-5">Order</div>
                <div class="p-2 product  fs-5">Products</div>

              </div>

    <br></br>
              <div class="d-flex justify-content-around pt-5">
                <div class="p-2 employee  fs-5">Employee</div>
                <div class="p-2  category  fs-5 ">Categories</div>

              </div>















              {/* <div class="d-flex ">
                <div class="p-5 text-white fw-bold">Home</div>
                <div class="p-5  pe-5 text-white flex-fill fw-bold">Users</div>
                <div class="p-5 flex-fill d-flex justify-content-end fw-bold">
                  <div>
                    <button type="button" class="btn fw-bold btn-outline-light">
                      <FontAwesomeIcon icon={faUser} className='pe-2' />
                      User
                      <FontAwesomeIcon icon={faAngleDown} className='ps-2' />
                    </button>
                  </div>

                </div>
              </div> */}
              {/*  */}

              {/* <div class="d-flex pt-2">
                <div class="p-2 flex-fill fs-4  text-white">Select user to change</div>
                <div class="p-2 flex-fill d-flex pt-1 pe-5 justify-content-end">
                  <button type="button" class="adduser-btn ps-1 ">Add User
                    <FontAwesomeIcon icon={faPlus} className='ps-3' />
                  </button>
                </div>

              </div> */}

              {/*  */}

              {/* <div class="d-flex pt-2">
                <div class="p-2 search-btn-col  flex-fill">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white' />
                  <button type="button" class=" search-btn pb-1">Search</button>
                </div>
                <div class="p-2  flex-fill ">
                  <FontAwesomeIcon icon={faUpDownLeftRight} className='text-white ms-2 arrow-btn ' />
                </div>
              </div> */}

              {/*  */}

              {/* <div class="d-flex p-3 pt-4 text-white">
                <div class="p-2  fs-5 fw-bold">Action :</div>
                <div class="p-2 ">
                  <button type="button" class="Minus-btn bg-dark text-white">-----------
                    <FontAwesomeIcon icon={faAngleDown} className='down-arrow pt-2 p-2' />
                  </button>
                </div>
                <div class="ps-2 pt-1 go-btn fs-5 mt-2">
                  Go
                </div>

                <div class="p-2">
                  <button type="button" class="btn fw-bold text-white ">0 of 2 selected</button>
                </div>

              </div> */}

            </div>

          </div>
        </div>

      </Maindiv>

            </Outlet>
        </div>
    );
};