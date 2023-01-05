import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product, count) => {
        if(cart.length === 0){
            setCart([{...product, cantidad: count}])
        }else{
            const findedProduct = cart.find(item => item.id === product.id)
            if(!findedProduct){
                setCart([
                    ...cart,
                    {
                    ...product, 
                    cantidad: count
                    }
                ])
            }else{
                const filteredProducts = cart.filter(item => item.id !== product.id)
                setCart([
                    ...filteredProducts,
                    {
                        ...findedProduct,
                        cantidad: findedProduct.cantidad + count
                    }
                ])
            }
        }
    }

    const totalProductosCarrito = () => {
        return cart.reduce((acc, product) => acc + product.cantidad, 0)
    }
    const totalPrecioCarrito = (second) => { 
        return cart.reduce((acc, product) => acc + product.cantidad * product.precio, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    const deleteProductById = (id) => {
        const newCart = cart.filter(item => item.id !== id)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            totalProductosCarrito,
            totalPrecioCarrito,
            deleteProductById,
            emptyCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}