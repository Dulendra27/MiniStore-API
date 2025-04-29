import './App.css'
import { useContext } from "react"
import { DataContext } from "./components/Function"
import add_icon from './assets/add_icon.png'
import {Link,Routes,Route } from "react-router-dom"
import AddToCart from "./components/AddToCart"
import Items from "./components/Items"
import Home from "./components/Home"
export default function App() {
    const {products,searchProduct,handleInputChange,handleSearch,handleProductClick,selected}= useContext(DataContext)
    return(
    
        <div className='product-list-container'>
        <Link to="/Home"><button className='heading'> MINI STORE </button></Link>
     <div className="search-container">

      <input type="text"
      className="search-input"
      placeholder="Search For Products"
      value={searchProduct}
      onChange={handleInputChange}
      />
      <button className="search-btn" onClick={handleSearch}>Search</button>
     
      <Link to="/Items"> <button className="items-btn">Items</button></Link>
     
     <Link to="/AddToCart"><img src={add_icon} alt="" className="add-to-cart" /></Link>
     
      </div>
      
    
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Home" element={<Home/>}/>
     <Route path="/Items" element={<Items/>}/>
     <Route path="/AddToCart" element={<AddToCart/>} />
      </Routes>
      </div>
      
    )
    


}

