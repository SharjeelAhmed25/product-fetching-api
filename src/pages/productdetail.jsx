import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import Loader from '../components/loader'
import axios from 'axios'
import Detailcard from '../components/detailcard'

const Productdetail = () => {

    const {id} = useParams()
    console.log(id)
    let [data , setData] = useState([]);
    let [loader , setLaoder] = useState(true);
    
      let mobiledata = async ()=>{
        try {
          setLaoder(true)
          let response = await axios.get(`https://dummyjson.com/products/${id}`);
          console.log(response.data)
          setData([response.data])
          
        } catch (error) {
          console.error(error)
        }finally{
          setLaoder(false)
        }
      }
      useEffect(()=>{
        mobiledata();
      },[])
    

 return ( <> <Navbar2 /> {loader ? ( <Loader /> ) : ( <div className="w-full px-4 pt-2"> {data.map((product) => ( <Detailcard key={product.id} pid={product.id} price={product.price} title={product.title} category={product.category} description={product.description} productimg={product.thumbnail} rating={product.rating} /> ))} </div> )} </> )
}

export default Productdetail