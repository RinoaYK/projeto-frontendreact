import React from 'react';
import { GlobalStyled } from "./GlobalStyled";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  
  return <div className='overflow-hidden'>
    <GlobalStyled />
    <Router>     
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
      </Routes>     
      <Sidebar />
      <Footer />
    </Router>    
    </div>;
};

export default App;
