import { useContext } from "react"
import { DataContext } from "./Function"
export default function Items(){
     const {products,searchProduct,handleInputChange,handleSearch,handleProductClick,selected}= useContext(DataContext)
return(
<>
<div className="list-container">
      {products.map((product)=>(
        <div className='list-item' key={product.id} >
             <img src={product.image} alt="" className='product-img'/>
              <h2 className='product-name'>{product.title}</h2>
              <p className='product-price'>PRICE : ${product.price}</p>
              <p className="category">CATEGORY : {product.category} </p>
              <button className="add" onClick={()=>handleProductClick(product)}>Add to Cart</button>
              <p className='product-description'>DESCRIPTION :  {product.description}</p>
              
       </div>
      ))}
    </div>  
</>
)


}