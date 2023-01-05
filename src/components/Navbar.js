import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cartContext'

const Navbar = ({product}) => {

  const {totalProductosCarrito,totalPrecioCarrito} = useContext(CartContext)

  return (
    <div className="navbar bg-white text-black">
        <div className="flex-1">
            <Link to='/' className=" btn-ghost normal-case text-xl m-2 p-2">Melatini Turismo</Link>
            <ul className="menu menu-horizontal bg-white text-black rounded-box">

                <div className="dropdown dropdown-end ">
                    <a tabIndex={0} className="btn btn-ghost rounded-btn normal-case m-1 p-1">Destinos</a>
                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-white text-black rounded-box w-52 mt-4">
                        <li><a><Link to={`/item/l20ByHFXO6XdFYrkpZgm`}>Cataratas del Iguazu</Link></a></li> 
                        <li><a><Link to={`/item/kxgNkXx4hvH8DOldOa3w`}>Termas Federacion</Link></a></li> 
                        <li><a><Link to={`/item/v9TyVIFKtzM0jcjJMKzy`}>Camboriu, Brasil</Link></a></li> 
                        <li><a><Link to={`/item/E9rIwHXVXJIQaMCbIIWK`}>Glaciar Perito Moreno</Link></a></li> 
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <a tabIndex={0} className="btn btn-ghost rounded-btn normal-case m-1 p-1">Filtrar por transporte: </a>
                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-white text-black rounded-box w-52 mt-4">
                        <li><a><Link to={`/category/avion`}>Avion</Link></a></li> 
                        <li><a><Link to={`/category/colectivo`}>Colectivo</Link></a></li> 
                    </ul>
                </div>
            </ul>
        </div>

        <div className="flex-none ">
            <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{totalProductosCarrito()}</span>
                    </div>
                </label>

            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52  shadow bg-white text-black">
                <div className="card-body">
                    <span className="font-bold text-lg">{totalProductosCarrito()} Producto(s)</span>
                    <span className="">$ {totalPrecioCarrito()}</span>
                    <div className="card-actions">

                    <Link to='/cart'><button className="btn bg-black text-white">Ver carrito</button></Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar