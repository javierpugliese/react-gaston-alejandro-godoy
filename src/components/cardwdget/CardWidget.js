import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from "@fortawesome/free-solid-svg-icons"
import "./Style.css";

const CardWidget = ({dataAlbum}) => {
  
  return (
    <div className='container-modal'>
        <button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <span className='cart-count'>0</span>
          <FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon>        
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Carrito de compras</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                <button type="button" className="btn btn-primary">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CardWidget