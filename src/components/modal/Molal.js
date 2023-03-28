import React from 'react'
import { Link } from 'react-router-dom'
import "./Syle.css"

const Modal = ({dataAlbum}) => {

  function agregarProducto(dataAlbum){
    console.log(dataAlbum.id)
    console.log(carrito)
    carrito.push(dataAlbum)
    mostrarCarrito()
  }

  const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body")
    carrito.forEach((dataAlbum)=>{
      modalBody.innerHTML +=`
      <div className="modal-contenedor">
          <img className="img-carrito" src="${dataAlbum.img}"></div>
        <div>
          <p>Artista: ${dataAlbum.artista}</p >
          <p>Precio: ${dataAlbum.precio}</p>
        </div>
        <button className="btn btn-danger">Eliminar</button>
      </div>
      `
    })
  }
  
  let carrito = []

  return (
    <div className='caja'>
      <div className='card'>
      <Link className='link' to={`/detalles/${dataAlbum.id}`}>
        <div className='contenedor-img'>
          <img className="img" src={dataAlbum.img} alt={dataAlbum.album}/>
        </div>
        <div>
          <h2>
            {dataAlbum.artista}
          </h2>
          <h3>Album: {dataAlbum.album}</h3>
          <h3>Precio: {dataAlbum.precio}</h3>
        </div>
        </Link>
        <button onClick={() => agregarProducto(dataAlbum)}>Comprar</button>   
      </div>
    </div>  
  )
}

export default Modal