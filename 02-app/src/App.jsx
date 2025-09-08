import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Item from './components/Item';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './Pages/Home';

const App = () => {
  
  return (
    <div>
      <NavBar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1 className="text-center text-red-500">404 - Page Not Found</h1>} />
        </Routes>
    </div>
  );
}

export default App;
