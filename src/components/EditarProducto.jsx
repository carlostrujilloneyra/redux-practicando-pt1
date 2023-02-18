import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleUpdateProduct } from "../actions/productoActions";
import { useForm } from "../hooks/useForm";

export const EditarProducto = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const product = useSelector(state => state.productos.productoeditar);

  const id = product?.id;

  const nameProductCreated = product?.nameProduct;

  const priceCreated = product?.price;


  const {nameProduct, price, handleInputChange} = useForm({
    nameProduct: nameProductCreated,
    price: priceCreated
  });

  const updateProduct = () => {
    // Dispara la acción de actualizar Producto
    dispatch(handleUpdateProduct({
      id,
      nameProduct,
      price
    }));

    navigate('/');

  }

	return (
    <>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Editar Producto
              </h2>

              <form onSubmit={updateProduct}>
                <div className="form-group">
                  <label>Nombre Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Producto"
                    name="nameProduct"
                    value={nameProduct}
                    onChange = {handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label>Precio Producto</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio del Producto"
                    name="price"
                    value={price}
                    onChange = {handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4"
                >
                  Guardar Cambios
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}