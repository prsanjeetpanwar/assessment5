import Image from 'next/image'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Products from './components/Products'
import ProductCatalog from './components/ProductCatalog'

export default function Home() {
  return (
  <>

 <Navbar/>

<Products/>
 <Button/>
  <ProductCatalog/>
  </>
  )
}
