import './DeleteModal.css'
export function DeleteModal(){
    return(
        <div className='delete-modal'>
            <img className='big-icon' src="../../icons/deleteCircleCross.svg" alt="" />
            <div className='delete-modal-data'>
                <header className='delete-modal-title'> ¿Esta seguro que desea eliminar?</header>
                <p className='delete-modal-text'>Si, elimina este producto no podra recuperarlo...</p>
            </div>
            <div className='delete-modal-btn-container'>
                <button className='delete-modal-btn'> Cancelar </button>
                <button className='delete-modal-btn delete-modal-btn-destroy'> Borrar </button>
            </div>
        </div>
    )
}