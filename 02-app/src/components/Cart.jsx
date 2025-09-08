import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { items } = useContext(CartContext);

  // ✅ Calculate total price
  const total = items.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">🛒 Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-sm bg-white"
              >
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 text-lg font-medium">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4 border-t pt-3">
            <h2 className="text-xl font-semibold">Total Amount:</h2>
            <span className="text-xl font-bold text-green-600">
              ${total.toFixed(2)}
            </span>
          </div>

          {/* Checkout Button */}
          <button className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
