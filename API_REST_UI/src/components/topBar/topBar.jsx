import './topBar.css'
import React, { useRef } from 'react';


export function TopBar({ onSearchChange, onCategoryChange }) {
  const searchProducts = useRef(null);
  const productsCategory = useRef(null);

  const searchChange = () => {
    const value = searchProducts.current.value;
    onSearchChange(value);
  };

  const categoryChange = () => {
    const value = productsCategory.current.value;
    onCategoryChange(value);
  };

  return (
    <nav className='topbar'>
        <input onChange={searchChange} ref={searchProducts} className='topbar-search' type="text" />
        <select onChange={categoryChange} ref={productsCategory} name="options" id="">
          <option value="title">Titulo</option>
          <option value="price">Precio</option>
          <option value="brand">Marca</option>
          <option value="model">Modelo</option>
        </select>
        <button className=' topbar-add-btn' type='button'></button>
    </nav>
  );
}
