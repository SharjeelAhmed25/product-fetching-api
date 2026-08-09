import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar2 from '../components/Navbar2';
import Productcard from '../components/productcard';
import phone from "../assets/smartphone.png";


const Smartphone = () => {
 let [data , setData] = useState([]);

  let mobiledata = async ()=>{
    try {

      let response = await axios.get("https://dummyjson.com/products/category/smartphones");
      console.log(response.data)
      setData(response.data.products)
      
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    mobiledata();
  },[])

  return (
     <>
   <Navbar2/>
      <div
     className="cursor-pointer h-[750px] bg-cover bg-center rounded-2xl mb-8"
     style={{ backgroundImage: `url(${phone})` }}
   >
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {data.map((product)=>(
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

export default Smartphone