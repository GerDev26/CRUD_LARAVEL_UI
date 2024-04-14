import { useEffect, useState } from 'react'
import './ProductCard.css'
import { API_PRODUCT_ENDPOINT } from '../../services/myApi'
export function ProductCard({product}){

    let [destroy, setDestroy] = useState(false)
    
    const isDelete = destroy ? "hidden" : "product-card"

    let handleClickDelete = () => {
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

    let handleClickUpdate = () =>{

    }

    return(
        <article className={isDelete}>
            <button className='product-btn product-update-btn'>
                <img onClick={handleClickUpdate} className='small-icon' src="../../../icons/pencilSquare.svg" alt="" />
            </button>
            <button onClick={handleClickDelete} className='product-btn product-delete-btn'>
                <img className='small-icon' src="../../../icons/deleteTrash.svg" alt="" />
            </button>
            <div className='product-data'>
                <header className='product-title'>{product.title}</header>
                <div className='product-item'>
                    <object className='small-icon' type="image/svg+xml" data="../../../icons/dollar.svg"></object>
                    <p>${product.price}</p>
                </div>
                <div className='product-item'>
                    <object className='small-icon' type="image/svg+xml" data="../../../icons/brand.svg"></object>
                    <p>{product.brand}</p>
                </div>
                <div className='product-item'>
                    <object className='small-icon' type="image/svg+xml" data="../../../icons/model.svg"></object>
                    <p>{product.model}</p>
                </div>
            </div>

            <footer className='product-footer'>
                <div className='product-item'>
                    <img className='small-icon' src="../../icons/calendarDays.svg" alt="" />
                    <p>4/1</p>
                </div>
                <div className='product-item'>
                    <img className='small-icon' src="../../icons/pen.svg" alt="" />
                    <p>4/12</p>
                </div>
            </footer>
        </article>
    )
}