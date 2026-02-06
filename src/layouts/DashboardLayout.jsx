import { Outlet } from "react-router-dom"
import { Header } from "../components/common/Header"
import { Footer } from "../components/common/Footer"


export const DashboardLayout = () => {
  return (
<>
    <Header />
    <div className="flex justify-center p-4 w-full bg-gray-200">
        <p>Welcome to React and Tailwind Page</p>
    </div>
    <main>
        <section>
          <Outlet />
        </section>

    </main>
    <Footer />
</>
      
  )}