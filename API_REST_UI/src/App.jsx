import './App.css'
import { TopBar } from './components/topBar/topBar'
import { ProductContainer } from './components/ProductContainer/ProductContainer';
import {useSearchProducts } from './hooks/useProducts'
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
      <ProductContainer request={request}/>

    </>
  )
}

export default App
