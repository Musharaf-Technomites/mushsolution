import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import OurProductsPage from './Pages/Products/OurProductsPage'
import OurServicesPage from "./Pages/Srvices/OurServicesPage"
import ContactUsPage from "./Pages/ContactUsPage"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/our-services' element={<OurServicesPage />} />
        <Route path='/our-products' element={<OurProductsPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App