import {
    AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_ERROR, AGREGAR_PRODUCTO_EXITO,
    // AGREGAR_PRODUCTO_EXITO, 
    // AGREGAR_PRODUCTO_ERROR
} from '../types'

export type TProductos = {
    id?: number;
    nombre: string;
    precio: number;
}

type AppState = {
    productos : TProductos[];
    error : string | null;
    loading: boolean;
}

type AppAction = {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload? : any;
}


export const initialProductoState: AppState = {
    productos : [],
    error: null,
    loading: false,
}

export default function productosReducer(state : AppState = initialProductoState, action:AppAction): AppState{
    switch (action.type) {
        case AGREGAR_PRODUCTO:
        return {
            ...state,
            loading:action.payload
        }

        case AGREGAR_PRODUCTO_EXITO: 
        return {
            ...state,
            loading: false,
            productos : [...state.productos, action.payload]
        }

        case AGREGAR_PRODUCTO_ERROR: 
        return {
            ...state,
            loading: false,
            error: action.payload
        }

        default:
            return state;
    }
}