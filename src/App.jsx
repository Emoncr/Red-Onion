import { createContext, useReducer, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import FoodDetails from './Components/FoodDetails/FoodDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'



function App() {
  return (
    <BrowserRouter>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path=':id' element={<FoodDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
