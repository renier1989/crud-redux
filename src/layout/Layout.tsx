import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export const Layout = () => {
  return (
    <div>
        <div>
            <Header/>
            <main className=" md:w-1/2 px-4 mx-auto md:mt-10 mt-4">
                <Outlet/>
            </main>
        </div>

    </div>
  )
}
