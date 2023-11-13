import React from "react";
import { Routes, Route} from 'react-router-dom'
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact"
import Home from "../Pages/Home";
import Shope from "../Pages/Shope";
import Footer from "../Footer/index"
import Cart from "../Cart"



const Rotas = () => {
    return(
    <div>

    {/* Rotas do do navbar     */}
    <Routes>
    <Route path='/' element={<Home/> } />
    <Route path='/about-us' element={<AboutUs/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/shope' element={<Shope/>} />
    <Route path='/Cart' element={<Cart/> } />
    </Routes>


    {/* Rotas do footer     */}
    <Routes>
    <Route path='/' element={<Footer/> } />
    <Route path='/about-us' element={<Footer/>} />
    <Route path='/contact' element={<Footer/>} />
    <Route path='/shope' element={<Footer/>} />
    </Routes>

    </div>
    )
}

export default Rotas;