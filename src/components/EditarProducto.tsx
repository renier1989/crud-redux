import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { editarProductoAction } from "../actions/productosActions";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react';


interface Iproduct {
  nombre:string;
  precio:number;
}

export const EditarProducto = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate()
  const [productoState, setProductoState] = useState<Iproduct>({
    nombre: '',
    precio: 0
  })

  const productoEditar = useSelector(state => state.productos.productoEditar);

  // pongo en el state los datos del producto que se queiren editar
  useEffect(() => {
    setProductoState(productoEditar);
  }, [productoEditar])

  const onChangeDatosProducto = (e:React.ChangeEvent<HTMLInputElement>) =>{    
    setProductoState({
      ...productoState,
      [e.target.name]: e.target.value,
    })
  }
  
  // if (!producto) return (
  //   <div className="text-center font-semibold text-sky-900 flex flex-col">No hay producto para editar
  //     <Link className=" mt-3 text-xl" to="/">Volver</Link>
  //   </div>);

  const { nombre, precio } = productoState
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editarProductoAction(productoState));
    navigate('/');
    
  }

  return (
    <>
      <div className="text-center mb-4">
        <h2 className="text-3xl text-sky-900 font-semibold py-3">Editar Producto</h2>
      </div>
      <div className="w-full justify-center rounded-md border-2 shadow-md">
        <form
          onSubmit={handleSubmit}
          className="py-5 px-10 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="nombre" className="font-semibold text-gray-500">Nombre del Producto</label>
            <input
              value={nombre}
              type="text"
              name='nombre'
              className="p-2 outline-none border-2 border-sky-900/30 rounded-md
              text-gray-600 px-4 text-sm font-semibold "
              placeholder="Nombre del Producto"
              onChange={onChangeDatosProducto}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="precio" className="font-semibold text-gray-500">Precio del Producto</label>
            <input
              value={precio}
              type="text"
              name="precio"
              className="p-2 outline-none border-2 border-sky-900/30 rounded-md
              text-gray-600 px-4 text-sm font-semibold "
              placeholder="Precio del Producto"
              onChange={onChangeDatosProducto}
            />
          </div>
          <button type="submit"
            className=" bg-sky-900 p-1 rounded-md text-white text-xl"
          >
            Editar Producto
          </button>
        </form>
      </div>
    </>
  )
}
