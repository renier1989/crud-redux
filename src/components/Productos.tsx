import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { obtenetProductosAction } from "../actions/productosActions";
import { useEffect } from "react";
import { Producto } from "./Producto";

export const Productos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // CONSULTAMOS LA API
    const cargarProductos = () => dispatch(obtenetProductosAction());
    cargarProductos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productos = useSelector(state => state.productos.productos);

  return (
    <>
      <div className="text-center mb-4">
        <h2 className="text-3xl text-sky-900 font-semibold py-3">
          Listado de Producto
        </h2>
      </div>
      <div className="my-5 flex justify-center">
        <Link
          className="p-3 rounded-md bg-sky-900 text-white font-semibold"
          to="/productos/nuevo"
        >
          Nuevo Producto ➕
        </Link>
      </div>
      <div className="w-full justify-center rounded-md border-2 shadow-md">
        <table className="table-auto w-[80%] mx-auto text-center  my-4">
          <thead className="border-b-2  ">
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          {productos.length === 0 ? <tr><td colSpan={3}>No se han registrado productos</td></tr>: (
            productos.map(producto =>(
              <Producto
              key={producto.id}
              producto={producto}
              />
            ) )

          ) }
          </tbody>
        </table>
      </div>
    </>
  );
};
