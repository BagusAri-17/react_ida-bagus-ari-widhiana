import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateAccount from './pages/CreateAccount'
import CreateProduct from './pages/CreateProduct'
import LandingPage from './pages/LandingPage'
import DetailProducts from './pages/DetailProducts'
import Login from './pages/Login'
import Private from './routers/Private'
import Protect from './routers/Protect'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Private />}>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/create-product' element={<CreateProduct />}></Route>
        <Route path='/create-account' element={<CreateAccount />}></Route>
        <Route path='/products-details/:id' element={<DetailProducts />} />
      </Route>
      <Route path='/' element={<Protect />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App