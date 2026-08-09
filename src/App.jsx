import { useState } from 'react'
import { Routes, Route } from "react-router-dom"; 
import Watches from './pages/watches';
import Landing from './pages/landing';
import Mobile from './pages/mobile';
import Smartphone from './pages/smartphone';
import Grosery from './pages/grosery';


function App() {
  return (
    <>
<Routes>
  <Route path={'/'} element={<Landing/>}/>
  <Route path={'/watches'} element={<Watches/>}/>
  <Route path={'/mobile'} element={<Mobile/>}/>
  <Route path={'/smartphone'} element={<Smartphone/>}/>
  <Route path={'/grosery'} element={<Grosery/>}/>

  

</Routes>

    </>
  )
}

export default App