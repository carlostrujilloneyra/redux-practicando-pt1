import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import { useDispatch } from "react-redux"
import { getProductToEdit, handleDeleteProduct } from "../actions/productoActions"

export const ProductElement = ({ id, nameProduct, price }) => {

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const deleteProductSelected = (id) => {

		// Mostrar la alerta si está seguro de eliminar el producto o no
		Swal.fire({
			title: 'Estás seguro',
			text: "Un producto que se elimina no se puede recuperar",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminar!',
			cancelButtonText: 'Cancelar'
		}).then((result) => {
			if (result.isConfirmed) {
				// Pasamos la acción
				dispatch(handleDeleteProduct(id));

			}
		})
	}

	const redirectEditProduct = (id) => {
		dispatch(getProductToEdit({
			id,
			nameProduct,
			price
		}))
		navigate(`/productos/editar/${id}`, {
			replace: true
		});
	}

	return (
		<>
			<tr>
				<td>{nameProduct}</td>
				<td><span className="font-weight-bold">s/{price}</span></td>
				<td className="acciones">
					<button
						className="btn btn-primary mr-2"
						onClick={() => redirectEditProduct(id)}
					>
						Editar
					</button>

					<button
						type="button"
						className="btn btn-danger"
						onClick={() => deleteProductSelected(id)}
					>
						Eliminar
					</button>
					
				</td>
			</tr>
		</>
	)
}