import React, {createContext, useState, useEffect} from 'react';
import data from "../dbItems/products.json";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {  
  const [products, setProducts] = useState([]);

  useEffect(() => {   
      setProducts(data);  
}, []);  

// const scrollBarsYes = () => {
//   document.documentElement.style.overflow = 'auto';
//   document.body.scroll = "yes"; // IE
// }

// const scrollBarsNo = () => {
// document.documentElement.style.overflow = 'hidden';
// document.body.scroll = "no"; // IE
// }

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};
export default ProductProvider;
