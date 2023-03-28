import React from 'react'
import { Link } from 'react-router-dom'
import "./Syle.css"

const CardAlbum = ({dataAlbum}) => {

  function agregarProducto(dataAlbum){
    carrito.push(dataAlbum)
    console.log(dataAlbum)
    mostrarCarrito()
  }
  let carrito = []
  const modalBody = document.querySelector(".modal .modal-body")
  const mostrarCarrito = () => {

    carrito.forEach((dataAlbum)=>{
      const {img,artista,precio} = dataAlbum
      modalBody.innerHTML += `
      <div className="modal-contenedor">
          <img className="img-carrito" src="${img}"></div>
        <div>
          <p>Artista: ${artista}</p >
          <p>Precio: ${precio}</p>
          <button className="btn btn-danger">Eliminar</button>
        </div>
      </div>
    `
  })
  }


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
        <button onClick={()=>{agregarProducto(dataAlbum)}}>Comprar</button>   
      </div>
    </div>  
  )
}

export default CardAlbum