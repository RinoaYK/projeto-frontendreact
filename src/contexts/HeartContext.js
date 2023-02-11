import React, { useState, useEffect, createContext } from 'react';

export const HeartContext = createContext();

const HeartProvider = ({children}) => {   
  
  const [heartState, setHeartState] = useState(JSON.parse(localStorage.getItem('heartState')) || {});

  useEffect(() => {
    if (!localStorage.getItem('heartState')) {
      localStorage.setItem('heartState', JSON.stringify({}));
    }
  }, []);
  
  const handleIconHeart = (id) => {
    const currentHeartState = JSON.parse(localStorage.getItem('heartState'));
    currentHeartState[id] = currentHeartState[id] === 'empty' ? 'full' : 'empty';
    localStorage.setItem('heartState', JSON.stringify(currentHeartState));
    setHeartState(currentHeartState);
  };


  return <HeartContext.Provider value={{ handleIconHeart, heartState }} >{children}</HeartContext.Provider>
};

export default HeartProvider;