import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";

const Item = () => {
  const [products, setProducts] = useState([]);
  const { items, setItems } = useContext(CartContext);
  console.log(items);

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
        // console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

//   console.log(products[0].title)

  

  const handleAtToCartButton = (product) => {
    const newItem = {
        title : product.title, 
        price : product.price
    }
    setItems([...items, newItem]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🛍 Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl shadow-lg p-4 bg-white hover:shadow-2xl transition-transform hover:-translate-y-1"
          >
            <img
              className="h-40 w-full object-contain mb-3"
              src={item.image}
              alt={item.title}
            />
            <h3 className="text-lg font-semibold line-clamp-2">{item.title}</h3>
            <p className="text-sm text-gray-500 line-clamp-2 mb-2">
              {item.description}
            </p>
            <h3 className="text-xl font-bold text-green-600">
              ${item.price.toFixed(2)}
            </h3>
            <p className="text-yellow-600 font-medium">
              ⭐ {item?.rating?.rate} / 5
            </p>
            <button
              onClick={() => handleAtToCartButton(item)}
              className="mt-3 w-full bg-black text-white py-2 cursor-pointer rounded-xl hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
