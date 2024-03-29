import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Productos } from "./components/Productos"
import { Layout } from "./layout/Layout"
import { NuevoProducto } from './components/NuevoProducto'
import { EditarProducto } from './components/EditarProducto'

// Redux
import { Provider } from 'react-redux'
import { store } from './store';

function App() {


  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Productos />} />
            <Route path="productos/nuevo" element={<NuevoProducto />} />
            <Route path="productos/editar/:id" element={<EditarProducto />} />
          </Route>
        </Routes>
      </Provider>
    </Router>
  )
}

export default App
