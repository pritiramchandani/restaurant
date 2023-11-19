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
import{Feedback}from'./pages/Feedback';
import { Login } from './admin/pages/Login';
import { Admin } from './admin/pages/Admin';


function App() {
  return (
    <>
   

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path='aboutus' element={<Aboutus/>} />
          <Route path="menu" element={<Menu/>} />
          <Route path="feedback" element={<Feedback/>} />
          <Route path="contact" element={<Contact/>} />
        
          <Route path='admin' element={<Admin/>} >
            <Route path='login' element={<Login/>} />
            <Route path='register' element={<Login/>} />
            <Route path='forgetpassword' element={<Login/>} />
            <Route path='dashboard' element={<Login/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
