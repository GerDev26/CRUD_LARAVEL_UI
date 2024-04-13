import { useEffect, useState } from 'react'
import './ProductCard.css'
import { API_PRODUCT_ENDPOINT } from '../../services/myApi'
export function ProductCard({product}){

    let [destroy, setDestroy] = useState(false)
    
    const isDelete = destroy ? "hidden" : "product-card"

    let handleClick = () => {
        console.log(destroy)
        console.log(product.id)
        setDestroy(true)
        
        fetch(API_PRODUCT_ENDPOINT + product.id, {
            method: 'DELETE',
        })
         .then(res => res.json())
         .then(data => {
            console.log(data)
         })
    }

    return(
        <article className={isDelete}>
            <button className='product-btn product-update-btn'>
                <img className='product-item-logo' src="../../../icons/pencilSquare.svg" alt="" />
            </button>
            <button onClick={handleClick} className='product-btn product-delete-btn'>
                <img className='product-item-logo' src="../../../icons/deleteTrash.svg" alt="" />
            </button>
            <div className='product-data'>
                <header className='product-title'>{product.title}</header>
                <div className='product-item'>
                    <img className='product-item-logo' src="../../icons/dollar.svg" alt="" />
                    <p>${product.price}</p>
                </div>
                <div className='product-item'>
                    <img className='product-item-logo' src="../../icons/brand.svg" alt="" />
                    <p>{product.brand}</p>
                </div>
                <div className='product-item'>
                    <img className='product-item-logo' src="../../icons/model.svg" alt="" />
                    <p>{product.model}</p>
                </div>
            </div>

            <footer className='product-footer'>
                <div className='product-item'>
                    <img className='product-item-logo' src="../../icons/calendarDays.svg" alt="" />
                    <p>4/1</p>
                </div>
                <div className='product-item'>
                    <img className='product-item-logo' src="../../icons/pen.svg" alt="" />
                    <p>4/12</p>
                </div>
            </footer>
        </article>
    )
}