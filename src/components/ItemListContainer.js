import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../config'
import ItemList from './ItemList'
import Loader from './Loader'

const ItemListContainer = () => {

  const {categoryID} = useParams()

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const getProducts = () => {
    const collectionRef = collection(db, 'viajes')
    getDocs( collectionRef )
      .then( snapshot => setProducts( snapshot.docs.map(d => ({...d.data(), id: d.id}))))
      .finally(() => setLoading(false))
  }

  const getProductsByCategory = (category) => {
    const collectionRef = query(collection(db, 'viajes'), where('category', '==', category))
    getDocs( collectionRef )
      .then( snapshot => setProducts( snapshot.docs.map(d => ({...d.data(), id: d.id}))))
      .finally(() => setLoading(false))
  }

  /* 
    const getProducts = () => {
    setTimeout(() => {
      fetch('../local.json')
        .then(res => res.json())
        .then(data => {
          setProducts(data)
          setLoading(false)
        })
    }, 500);
  }

  const getProductsByCategory = (category) => {
    setTimeout(() => {
      fetch('../local.json')
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          const filteredProducts = data.filter(product => product.category === category)
          setProducts(filteredProducts)
        })
    }, 500);
  }
  */

  useEffect(() => {
    setLoading(true)
    if (!categoryID) {
      getProducts()
    }else{
      getProductsByCategory(categoryID)
    }
  }, [categoryID])
  

  return (
    <div className='flex justify-center'>
      {
        loading ?
        <Loader/>
        :
        <ItemList products={products}/>
      }
    </div>
  )
}

export default ItemListContainer