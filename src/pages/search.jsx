
import React, { useState } from 'react';
import axios from 'axios';
import Productcard from '../components/productcard';
import Loader from '../components/loader';
import { useNavigate } from 'react-router-dom';

const Search = () => {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const searchProducts = async (value) => {

    setSearch(value);

    if (value.trim() === "") {
      setData([]);
      return;
    }

    try {
      setLoader(true);

      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${value}`
      );

      console.log(response.data);

      setData(response.data.products);

    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Search Box */}
      <div className="p-6 flex justify-center gap-10">
<button
  onClick={() => navigate(-1)}
  className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition"
>
  ← Back
</button>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => searchProducts(e.target.value)}
          className="w-full max-w-xl px-5 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Loader */}
      {loader ? (
        <Loader />
      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

          {data.map((product) => (
            <Productcard
              key={product.id}
              pid={product.id}
              price={product.price}
              title={product.title}
              category={product.category}
              description={product.description}
              productimg={product.thumbnail}
              rating={product.rating}
            />
          ))}

        </div>

      )}

      {/* No Results */}
      {!loader && search && data.length === 0 && (
        <p className="text-center text-gray-500 text-lg">
          No products found
        </p>
      )}

    </div>
  );
};

export default Search;

