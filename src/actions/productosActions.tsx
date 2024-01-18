import { TProductos } from "../reducers/productosReducer";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
} from "../types";

// crear nuevos productos
// esta es la funcion que es llamada en el componente
export const creatNuevoProductoAction = (producto: TProductos) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (dispatch: any) => {
    dispatch(agregarProducto());

    try {
      dispatch(agregarProductoExito(producto));
    } catch (error) {
      dispatch(agregarProductoError(true));
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
