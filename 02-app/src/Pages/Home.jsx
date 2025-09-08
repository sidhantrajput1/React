import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        🛍 Welcome to <span className="text-yellow-500">ShopApp</span>
      </h1>

      {/* Subtext */}
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Your one-stop shop for the latest fashion, electronics, and accessories.
        Explore our products and add your favorites to the cart!
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <Link
          to="/products"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          🛒 Start Shopping
        </Link>
        <Link
          to="/cart"
          className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default Home;
