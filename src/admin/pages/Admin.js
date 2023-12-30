import Logo from './../../images/logo.png';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowUpWideShort, faArrowsTurnToDots, faBagShopping, faBars, faDownLeftAndUpRightToCenter, faEnvelope, faFile, faMagnifyingGlass, faPen, faPlus, faRightFromBracket, faTicket, faUpDownLeftRight, faUser, faUserGroup, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AdminMenu } from '../../components/AdminMenu';



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

.product-text{
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
  
  const location = useLocation();
  console.log(location.pathname);
  
  var sidebarstyle=true
  
  const sidebarfunc = () =>{
    
    sidebarstyle= false
    console.log("Mere Chidkuram",sidebarstyle);



  }


  return (
    <>
      {location.pathname == "/admin/login" ? <Outlet></Outlet> :
        <Maindiv className='admin-main-div'>
          <div className=' bg-dark '>
            <div className='row'>
              <div className='col-sm-3 first-section'id='sidebar'>
                <div className='image-div'>
                  <img src={Logo} height='100px' width='100px' className='d-flex mx-auto'></img>
                  <div className="p-2 " onClick={sidebarfunc}><FontAwesomeIcon icon={faBars} style={{ color: "#ffd160", }} className='fs-3' /> </div>
                </div>

                {/*  */}

                {sidebarstyle ?<AdminMenu></AdminMenu>:<></>}
                
              </div>

              {/* Second Part */}

              <div className='col-sm-9 pt-5 order-div' >
                <Outlet></Outlet>
              </div>


            </div>

          </div>

        </Maindiv>

      }
    </>
  );
}

