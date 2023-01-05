import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'
import CharCount from './ItemCount'

const ItemDetail = ({product, count}) => {

  const [purchase, setPurchase] = useState(false)
  const {addToCart, cart} = useContext(CartContext)

  const handleAddToCart = (count) => {
    addToCart(product,count)
    setPurchase(!purchase)
  }

  return (
    <div className="grid grid-cols-2 grid-rows-2 p-20 bg-black">
        <div className="bg-white row-span-2 p-5 m-5 container mx-auto rounded-l-lg">
          <div className="grid grid-rows-1 p-5 m-5 place-items-center">
                  <div className="carousel w-full object-cover h-48 w-96">
                      <div id="slide1" className="carousel-item relative w-full object-cover h-48 w-96">
                          <img src={`${product.carousel1}`} className="w-full" />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide4" className="btn btn-circle bg-black text-white">❮</a> 
                              <a href="#slide2" className="btn btn-circle bg-black text-white">❯</a>
                          </div>
                      </div>

                      <div id="slide2" className="carousel-item relative w-full object-cover h-48 w-96">
                          <img src={`${product.carousel2}`}  className="w-full" />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide1" className="btn btn-circle bg-black text-white">❮</a> 
                              <a href="#slide3" className="btn btn-circle bg-black text-white">❯</a>
                          </div>
                      </div>

                      <div id="slide3" className="carousel-item relative w-full object-cover h-48 w-96">
                          <img src={`${product.carousel3}`} className="w-full" />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide2" className="btn btn-circle bg-black text-white">❮</a> 
                              <a href="#slide4" className="btn btn-circle bg-black text-white">❯</a>
                          </div>
                      </div>

                      <div id="slide4" className="carousel-item relative w-full object-cover h-48 w-96">
                          <img src={`${product.carousel4}`} className="w-full" />
                          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                              <a href="#slide3" className="btn btn-circle bg-black text-white">❮</a> 
                              <a href="#slide1" className="btn btn-circle bg-black text-white">❯</a>
                          </div>
                      </div>

                    </div>  
          </div>

          <div className='grid grid-rows-1 p-5 m-5  place-items-center'>
            <iframe width="560" height="315" src={`${product.link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

        </div>          

        <div className= "bg-white row-span-2 p-5 m-5 container mx-auto rounded-r-lg">
            <div className='grid grid-rows-3 text-black'>

                <div className='row-span-1 p-1 m-1'>
                    <h1 className='text-2xl font-bold p-1 m-1'>{product.destino}</h1>

                    <p className='p-1 m-1'>{product.descripcion}</p>
                </div>

                <div className='row-span-1 p-1 m-1'>
                    <ul className='p-5 m5'>
                        <li className='list-disc p-1 m-1'>Fecha de Salida: {product.fechaSalida}</li>
                        <li className='list-disc p-1 m-1'>Fecha de Llegada: {product.fechaLlegada}</li>
                        <li className='list-disc p-1 m-1'>Asientos Disponibles: {product.disponibilidad} </li>
                        <li className='list-disc p-1 m-1'>Transporte: {product.category}</li>
                        <li className='list-disc p-1 m-1'>Duracion: {product.duracion}</li>
                    </ul>
                    
                </div>

                <div className='row-span-1 p-1 m-1'>
                    <div className='grid grid-cols-2 '>

                        

                        <div className='flex justify-center'>
                            {
                              !purchase ? (
                                <>
                                  <div className='flex justify-center m-5'>
                                    <CharCount handleAddToCart={handleAddToCart} stock={product.stock }/>
                                  </div>

                                  
                                </>
                              ) : (
                                <>
                                  <Link to='/cart' className='btn m-1 bg-black text-white'>
                                    Finalizar compra
                                  </Link>
                                </>
                              )
                            }
                            {
                              purchase &&
                              <Link to='/' className='btn m-1  bg-black text-white'>
                                Volver
                              </Link>
                            }
                        </div>

                    </div>
                </div>

            </div>            
        </div>
        
    </div>
  )
}

export default ItemDetail