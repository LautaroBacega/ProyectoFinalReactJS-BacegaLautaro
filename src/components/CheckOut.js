import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { addOrder } from '../config'
import { CartContext } from '../context/cartContext'


const CheckOut = () => {
  
  const { totalProductosCarrito, totalPrecioCarrito, emptyCart, productID, cartItems, cartLenght, clearCart } = useContext(CartContext)

  // Use states que permiten obtener el id de la compra, mostrar un modal final y obtener los datos del cliente
  const [idCompra, setIdCompra] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [buyer, setBuyer] = useState({
      name: "",
      surname: "",
      telephone: "",
      email: "",
      emailConfirm: "",
  })

  // Obtener información acerca de la fecha en que se realizó la compra
  const orderDate = new Date().toLocaleDateString()

  // Obtener los datos del cliente
  const handleSubmitChange = (e) => {
      setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }

  // Generación de la orden, con información del cliente, los items, el precio y la fecha en que se realizó la compra
  function orderHandler() {
      const order = {
          buyer,
          item: cartItems,
          price: totalPrecioCarrito(),
          date: orderDate,
      }

      addOrder(order).then(data => {
          setIdCompra(data)
      })

  }

  return (
    <>
            <div className="flex justify-center items-center mx-auto xl:max-w-7xl mx-6 xl:mx-auto">
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="flex w-full flex-col lg:flex-row justify-start items-start">
                        <div className="flex flex-col self-start w-full md:w-1/2 mr-6">
                            <h2>Resúmen</h2>
                            <div className="flex flex-col border border-gray-200 p-4 mt-6">
                                <div className="flex flex-row justify-between ">
                                    <p>Cantidad de items:</p>
                                    <p>{totalProductosCarrito()}</p>
                                </div>
                                <div className="flex flex-row justify-between font-semibold mt-10 ">
                                    <p>Total:{/* {item.cantidad * item.precio} */}</p>
                                    <p>${(totalPrecioCarrito())}</p>
                                </div>
                            </div>
                            <Link to='/cart' className=" flex flex-row items-center mt-3 lowercase">
                                <button className="btn">Volver al carrito</button>
                            </Link>
                        </div>

                        <div className="flex flex-col justify-start items-start w-full mt-6 lg:mt-0 mb-3">
                            <form className="space-y-6">
                                <h2>Detalles de facturación</h2>
                                <input
                                    className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full bg-white "
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Nombre"
                                />
                                <input
                                    className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full bg-white "
                                    id="surname"
                                    type="text"
                                    name="surname"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Apellido"
                                />
                                <input
                                    className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full bg-white"
                                    id="telephone"
                                    type="tel"
                                    name="telephone"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Teléfono (insertar como mínimo 7 dígitos)"
                                />
                                <input
                                    className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full bg-white"
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="E-mail"
                                />
                                <input
                                    className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full bg-white"
                                    id="emailConfirm"
                                    type="email"
                                    name="emailConfirm"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Confirmar e-mail"
                                />
                            </form>

                            {
                              buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) 
                            
                                ? (
                                    <input 
                                        onClick={() => { orderHandler(); setShowModal(true) }} 
                                        className="btn m-5"
                                        type="submit" 
                                        value="Proceder al pago">{/* <SweetAlert/> */}</input>
                                ) : (
                                    <input 
                                    className="btn m-5"
                                        type="submit" 
                                        value="Proceder al pago" 
                                        disabled 
                                    />
                                )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-gray-800`}>
                <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
                    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                      <h1>¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h1>
                      <h1>Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra ID: {productID}. Esperamos que hayas tenido una agradable experiencia en Melatini Turismo. ¡Hasta la próxima!</h1>
                        <Link to="/" className="mt-6 flex justify-center">
                            <button onClick={emptyCart} className= "btn">
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
  )
}

export default CheckOut