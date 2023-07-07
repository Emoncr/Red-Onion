import { createContext, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import FoodDetails from './Components/FoodDetails/FoodDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'


export const cartContext = createContext(); 

function App() {

  const [cart, setCart] = useState([])


  return (
    <BrowserRouter>
      <cartContext.Provider value={[cart, setCart]}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path=':id' element={<FoodDetails />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </cartContext.Provider>
    </BrowserRouter>
  )
}

export default App
