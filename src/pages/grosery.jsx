import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar2 from '../components/Navbar2';
import Productcard from '../components/productcard';
import grosery from "../assets/grosery.png";
import Loader from '../components/loader'



const Grosery = () => {
 let [data , setData] = useState([]);
 let [loader ,setLoader] = useState(true);

  let groserydata = async ()=>{
    try {
setLoader(true)
      let response = await axios.get("https://dummyjson.com/products/category/groceries");
      console.log(response.data)
      setData(response.data.products)
      
    } catch (error) {
      console.error(error)
    }finally{
    setLoader(false)
    }
  }
  useEffect(()=>{
    groserydata();
  },[])

  return (<>
    <Navbar2 />
    {loader ?
      (<Loader />)
      :
      (<> {/* Hero */}
        <div className="w-full h-[750px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${grosery})` }} >
          
        </div> {/* Products */}
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
              rating={product.rating} />))}
        </div>
      </>)}
  </>)
}

export default Grosery