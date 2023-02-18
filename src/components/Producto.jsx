import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetProducts } from "../actions/productoActions";
import { ProductElement } from "./ProductElement";

export const Producto = () => {

	const dispatch = useDispatch();

	useEffect(() => {

		// Consultar la API
		const cargarProductos = () => {
			dispatch(handleGetProducts());
		}

		cargarProductos();

	}, [])

	const productos = useSelector(state => state.productos.productos)
	const error = useSelector(state => state.productos.error);
	// const loading = useSelector(state => state.productos.loading);

	return (
		<>
			<h2 className="text-center my-5">Listado de Productos</h2>

			{/* Si es que hay error */}

			{
				error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p>
					:
					null
			}

			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope = "col">Nombre</th>
						<th scope = "col">Precio</th>
						<th scope = "col">Acciones</th>
					</tr>
				</thead>

				<tbody>
					{/* Aquí consultatemos a la API por el resultado */}

					{
						productos.length === 0 ? 'No hay productos'
							:
							productos?.map(product => {
								return <ProductElement {...product} key={product.id} />
							})
					}

				</tbody>

			</table>

		</>
	)
}