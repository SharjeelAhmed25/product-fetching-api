import React, { useEffect, useState } from 'react'
import Navbar2 from '../components/Navbar2'
import axios from 'axios';
import Productcard from '../components/productcard';
import landinghero from "../assets/landinghero.png";
import Loader from '../components/loader'


const Landing = () => {

  let [allproducts, setAllroducts] = useState([]);
   let [loader ,setLoader] = useState(true);
  


  let fetchproducts = async () => {
    try {
setLoader(true)

      let response = await axios.get("https://dummyjson.com/products?limit=0")
      console.log(response.data)
      setAllroducts(response.data.products)

    } catch (error) {
      console.error(error)
    }finally{
    setLoader(false)
    }
  }
  useEffect(() => {
    fetchproducts();

  }, [])


  return (<>
    <Navbar2 />
    {loader ?
      (<Loader />)
      :
      (<> {/* Hero */}
        <div className="w-full h-[750px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${landinghero})` }} >
          
        </div> {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {allproducts.map((product) => (
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

export default Landing