import { useState } from 'react'
import './App.css'
import { Dashboard } from './layouts/Dashboard'
function App() {

  return (
    <>
      <Dashboard />
      <div className="container grid grid-cols-2 justify-center items-center h-screen">

        <div className="card bg-white rounded-lg shadow-lg">
         Left
        </div>
        <div className="card bg-white rounded-lg shadow-lg"> Second </div>

      </div>
      

    </>
  )
}

export default App
