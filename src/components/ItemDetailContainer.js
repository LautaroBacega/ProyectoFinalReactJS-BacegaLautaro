import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../config'

const ItemDetailContainer = () => {

  const {productID} = useParams()

  const [loading, setLoading] = useState()
  const [product, setProduct] = useState()

  const getProduct = (id) => {
    const docRef = doc(db, 'viajes', productID)
    getDoc( docRef ).then( snapshot => {
        setProduct( { id: snapshot.id, ...snapshot.data()} )
        /* console.log(snapshot.data()); */
    }).finally(() => setLoading(false))
  }

  useEffect(() => {
    setLoading(true)
    getProduct()
  }, [productID])

/*   const getProduct = (id) => {
    setTimeout(() => {
      fetch('../local.json')
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          const findedProducts = data.find(product => product.id === Number(id))
          setProduct(findedProducts)
        })
    }, 500);
  }

  useEffect(() => {
    setLoading(true)
    getProduct(productID)
  }, [productID]) */


  return (
    <div className='flex justify-center'>
      {
        loading ?
        <Loader/>
        :
        product && <ItemDetail product={product}/>
      }
    </div>
  )
}

export default ItemDetailContainer