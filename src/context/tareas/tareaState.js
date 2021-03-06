import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import tareaContext from './tareaContext'
import TareaReducer from './tareaReducer'
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types'

const TareaState = props => {

    const initialState = {
        tareas: [
            { id: 1, proyectoId: 1, nombre: 'Elegir Plataforma', estado: true },
            { id: 2, proyectoId: 2, nombre: 'Elegir Colores', estado: false },
            { id: 3, proyectoId: 3, nombre: 'Elegir Platadormas de pago', estado: false },
            { id: 4, proyectoId: 4, nombre: 'Elegir Hosting', estado: true },
            { id: 5, proyectoId: 1, nombre: 'Elegir Colores', estado: false },
            { id: 6, proyectoId: 2, nombre: 'Elegir Platadormas de pago', estado: false },
            { id: 7, proyectoId: 3, nombre: 'Elegir Hosting', estado: true },
            { id: 8, proyectoId: 4, nombre: 'Elegir Hosting', estado: true },
            { id: 9, proyectoId: 4, nombre: 'Elegir Colores', estado: false },
            { id: 10, proyectoId: 3, nombre: 'Elegir Platadormas de pago', estado: false },
            { id: 11, proyectoId: 2, nombre: 'Elegir Hosting', estado: true },
            { id: 12, proyectoId: 1, nombre: 'Elegir Hosting', estado: true },
            { id: 13, proyectoId: 3, nombre: 'Elegir Hosting', estado: true },
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    // Crear dispatch y state
    const [ state, dispatch ] = useReducer(TareaReducer, initialState)

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4()
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Eliminar tarea por id
    const eliminarTarea = id => {        
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // Cambiar el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Extrae una tarea para su edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // Actualizar tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    // Elimina tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }

    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            { props.children }
        </tareaContext.Provider>
    );
}
 
export default TareaState;