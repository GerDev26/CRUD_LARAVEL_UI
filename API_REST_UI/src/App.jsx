import './App.css'
import { ProductCard } from './components/ProductCard/ProductCard'
import {useSearchProducts } from './hooks/useProducts'
import { TopBar } from './components/topBar/topBar'
import { useRef } from 'react';

function App() {

  let [request, setSearch, setCategory] = useSearchProducts("");

  const timerRef = useRef(null);
  const handleSearchChange = (value) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSearch(value);
    }, 150);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  return (
    <>
      <TopBar onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange}/>

      <main className='product-container'>
        {request ? request.map(product => <ProductCard key={product.id} product={product}/>) : <h1>Cargando</h1>}
      </main>
    </>
  )
}

export default App
