import React from 'react'
import TopHeader from './components/header/TopHeader'
import BtmHeader from './components/header/BtmHeader'
import Home from './page/Home/Home'
import { Route, Routes, useParams } from 'react-router-dom'
import ProductDetails from './page/productDetails/ProductDetails';
import Cart from './page/cart/Cart'


function App() {
 
  return (
    <>
      <header>
        <TopHeader/>
        <BtmHeader/>
      </header>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/products/:id' element={<ProductDetails/>}/>
  
</Routes>      
      
      
    </>
  )
}

export default App

