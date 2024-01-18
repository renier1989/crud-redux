export type TProductos = {
    id: number;
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
    payload? : null;
}


export const initialProductoState: AppState = {
    productos : [],
    error: null,
    loading: false,
}

export default function productosReducer(state : AppState = initialProductoState, action:AppAction): AppState{
    switch (action.type) {
        default:
            return state;
    }
}