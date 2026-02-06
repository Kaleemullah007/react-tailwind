import { Outlet } from "react-router-dom"
import { Footer } from "../components/common/Footer"
import { Header } from "../components/common/Header"

export const Dashboard = () => {
  return (
<>
    <Header />
    <div className="container grid grid-cols-1 justify-center">
        <p>Welcome to REact and Tailwind Page</p>
    </div>
    <main>
        <section>
            <div className="container grid grid-cols-2 justify-center items-center h-screen">

                <div className="card bg-white rounded-lg shadow-lg">
                    Left
                </div>
                <div className="card bg-white rounded-lg shadow-lg"> Second </div>  
            </div>
            <Outlet />
        </section>
    </main>
    <Footer />
</>
      
  )}