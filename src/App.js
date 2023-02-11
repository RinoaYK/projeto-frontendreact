import React from 'react';
import { GlobalStyled } from "./GlobalStyled";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import pages
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Category from "./pages/Category/Category";
//import Components
import Sidebar from "./components/Sidebar/Sidebar";


const App = () => {

  return <div className='overflow-hidden'>
    <GlobalStyled />    
    <Router>             
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>        
        <Route path='category/:category' element={<Category />}/>
      </Routes>     
      <Sidebar />
    </Router>    
    </div>;
};

export default App;
