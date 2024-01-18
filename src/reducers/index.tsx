import { Reducer, combineReducers } from "redux";
import productosReducer ,{ initialProductoState } from "./productosReducer";


export type RootState = {
    productos: typeof initialProductoState
}

const rootReducer: Reducer<RootState> =  combineReducers({
    productos : productosReducer
})

export default rootReducer