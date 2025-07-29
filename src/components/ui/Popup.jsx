import React from "react";

const Popup = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[90%] max-w-4xl flex overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="w-1/2 bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4"
          />
        </div>

        <div className="w-1/2 p-6 flex flex-col gap-3">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-green-600 font-semibold text-lg">${product.price}</p>
          <p className="text-yellow-500">Rating: {product.rating?.rate || product.rating}</p>
          <p className="text-sm text-gray-400">Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
