import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
 

export const DataContext = createContext([])
const Main = () => {
    const datas = useLoaderData(); 
  return (
        <DataContext.Provider value={datas}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </DataContext.Provider>
    );
};

export default Main;