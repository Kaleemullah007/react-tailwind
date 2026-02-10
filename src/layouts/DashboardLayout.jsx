import { Outlet,NavLink } from "react-router-dom"
import { Header } from "../components/common/Header"
import { Footer } from "../components/common/Footer"


export const DashboardLayout = () => {
  return (
<>
    <Header />
    <div className="flex justify-center p-4 w-full bg-gray-200">
        <p>Welcome to React and Tailwind Page</p>
    </div>
    <nav>
        <ul className="flex gap-4 justify-center p-4 bg-gray-300">
            
            <li><NavLink to="/" className="text-blue-500 hover:underline">Home</NavLink></li>
            <li><NavLink to="/Gallery" className="text-blue-500 hover:underline">Gallery</NavLink></li>
            <li><NavLink to="/about" className="text-blue-500 hover:underline">About</NavLink></li>
            <li><NavLink to="/contact" className="text-blue-500 hover:underline">Contact</NavLink></li>
            
            
        </ul>
    </nav>
    <main>
        <section>
          <Outlet />
        </section>

    </main>
    <Footer />
</>
      
  )}