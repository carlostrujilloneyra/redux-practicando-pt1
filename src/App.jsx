import { Route, Routes } from "react-router-dom"
import { EditarProducto, Header, NuevoProducto, Producto } from "./components"

// Redux
import { Provider } from "react-redux"
import store from "./store"

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Producto />} />
            <Route path="/productos/nuevo" element={<NuevoProducto />} />
            <Route path="/productos/editar/:id" element={<EditarProducto />} />
          </Routes>
        </div>
      </Provider>
    </>
  );
}