import React from 'react'
import Navbar from './component/Navbar/Navbar'
import SildeBar from './component/SildeBar/SildeBar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import Order from './pages/Orders/Order'
import List from './pages/List/List'
import { ToastContainer } from 'react-toastify';

const App = () => {

  const url="http://localhost:4000";

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <SildeBar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App