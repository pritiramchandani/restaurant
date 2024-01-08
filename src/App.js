import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './components/Navbar';
import { Aboutus } from './pages/Aboutus';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Feedback } from './pages/Feedback';
import { Login } from './admin/pages/Login';
import { Admin } from './admin/pages/Admin';
import POS from './admin/pages/POS';
import Dashboard from './admin/pages/Dashboard';
import { Product } from './admin/pages/Product';
import PrivateRoute from './guard/PrivateRoute';
import { useEffect, useState } from 'react';




function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');
    console.log(token);
    if (token>0) {
      setIsAuthenticated(!isAuthenticated);
    }

    console.log(token);
  }, []);


  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='aboutus' element={<Aboutus />} />
          <Route path="menu" element={<Menu />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="contact" element={<Contact />} />


          
          <Route path='admin' element={<Admin />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='pos' element={<POS />} />
          <Route path='product' element={<Product />} />

            <Route path='login' element={<Login />} />
            <Route path='register' element={<Login />} />
            <Route path='forgetpassword' element={<Login />} />
            {/* <Route
              path="dashboard"
              element={<PrivateRoute
                element={<Dashboard />}
                isAuthenticated={isAuthenticated}
                fallbackPath="/admin/login"
              />}
            />
            <Route
              path="pos"
              element={<PrivateRoute
                element={<POS />}
                path="pos"
                isAuthenticated={isAuthenticated}
                fallbackPath="/admin/login"
              />}
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
