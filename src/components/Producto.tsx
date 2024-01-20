import { useNavigate } from "react-router-dom";
import { TProductos } from "../reducers/productosReducer";
import { useDispatch } from "react-redux";
import { productoEliminarAction, obtenerProductoEditarAction } from "../actions/productosActions";
import Swal from "sweetalert2";

type ProductoProp = {
  producto: TProductos;
};
export const Producto = ({ producto }: ProductoProp) => {
  const { nombre, precio, id } = producto;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEliminarProducto = (id: string) => {
    Swal.fire({
      title: "Segur@ que desea eliminar?",
      text: "No será posible revertir esta accion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si , Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(productoEliminarAction(id));
      }
    });
  }

  const redireccionarEditar = (producto:TProductos)=>{
    dispatch(obtenerProductoEditarAction(producto));
    navigate(`productos/editar/${producto.id}`);
  }

  return (
    <tr key={id} className="border-b  text-gray-700 font-semibold">
      <td>{nombre}</td>
      <td>{precio}</td>
      <td>
        <div className="flex gap-5 items-center justify-center text-xl">
          {/* <Link to={`productos/editar/${id}`}>🔄</Link> */}
          <button type="button" onClick={()=>redireccionarEditar(producto)}>🔄</button>
          <button onClick={() => handleEliminarProducto(id)} >❌</button>
        </div>
      </td>
    </tr>
  );
};
