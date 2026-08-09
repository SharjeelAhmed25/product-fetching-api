import React, { useEffect, useState } from 'react'
import Navbar2 from '../components/Navbar2';
import Productcard from '../components/productcard';
import axios from 'axios';
import hero from "../assets/zerohero.png";


const Watches = () => {
   let [watches , setWatches] = useState([])

     let getwatch = async ()=>{
    try {
      let response = await axios.get("https://dummyjson.com/products/category/mens-watches");
      console.log(response.data)
      setWatches(response.data.products)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    getwatch()
  },[])
  return (
   <>
   <Navbar2/>
      <div
     className="cursor-pointer h-[750px] bg-cover bg-center rounded-2xl mb-8"
     style={{ backgroundImage: `url(${hero})` }}
   >
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {watches.map((product)=>(
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
    ))

    }

   </div>
   </>
        
  )
}

export default Watches;