import { Link } from "react-router-dom"

export const Productos = () => {
  return (
    <div>
      <div>
        <p>
          Productos
        </p>
        <Link to="/productos/nuevo"> Nuevo Producto + </Link>
      </div>

    </div>
  )
}
