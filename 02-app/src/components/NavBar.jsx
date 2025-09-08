import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const NavBar = () => {
    const {items} = useContext(CartContext);

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h3 className="text-2xl font-bold tracking-wide">🛍 ShopApp</h3>

        <ul className="flex gap-6 text-lg font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
            Products
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "text-yellow-400" : ""}>
            Cart 🛒 {items.length }
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
