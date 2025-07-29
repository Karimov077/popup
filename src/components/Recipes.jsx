import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "./ui/Skeleton";

const Recipes = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const limit = 8
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/recipes", {params: {limit: limit}})
      .then((res) => {
        setData(res.data);
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
      <h2>Recipes</h2>
      {error && (
        <div>
          <img src="" alt="" />
          <p className="text-red-500 text-center">Something went wrong :(</p>
        </div>
      )}
      {loading && (
        <Skeleton count={limit}/>
      )}

      <div className="container mx-auto grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
        {data?.recipes?.map((product) => (
          <div
            className="shadow-lg rounded-lg overflow-hidden"
            key={product.id}
          >
            <div>
              <img src={product.image} alt="" />
            </div>
            <div className="p-4">
              <h2 title={product.name} className="font-bold line-clamp-1">
                {product.name}
              </h2>
              <p className="text-yellow-500">{product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
