import { useState } from 'react'
import './DeleteModal.css'
import { deleteProductAndReload } from '../../hooks/useProducts'
export function DeleteModal({openClose, id, callback}){


    const isOpen = openClose ? "delete-modal" : "delete-modal close"


    const handleClose = () => {
        callback()
    }

    const handleDelete = () => {
        deleteProductAndReload(id)
    }

    return(
        <div className={isOpen}>
            <img className='big-icon' src="../../icons/deleteCircleCross.svg" alt="" />
            <div className='delete-modal-data'>
                <header className='delete-modal-title'> ¿Esta seguro que desea eliminar?</header>
                <p className='delete-modal-text'>Si, elimina este producto no podra recuperarlo...</p>
            </div>
            <div className='delete-modal-btn-container'>
                <button onClick={handleClose} className='delete-modal-btn'> Cancelar </button>
                <button onClick={handleDelete} className='delete-modal-btn delete-modal-btn-destroy'> Borrar </button>
            </div>
        </div>
    )
}