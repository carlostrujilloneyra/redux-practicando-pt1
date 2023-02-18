import { types } from "../types";

// Cada reducer tiene su propio state

const initialState = {
	productos: [],
	error: null,
	loading: false,
	productoeliminar: null,
	productoeditar: null
}

export const productosReducer = (state = initialState, action) => {
	switch (action.type) {

		case types.agregar_producto:
			return {
				...state,
				loading: action.payload
			}
		
		case types.agregar_producto_exito:
			return {
				...state,
				loading: false,
				productos: [...state.productos, action.payload]
			}
		
		case types.agregar_producto_error:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		
		case types.comenzar_descarga_productos:
			return {
				...state,
				loading: action.payload
			}
		
		
		case types.descarga_productos_exito:
			return {
				...state,
				loading: false,
				error: null,
				productos: action.payload
			}
		
		case types.descarga_productos_error:
			return {
				...state,
				error: action.payload
			}
		
		case types.obtener_producto_eliminar:
			return {
				...state,
				productoeliminar: action.payload
				// productos: productos.filter(producto => producto.id !== action.payload)
			}
		
		case types.producto_eliminado_exito:
			return {
				...state,
				productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
				productoeliminar: null
			}
		
		case types.producto_eliminado_error:
			return {
				...state,
				loading: false,
				error: action.payload
			}
		
		case types.obtener_producto_editar:
			return {
				...state,
				productoeditar: action.payload
			}
		
		case types.producto_editado_exito:
			return {
				...state,
				productoeditar: null,
				productos: state.productos.map(producto => {
					return (producto.id === action.payload.id) ? producto = action.payload : producto;
				})
			}
		
		case types.producto_editado_error:
			return {
				...state,
				error: action.payload
			}
		
		default:
			return state;
	}
}