import Swal from "sweetalert2";
import { clienteAxios } from "../axios";
import { TProductos } from '../reducers/productosReducer';
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  OBTENER_PRODUCTOS_CARGANDO,
  OBTENER_PRODUCTOS_ERROR,
  OBTENER_PRODUCTOS_EXITO,
} from "../types";


// crear nuevos productos
// esta es la funcion que es llamada en el componente
export const creatNuevoProductoAction = (producto: TProductos) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async (dispatch: any) => {
    dispatch(agregarProducto());

    try {
      // agregamo a la API
      await clienteAxios.post("productos", producto);
      // esto agrega el producto al state
      dispatch(agregarProductoExito(producto));
        // muestro una alerta
        Swal.fire(
            'Exito',
            'Producto agregado con Exito',
            'success'
        )
    
    } catch (error) {
      dispatch(agregarProductoError(true));
      Swal.fire({
        icon: 'error',
        title: 'Hubo un Error',
        text: 'Lo sentimos, hubo un error'
      })
    }
  };
};

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

// si se guardo en la con exito
const agregarProductoExito = (producto: TProductos) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

// si hubo un error
const agregarProductoError = (error: boolean) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: error,
});


export const obtenetProductosAction = () =>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async(dispatch:any)=>{
        dispatch(obtenerProductos())

        try {
          const respuesta = await clienteAxios.get('productos');
          dispatch(listadoProductos(respuesta.data))
          
        } catch (error) {
         dispatch(listadoProductosError(true));
          
        }
    }
}

const obtenerProductos = ()=>({
    type : OBTENER_PRODUCTOS_CARGANDO,
    payload: true,
})

const listadoProductos = (productos:TProductos[]) =>({
    type : OBTENER_PRODUCTOS_EXITO,
    payload: productos,
})
const listadoProductosError = (error:boolean) =>({
    type : OBTENER_PRODUCTOS_ERROR,
    payload: error,
})

