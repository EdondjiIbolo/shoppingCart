import {Products} from './components/Products'
import {products as  initialProducts} from './mocks/products.json'
import { Header } from './components/Header'
import { useState } from 'react'
import { useFilter } from './hooks/useFilter.jsx'
import { Cart } from './components/Cart'
import {CartProvider} from './context/cart'


function App() {
  const [products] = useState(initialProducts)
  const {filterProduct} = useFilter()
  const filteredProducts = filterProduct(products)

  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={filteredProducts} />
    </CartProvider>

  )
}

export default App
