import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <nav className=" bg-sky-800 text-white py-6 px-10 rounded-b-lg flex items-center justify-between w-full  md:text-3xl text-xl md:text-start text-center">
            <div className="container">
                <h1>
                    <Link data-cy="titulo-header" to="/">
                    CRUD - React + Redux + Json-Server + Axios
                    </Link>
                    </h1>
            </div>
        </nav>
    )
}
