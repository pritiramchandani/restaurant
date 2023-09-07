import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from './pages/Navbar';
import { Aboutus } from './pages/Aboutus';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { fontAwesome } from 'fontawesome';


function App() {
  return (
    <>
   

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path='aboutus' element={<Aboutus/>} />
          <Route path="menu" element={<Menu/>} />
         
          <Route path="contact" element={<Contact/>} />
        
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
