import React, { useEffect, useState } from 'react'
import Navbar2 from '../components/Navbar2';
import Productcard from '../components/productcard';
import axios from 'axios';
import hero from "../assets/zerohero.png";
import Loader from '../components/loader'





const Watches = () => {
  let [watches, setWatches] = useState([])
  let [loader, setLoader] = useState(true)

  let getwatch = async () => {
    try {
      setLoader(true)
      let response = await axios.get("https://dummyjson.com/products/category/mens-watches");
      console.log(response.data)
      setWatches(response.data.products)
    } catch (error) {
      console.error(error)
    } finally {
      setLoader(false)
    }
  }
  useEffect(() => {
    getwatch()
  }, [])
  return (<>
    <Navbar2 />
    {loader ?
      (<Loader />)
      :
      (<> {/* Hero */}
        <div className="w-full h-[750px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${hero})` }} >
          <h1 className="text-4xl font-bold text-white"> Watches Collection </h1>
        </div> {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {watches.map((product) => (
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


export default Watches;