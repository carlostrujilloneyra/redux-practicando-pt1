import { types } from "../types";
import clienteAxios from "../config/axios";
import Swal from 'sweetalert2';

// Aquí van todas las acciones

// Crear nuevos productos
export const handleAddProduct = (product = {}) => {
	return async (dispatch) => {
		// dispatch (action)
		dispatch({
			type: types.agregar_producto,
			payload: true
		})

		try {
			// Insertar en la API (Base de datos)
			await clienteAxios.post('/productos', product);
			
			dispatch({
				type: types.agregar_producto_exito,
				payload: product
			})

			// Ya se insertó correctamente, así que mostraremos la alerta:
			Swal.fire(
				'Correcto',
				'El producto se agregó correctamente',
				'success'
			)

		} catch (error) {
			dispatch({
				type: types.agregar_producto_error,
				payload: true
			})

			// Alerta de error
			Swal.fire({
				icon: 'error',
				title: 'Hubo un error',
				text: 'Hubo un error, intenta de nuevo'
			})

		}

	}
}

// Obtener los productos de la base de datos
export const handleGetProducts = () => {
	return async (dispatch) => {
		dispatch({
			type: types.comenzar_descarga_productos,
			payload: true
		})

		try {
			const rpta = await clienteAxios.get('/productos');
			const { data } = rpta; //data: todos los elementos que tengas en tu array
			dispatch({
				type: types.descarga_productos_exito,
				payload: data
			})

		} catch (error) {
			dispatch({
				type: types.descarga_productos_error,
				payload: false
			})
		}

	}
}


// Action para eliminar producto:
export const handleDeleteProduct = (id) => {
	return async (dispatch) => {
		dispatch({
			type: types.obtener_producto_eliminar,
			payload: id
		})

		// Intentando de eliminar un producto:
		// En el try va todo lo que quiero hacer si es que funciona
		// En el catch va si no funciona
		try {
			await clienteAxios.delete(`/productos/${id}`);

			// Si todo sale bien, dispara la accion eliminar exitosa:
			dispatch({
				type: types.producto_eliminado_exito
			})

			// Si se elimina el producto, muestra la alerta:
			Swal.fire(
				'Eliminado',
				'El producto se eliminó correctamente',
				'success'
			)

		} catch (error) {
			dispatch({
				type: types.producto_eliminado_error,
				payload: true
			})
		}

	}
}

// Action para editar el producto
export const getProductToEdit = (product = {}) => {
	return (dispatch) => {
		dispatch({
			type: types.obtener_producto_editar,
			payload: product
		})
	}
}

// Accion que te va a actualizar el producto
export const handleUpdateProduct = (product = {}) => {
	return async (dispatch) => {
		dispatch({
			type: types.comenzar_edicion_producto
		})

		try {
			// Aquí llamamos a la API
			await clienteAxios.put(`/productos/${product.id}`, product)
	
			dispatch({
				type: types.producto_editado_exito,
				payload: product
			})
		} catch (error) {
			dispatch({
				type: types.producto_editado_error,
				payload: true
			})
		}

	}
}