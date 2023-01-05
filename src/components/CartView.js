import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

const CartView = () => {
  const {cart, totalPrecioCarrito, deleteProductById, emptyCart} = useContext(CartContext)

  const handleDeleteProduct = (id) => {
    deleteProductById(id)
  }
  return (
    <div className='flex flex-col m-10 p-5 justify-center items-center bg-black'>
      {
        cart.length > 0 ? (
          <>
            <h1 className='uppercase font-semibold text-lg m-1 p-1 text-white '>Carrito</h1>
            <div className='w-[60%] flex relative h-[50px] bg-dimWhite m-1 font-medium bg-white text-black'>
              <div className='flex items-center justify-center w-[15%]'/>
              <div className='flex items-center justify-center w-[45%]'>Producto</div>
              <div className='flex items-center justify-center w-[15%]'>Precio</div>
              <div className='flex items-center justify-center w-[12%]'>Cantidad</div>
              <div className='flex items-center justify-center w-[15%]'>TOTAL</div>
            </div>
            {
              cart.map((item) => {
                return(
                  <div key={item.id} className='w-[60%] flex relative h-[100%] bg-dimWhite m-1 bg-white text-black'>
                    <div className='flex justify-center items-center w-[12%]'>
                      <button onClick={() => handleDeleteProduct(item.id)} className='btn m-1 p-1 bg-black text-white'>Eliminar</button>
                    </div>
                    <div className='flex items-center justify-center w-[15%]'>
                      <img src={item.img} alt={item.category} className='h-[90%]'></img>
                    </div>
                    <div className='flex items-center w-[30%]'>
                      <h3>{item.destino}</h3>
                    </div>
                    <div className='flex items-center justify-center w-[15%]'>
                      <h3>${item.precio} p/u</h3>
                    </div>
                    <div className='flex items-center justify-center w-[12%]'>
                      <h3>{item.cantidad} u.</h3>
                    </div>
                    <div className='flex items-center justify-center w-[15%]'>
                      <h3>${item.cantidad * item.precio}</h3>
                    </div>
                </div>
                )
              }
                
              )
            }
            <div className='w-[60%] flex justify-end m-1'>
              <div className='w-[42%] flex relative h-[50px] bg-dimWhite font-medium items-center justify-between px-8  bg-white text-black'>
                <h3 className='uppercase'>Total Carrito:</h3>
                <h3 className='text-right'>${totalPrecioCarrito()}</h3>
              </div>
            </div>
            <div className='w-[60%] flex justify-end m-10 gap-5'>
              <button onClick={() => emptyCart()} className='btn bg-white text-black'>Vaciar Carrito</button>
              <Link to='/checkout' className='btn bg-white text-black'>Finalizar Compra</Link>
            </div>
          </> 
        ) : (
          <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-medium text-white'>El carrito esta vacio!!</h1>
            <div className='m-6'>
              <Link to='/' className='btn bg-white text-black'>Volver a Inicio</Link>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CartView