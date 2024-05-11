import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'

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