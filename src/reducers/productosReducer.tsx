import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  OBTENER_PRODUCTOS_CARGANDO,
  OBTENER_PRODUCTOS_ERROR,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTO_EDITAR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_EDITADO_ERROR,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  PRODUCTO_ELIMINADO_EXITO,
} from "../types";

export type TProductos = {
  id?: number;
  nombre: string;
  precio: number;
};

type AppState = {
  productos: TProductos[];
  error: string | null | boolean;
  loading: boolean;
  productoEliminar?: string | null;
  productoEditar?: TProductos | null;
};

type AppAction = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

export const initialProductoState: AppState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
};

export default function productosReducer(
  state: AppState = initialProductoState,
  action: AppAction
): AppState {
  switch (action.type) {
    case OBTENER_PRODUCTOS_CARGANDO:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };

    case AGREGAR_PRODUCTO_ERROR:
    case OBTENER_PRODUCTOS_ERROR:
    case PRODUCTO_ELIMINADO_ERROR:
    case PRODUCTO_EDITADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      };

    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoEliminar: action.payload,
      }

    case PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(producto => producto.id !== state.productoEliminar),
        productoEliminar: null
      }

    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoEditar: action.payload,
      }

    case PRODUCTO_EDITADO_EXITO: 
    return{
      ...state,
      productos: state.productos.map(productoEditar => productoEditar.id === action.payload.id ? productoEditar=action.payload : productoEditar),
      productoEditar: null
    }

    default:
      return state;
  }
}
