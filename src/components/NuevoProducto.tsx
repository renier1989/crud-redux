import { useDispatch } from "react-redux";
import { creatNuevoProductoAction } from "../actions/productosActions";
import { useState } from "react";
import { TProductos } from "../reducers/productosReducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TAlerta, mostrarAlertaAction, ocultarAlertaAction } from "../actions/alertaActions";

export const NuevoProducto = () => {
  const [nombre, setNombre] = useState<string>("");
  const [precio, setPrecio] = useState<number>(0);
  const navigate = useNavigate();

  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const alerta = useSelector((state)=>state.alerta.alerta);
  const dispatch = useDispatch();
  const agregarProducto = (producto: TProductos) =>
    dispatch(creatNuevoProductoAction(producto));

  // esto se va a ejecuar cuando el usuario haga submit
  const submitCrearProducto = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // validar el formulario
      if (nombre.trim() === "" || precio <= 0) {
        const alerta:TAlerta = {
          msg: 'Todos los campos son requeridos'
        }
        dispatch(mostrarAlertaAction(alerta));
        return ;
      }


      // si no hay ningun error entonces oculto la alerta 
      dispatch(ocultarAlertaAction());

      // crear el nuevo producto
      agregarProducto({
        nombre,
        precio,
      });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="text-center mb-4">
        <h2 className="text-3xl text-sky-900 font-semibold py-3">
          Registrar Nuevo Producto
        </h2>
      </div>
      {alerta && <p className="bg-red-600 rounded-md text-white text-center p-2 my-2 mx-10">{alerta.msg}</p>}
      <div className="w-full justify-center rounded-md border-2 shadow-md">
        <form
          onSubmit={submitCrearProducto}
          className="py-5 px-10 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="nombre" className="font-semibold text-gray-500">
              Nombre del Producto
            </label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              id="nombre"
              type="text"
              className="p-2 outline-none border-2 border-sky-900/30 rounded-md
                        text-gray-600 px-4 text-sm font-semibold "
              placeholder="Nombre del Producto"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="precio" className="font-semibold text-gray-500">
              Precio del Producto
            </label>
            <input
              value={precio}
              onChange={(e) => setPrecio(Number(e.target.value))}
              id="precio"
              type="number"
              className="p-2 outline-none border-2 border-sky-900/30 rounded-md
                        text-gray-600 px-4 text-sm font-semibold "
              placeholder="Precio del Producto"
            />
          </div>
          <button
            type="submit"
            className=" bg-sky-900 p-1 rounded-md text-white text-xl"
          >
            Registrar Producto
          </button>
        </form>

        {cargando ? (
          <p className="bg-green-700 rounded-md text-white text-center p-2 my-2 mx-10">
            CARGANDO...
          </p>
        ) : null}
        {error ? (
          <p className="bg-red-600 rounded-md text-white text-center p-2 my-2 mx-10">
            Hubo un error
          </p>
        ) : null}
      </div>
    </>
  );
};
