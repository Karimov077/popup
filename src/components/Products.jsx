import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "./ui/Skeleton";
import ErrorWidget from "./ui/ErrorWidget";
import Popup from "./ui/Popup";
import { Rate } from "antd";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const limit = 12;

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products", { params: { limit } })
      .then((res) => {
        setData({ products: res.data });
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">Products</h2>
      {error && <ErrorWidget />}
      {loading && <Skeleton count={limit} />}

      <div className="container mx-auto grid grid-cols-4 gap-[30px] max-lg:grid-cols-3 max-md:grid-cols-2 ">
        {data?.products?.map((product) => (
          <div
            className="shadow-lg px-[10px] rounded-lg overflow-hidden cursor-pointer border border-[#ddd] dark:border-[#474646] hover:scale-[1.02] transition"
            key={product.id}
            onClick={() => setSelectedProduct(product)}
          >
            <div>
              <img src={product.image} alt="" className="h-[200px] object-contain w-full bg-white p-[10px]" />
            </div>
            <div className="p-4">
              <h2 title={product.title} className="font-bold line-clamp-1">
                {product.title}
              </h2>
              <br />
              <div className="flex justify-center items-center">
              <Rate className=" " />
              </div>
           <div className="flex gap-4 mt-[10px] justify-between items-center">
              <p className="text-yellow-600">narxi:${product.price}</p>
              <button className="flex items-center justify-center text-[#fff] w-[50px] h-[20px] bg-green-500 rounded-[8px] py-[15px] px-[10px]">
                sell
              </button>
           </div>

            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      <Popup product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

export default Products;
