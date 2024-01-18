export const NuevoProducto = () => {
    return (
        <>
            <div className="text-center mb-4">
                <h2 className="text-3xl text-sky-900 font-semibold py-3">Registrar Nuevo Producto</h2>
            </div>
            <div className="w-full justify-center rounded-md border-2 shadow-md">
                <form
                    className="py-5 px-10 flex flex-col gap-5"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="nombre" className="font-semibold text-gray-500">Nombre del Producto</label>
                        <input id="nombre" type="text"
                            className="p-2 outline-none border-2 border-sky-900/30 rounded-md
                        text-gray-600 px-4 text-sm font-semibold "
                            placeholder="Nombre del Producto"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="precio" className="font-semibold text-gray-500">Precio del Producto</label>
                        <input id="precio" type="text"
                            className="p-2 outline-none border-2 border-sky-900/30 rounded-md
                        text-gray-600 px-4 text-sm font-semibold "
                            placeholder="Precio del Producto"
                        />
                    </div>
                    <button type="submit"
                        className=" bg-sky-900 p-1 rounded-md text-white text-xl"
                    >
                        Registrar Producto
                    </button>
                </form>
            </div>
        </>
    )
}
