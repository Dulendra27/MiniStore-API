import { useContext } from "react"
import { DataContext } from "./Function"
import add_icon from '../assets/add_icon.png'
import {Link,Routes,Route } from "react-router-dom"
import AddToCart from "./AddToCart"
import Items from "./Items"
export default function Product(){

const {products,searchProduct,handleInputChange,handleSearch,handleProductClick,selected}= useContext(DataContext)
return(
<>
    <div className='product-list-container'>
    <h1 className='heading'> MINI STORE </h1>
 <nav className="search-container">
  <input type="text"
  className="search-input"
  placeholder="Search For Products"
  value={searchProduct}
  onChange={handleInputChange}
  />
  <button className="search-btn" onClick={handleSearch}>Search</button>
   <Link to="/Items"> <button className="items-btn">Items</button></Link>
 
  <Link to="/AddToCart"><img src={add_icon} alt="" className="add-to-cart" /></Link>
  </nav>
  <Routes>
  <Route path="/" element={<Product/>}/>  
  <Route path="/Items" element={<Items/>}/>
  <Route path="/AddToCart" element={<AddToCart/>}  />
   </Routes>
  </div>
  </>
)

}