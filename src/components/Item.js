import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, destino, category, precio, disponibilidad, fechaSalida, fechaLlegada, duracion, img, stock, descripcion }) => {
  return (
    <div>
        <div className="relative mx-auto w-full">
	        <div href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
            <div className="shadow p-4 rounded-lg bg-white">
              <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full rounded">
                  <div className="absolute m-0 p-0">
                    <img className='rounded' src={img}></img>
                  </div>
                </div>

                <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                  Disponible
                </span>
              </div>

              <div className="mt-4">
                <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">{destino}</h2>
                <p className="mt-2 text-sm text-gray-800 line-clamp-1 uppercase" title="New York, NY 10004, United States ">{category}</p>
              </div>

              <div className="grid grid-rows-5 gap-4 mt-8 ">
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                  <li className='list-disc '>Fecha de Salida: {fechaSalida}</li>
                </p>

                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <li className='list-disc'>Fecha de Llegada: {fechaLlegada}</li>
                </p>

                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <li className='list-disc'>Disponibilidad: {disponibilidad}</li>
                </p>

                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <li className='list-disc'>Duracion: {duracion}</li>
                </p>
              </div>

              <div className="grid grid-cols-2 mt-8">
                <div className="flex items-center">
                  <div className="relative">
                  <Link to={`/product/${id}`} className='btn bg-black text-white'>
              ver Detalle
            </Link>
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                  </div>
                </div>

                <div className="flex justify-end items-center">
                    <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                      <span className="text-sm uppercase text-red-500 font-bold">$</span>
                      <span className="text-2xl text-red-500 font-bold">{precio}</span>
                    </p>
                </div>
              </div>
            </div>
	        </div>
        </div>
  </div>
  )
}

export default Item
