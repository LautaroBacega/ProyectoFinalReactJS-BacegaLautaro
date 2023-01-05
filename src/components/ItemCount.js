import React, { useState } from 'react'

const CharCount = ({stock, handleAddToCart}) => {

    const [count, setCount] = useState(1)

    const onAddHandler = () => {
        if(count < stock){
            setCount( count => count + 1)
        }
    }

    const onSubHandler = () => {
        if(count >= 1){
            setCount( count => count - 1)
        }
    }


  return (
    <>
        <div className='btn bg-black text-white m-5'>
            <button onClick={onSubHandler} className='p-4'> - </button>
            <span className='text-xl m-2'>{count}</span>
            <button onClick={onAddHandler} className='p-4'> + </button>
        </div>

        <button onClick={() => handleAddToCart(count)} className='btn bg-black text-white m-5' type='button'>Agregar al carrito</button>
    </>
  )
}

export default CharCount