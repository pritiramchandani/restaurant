import Logo from './../../images/logo.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUpWideShort, faArrowsTurnToDots, faBagShopping, faDownLeftAndUpRightToCenter, faEnvelope, faFile, faMagnifyingGlass, faPen, faPlus, faRightFromBracket, faTicket, faUpDownLeftRight, faUser, faUserGroup, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const Maindiv = styled.div`
.first-section {
  border-right: 1px solid rgb(233, 255, 178);
  
}


.admin-main-div{
  overflow: hidden;
  width:100%;
}

.image-div {
  width: 104%;
  border-bottom: 1px solid rgb(233, 255, 178);
  
}


.dashboard {
  text-decoration:none;
  
}

.pos{
  text-decoration:none;
  
}



.order{
  height:110px;
  width: 40%;
  text-align: center;
  background-color:#FFD160;
  border-radius: 6px;
  overflow: hidden;
}

.order-icon{
height:40px;
width:10%;
background-color:black;
color:#FFD160;
border-radius:50px;

}

.product{
  height:110px;
  width: 40%;
  text-align: center;
 background-color:#FFD160;
 border-radius: 6px;
 overflow: hidden;
}

.employee{
  height: 110px;
  width: 40%;
  text-align: center;
  background-color:#FFD160;
  border-radius: 6px;
  overflow: hidden;
}

.category{
  height:110px;
  width: 40%;
  text-align: center;
  background-color:#FFD160;
  border-radius: 6px;
  overflow: hidden;
}


.order-div{
  overflow: hidden;
}

`




export const Admin = () => {
  return (
    <>
      <Maindiv className='admin-main-div'>
        <div className=' bg-dark '>
          <div className='row'>
            <div className='col-sm-3 first-section'>
              <div className='image-div'>
                <img src={Logo} height='100px' width='100px' className='d-flex mx-auto'></img>
              </div>

              {/*  */}
              <div className='search-button pt-3 ps-3'>
                <Link class="d-flex ps-3 dashboard flex-row " to={'/admin/dashboard'}>
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>Dashboard</p>
                  </div>
                </Link>
                {/*  */}

                <Link class="d-flex pos ps-3 flex-row" to={'/admin/pos'}>
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faBagShopping} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>POS</p>
                  </div>
                </Link>
                {/*  */}
                <div class="d-flex ps-3 flex-row">
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faBagShopping} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>Order</p>
                  </div>
                </div>

                {/*  */}

                <div class="d-flex ps-3 flex-row">
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>Customer</p>
                  </div>
                </div>

                {/*  */}

                <div class="d-flex ps-3 flex-row">
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faTicket} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>Coupon</p>
                  </div>
                </div>

                {/*  */}

                <div class="d-flex ps-3 flex-row">
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faPen} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>Expense</p>
                  </div>
                </div>

                {/*  */}

                <div class="d-flex ps-3 flex-row">
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faBagShopping} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'> Service</p>
                  </div>
                </div>

                {/*  */}

                <div class="d-flex ps-3 flex-row">
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>Branch/Store</p>
                  </div>
                </div>

                {/*  */}

                <div class="d-flex ps-3 flex-row">
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faFile} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>Reports</p>
                  </div>
                </div>

                {/*  */}

                <div class="d-flex ps-3 flex-row">
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faArrowsTurnToDots} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>Tools</p>
                  </div>
                </div>
                {/*  */}

                <div class="d-flex ps-3 flex-row">
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>Profile</p>
                  </div>
                </div>

                <div class="d-flex ps-3 flex-row">
                  <div class="p-2  text-white">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </div>
                  <div class="p-2 text-white">
                    <p className='fw-4'>Logout</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Part */}

            <div className='col-sm-9 pt-5 order-div' >
              <Outlet></Outlet>
            </div>


          </div>

        </div>

      </Maindiv>

    </>
  );
}

