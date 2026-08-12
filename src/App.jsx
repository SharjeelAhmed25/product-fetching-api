import { useState } from 'react'
import { Routes, Route } from "react-router-dom"; 
import Watches from './pages/watches';
import Landing from './pages/landing';
import Mobile from './pages/mobile';
import Smartphone from './pages/smartphone';
import Grosery from './pages/grosery';
import Productdetail from './pages/productdetail';
import Search from './pages/search';


function App() {
  return (
    <>
<Routes>
  <Route path={'/'} element={<Landing/>}/>
  <Route path={'/watches'} element={<Watches/>}/>
  <Route path={'/mobile'} element={<Mobile/>}/>
  <Route path={'/smartphone'} element={<Smartphone/>}/>
  <Route path={'/grosery'} element={<Grosery/>}/>
  <Route path={'/productdetail/:id'} element={<Productdetail />}/>
  <Route path={'/search'} element={<Search />}/>

  

</Routes>

    </>
  )
}

export default App