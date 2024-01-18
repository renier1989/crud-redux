import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITO,
  OBTENER_PRODUCTOS_CARGANDO,
  OBTENER_PRODUCTOS_ERROR,
  OBTENER_PRODUCTOS_EXITO,
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

    default:
      return state;
  }
}
