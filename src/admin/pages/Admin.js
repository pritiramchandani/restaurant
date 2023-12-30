import Logo from './../../images/logo.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUpWideShort, faArrowsTurnToDots, faBagShopping, faBars, faDownLeftAndUpRightToCenter, faEnvelope, faFile, faMagnifyingGlass, faPen, faPlus, faRightFromBracket, faTicket, faUpDownLeftRight, faUser, faUserGroup, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import LogoutModal from '../../components/LogoutModal';
import { useState } from 'react';



const Maindiv = styled.div`

width:100%;
min-height:100%;
height:{ 100vh;

.sidebar  {
  borde+}r-right: 1px solid rgb(233, 255, 178);
  
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

const SideBarHumburgur = styled.button`
  position: absolute;
  left: 25%;
  width: 100px;
  top: 10px;
  border: none;
  background: transparent;
`


export const Admin = () => {

  const location = useLocation();
  const navigator = useNavigate();
  console.log(location.pathname);

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [hideShowSideBar,setHideShowSideBar] = useState(true);

  const handleShowLogoutModal = () => setShowLogoutModal(true);
  const handleCloseLogoutModal = () => setShowLogoutModal(false);
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigator('/admin/login');
    handleCloseLogoutModal();
  };

  const Logout = () => {
    handleShowLogoutModal();
  };

  const sideBarToggle = () => {
    setHideShowSideBar(!hideShowSideBar);
  }
 

  return (
    <>
      {location.pathname == "/admin/login" ? <Outlet></Outlet> :
        <Maindiv className='admin-main-div h-100'>
          <div className=' bg-dark h-100'>
            <div className='row vh-100'>
              <SideBarHumburgur className="p-2" style={hideShowSideBar?{}:{ left: '1%'}} onClick={sideBarToggle}><FontAwesomeIcon icon={faBars} style={{ color: "#ffd160", }} className='fs-3' /> </SideBarHumburgur>
              <div className={hideShowSideBar?'col-sm-3 sidebar':'d-none sidebar'} style={hideShowSideBar?{transform:'translateX(0%)'}:{transform:'translateX(-100%)'}}>
                <div className='image-div'>
                  <img src={Logo} height='100px' width='100px' className='d-flex mx-auto'></img>
                </div>

                {/*  */}
                <div className='search-button pt-3 ps-3'>
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

                  <div className="d-flex ps-3 flex-row">
                    <div className="p-2  text-white">
                      <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                    <div className="p-2 text-white">
                      <p className='fw-4'> Service</p>
                    </div>
                  </div>

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

                  <div onClick={Logout} className="d-flex ps-3 flex-row" style={{cursor:'pointer'}}>
                    <div className="p-2  text-white">
                      <FontAwesomeIcon icon={faRightFromBracket} />
                    </div>
                    <div className="p-2 text-white">
                      <p className='fw-4'>Logout</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Part */}

              <div className={hideShowSideBar?'col-sm-9 pt-5 order-div':'col-sm-12 pt-5 order-div'} >
                <Outlet></Outlet>
              </div>


            </div>

          </div>
        <LogoutModal
          show={showLogoutModal}
          handleClose={handleCloseLogoutModal}
          handleLogout={handleLogout}
        />
        </Maindiv>
        

      }
    </>
  );
}

