import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ComprasPage from './pages/ComprasPage'
import Carrito from './pages/Carrito'

const App = () => {
  return (

    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<ComprasPage/>}>    </Route>
        <Route path='/carrito' element={<Carrito/>}>    </Route>
        <Route path='/*' element={<Navigate to="/"/>}>  </Route>


      </Routes>
    </>
  )
}

export default App