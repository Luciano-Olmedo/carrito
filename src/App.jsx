
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ComprasPage from './pages/ComprasPage'
import Carrito from './pages/Carrito'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'



export const App = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar></Navbar>
        <div className='container'>
          <Routes>
            <Route path='/' element={<ComprasPage />}>    </Route>
            <Route path='/carrito' element={<Carrito />}>    </Route>
            <Route path='/*' element={<Navigate to="/" />}>  </Route>
          </Routes>
        </div>
      </CarritoProvider>

    </ProductosProvider>
  )
}

