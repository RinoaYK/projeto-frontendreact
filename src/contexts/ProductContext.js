import React, {createContext, useState, useEffect} from 'react';
import data from "../dbItems/products.json";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {  
  const [products, setProducts] = useState([]);

  useEffect(() => {   
      setProducts(data);  
}, []);  

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};
export default ProductProvider;
