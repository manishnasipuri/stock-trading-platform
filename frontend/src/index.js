import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter ,Routes ,Route} from "react-router-dom";
import './index.css';
import Homepage from './landing-page/home/HomePage'
import Login    from "./landing-page/login/Login";
import Register from "./landing-page/register/Register";
// import ProtectedRoute from "./utils/ProtectedRoute";
import AboutPage from './landing-page/about/AboutPage'
import ProductPage from './landing-page/product/ProductPage'
import PricingPage from './landing-page/pricing/PricingPage'
import SupportPage from './landing-page/support/SupportPage'
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
import NotFound from './landing-page/NotFound';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Homepage />} />
        
          <Route path='/about' element={<AboutPage />} />
           <Route path='/product' element={<ProductPage />} />
           <Route path="/login"    element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path='/pricing' element={<PricingPage />} />
           <Route path='/support' element={<SupportPage />} />
           <Route path='*' element={<NotFound />} />
           
    </Routes>
    <Footer />
  </BrowserRouter>
);

