import { Reducer, combineReducers } from "redux";
import productosReducer ,{ initialProductoState } from "./productosReducer";
import alertaReducer, { initialAlertaState } from "./alertaReducer";


export type RootState = {
    productos: typeof initialProductoState
    alerta: typeof initialAlertaState
}

const rootReducer: Reducer<RootState> =  combineReducers({
    productos : productosReducer,
    alerta : alertaReducer
})

export default rootReducer