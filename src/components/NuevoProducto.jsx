import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleShowAlert } from "../actions/alertaActions";
import { handleAddProduct } from "../actions/productoActions";
import { useForm } from "../hooks/useForm";

export const NuevoProducto = () => {

  // Hook para el formulario
  const {formValues,nameProduct, price, handleInputChange, resetForm } = useForm({
    nameProduct: '',
    price:''
  })

  const navigate = useNavigate();

  // Utilizar el dispatch de Redux
  const dispatch = useDispatch();

  const state = useSelector(state => state.productos.loading)
  const error = useSelector(state => state.productos.error)

  // State de alerta
  const stateAlert = useSelector(state => state.alerta.alert);

  // Cuando el usuario haga submit
  const submitNewProduct = (e) => {
    e.preventDefault();
    
    // Validar formulario
    if (nameProduct.trim() === '' || price <= 0) {
      const alert = {
        msg: 'Ambos campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p-3'
      }

      dispatch(handleShowAlert(alert));

      return;
    }
    
    // si no hay errores

    // crear el nuevo producto
    dispatch(handleAddProduct(formValues));
    resetForm();

    navigate('/', {
      replace: true
    })

  }

	return (
    <>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4 font-weight-bold">
                Agregar Nuevo Producto
              </h2>

              {stateAlert ? <p className={stateAlert.classes}>{stateAlert.msg}</p> : null}

              <form onSubmit={submitNewProduct}>
                <div className="form-group">
                  <label>Nombre Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Producto"
                    name="nameProduct"
                    onChange={handleInputChange}
                    value={nameProduct}
                  />
                </div>

                <div className="form-group">
                  <label>Precio Producto</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Precio del Producto"
                    name="price"
                    onChange={handleInputChange}
                    value={price}
                  />
								</div>

								<button
									type="submit"
									className="btn btn-primary font-weight-bold text-uppercase d-block w-100 mt-4"
								>
									Agregar
								</button>
								
              </form>

              {
                state ? <p>Cargando...</p> : null
              }

              {
                error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : 
                  null
              }

            </div>
          </div>
        </div>
      </div>
    </>
  );
}