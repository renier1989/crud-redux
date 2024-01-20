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


        default:
            return state;
    }
}