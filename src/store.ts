import { thunk } from "redux-thunk";
import rootReducer, { RootState } from "./reducers";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";

// Extiende la interfaz de Window para incluir __REDUX_DEVTOOLS_EXTENSION__
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => any;
  }
}

// Crea una interfaz para la forma del estado global
export interface StoreState {
  // Puedes agregar más propiedades según la estructura de tu estado
  root: RootState;
}

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
