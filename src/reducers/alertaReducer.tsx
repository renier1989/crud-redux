import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

type AppState = {
    alerta: string | null
}
type AppAction = {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
};
export const initialAlertaState: AppState = {
    alerta: null
}

export default function alertaReducer(state: AppState = initialAlertaState, action: AppAction): AppState {
    switch (action.type) {

        case MOSTRAR_ALERTA:
            return{
                ...state,
                alerta : action.payload,
            }
        case OCULTAR_ALERTA:
            return{
                ...state,
                alerta : null,
            }

        default:
            return state;
    }
}