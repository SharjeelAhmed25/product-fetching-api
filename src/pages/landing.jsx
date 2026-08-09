import React, { useEffect, useState } from 'react'
import Navbar2 from '../components/Navbar2'
import axios from 'axios';
import Productcard from '../components/productcard';
import landinghero from "../assets/landinghero.png";

const Landing = () => {

  let [allproducts, setAllroducts] = useState([]);


  let fetchproducts = async () => {
    try {

      let response = await axios.get("https://dummyjson.com/products?limit=0")
      console.log(response.data)
      setAllroducts(response.data.products)

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchproducts();

  }, [])


  return (
    <div>
      <Navbar2 />
     <div
  className="cursor-pointer h-[800px] bg-cover bg-center rounded-2xl mb-8"
  style={{ backgroundImage: `url(${landinghero})` }}
>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {allproducts.map((product) => (
          <Productcard
            key={product?.id}
            pid={product?.id}
            description={product?.description}
            rating={product?.rating}
            title={product?.title}
            price={product?.price}
            category={product?.category}
            productimg={product?.thumbnail}
          />
        ))}
      </div>
    </div>
  );

}

export default Landing