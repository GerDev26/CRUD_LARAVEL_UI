import './ProductContainer.css'
import { ProductCard } from '../ProductCard/ProductCard'
import { DeleteModal } from '../DeleteModal/DeleteModal'
import { useState } from 'react'
export function ProductContainer({request}){
    
    const [deleteId, setDeleteId] = useState(null)
    const [deleteModal, setDeleteModal] = useState(false)
 
     let openDestroy = (id) => {
        setDeleteModal(true)
        setDeleteId(id)
     }

     let closeDestroy = () => {
        setDeleteModal(false)
        setDeleteId(null)
     }



    return(
        <main className='product-container'>
            <DeleteModal openClose={deleteModal} id={deleteId} callback={closeDestroy}/>
            {request ? request.map(product => <ProductCard key={product.id} openDestroy={openDestroy} product={product}/>) : <h1>Cargando</h1>}
        </main>
    )
}