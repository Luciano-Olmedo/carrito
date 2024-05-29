
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ComprasPage from './pages/ComprasPage'
import Carrito from './pages/Carrito'
import { ProductosProvider } from './context/ProductosProvider'
import { CartProvider } from './context/CartProvider'


export const App = () => {
  return (
    <ProductosProvider>

      <Navbar></Navbar>
        <div className='container'>
          <Routes>
            <Route path='/' element={<ComprasPage />}>    </Route>
            <Route path='/carrito' element={<Carrito />}>    </Route>
            <Route path='/*' element={<Navigate to="/" />}>  </Route>
          </Routes>
        </div>
      
    </ProductosProvider>
  )
}

