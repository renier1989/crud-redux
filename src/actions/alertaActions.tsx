import { Dispatch } from "redux"
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types"
export type TAlerta= {
    msg: string
}

export function mostrarAlertaAction(alerta:TAlerta){
    return(dispatch:Dispatch)=>{
        dispatch(mostrarAlerta(alerta))
    }
}

const mostrarAlerta = (alerta:TAlerta) =>({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

export function ocultarAlertaAction(){
    return(dispatch:Dispatch)=>{
        dispatch(ocultarAlerta());
    }
}

const ocultarAlerta = () =>({
    type: OCULTAR_ALERTA
})