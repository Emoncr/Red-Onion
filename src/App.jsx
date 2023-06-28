import { createContext, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import FoodDetails from './Components/FoodDetails/FoodDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path=':id' element={<FoodDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
