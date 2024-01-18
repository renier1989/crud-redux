import { Link } from "react-router-dom";
import { TProductos } from "../reducers/productosReducer";
type ProductoProp = {
  producto: TProductos;
};
export const Producto = ({ producto }: ProductoProp) => {
  const { nombre, precio, id } = producto;

  return (
    <tr key={id} className="border-b  text-gray-700 font-semibold">
      <td>{nombre}</td>
      <td>{precio}</td>
      <td>
        <div className="flex gap-5 items-center justify-center text-xl">
          <Link to={`productos/editar/${id}`}>🔄</Link>
          <button>❌</button>
        </div>
      </td>
    </tr>
  );
};
