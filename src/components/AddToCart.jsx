import { useContext } from "react"
import { DataContext } from "./Function"

export default function AddToCart(){
    const {products,searchProduct,handleInputChange,handleSearch,handleProductClick,selected}= useContext(DataContext)
return(
    <>
 
      {selected.map((select)=>{
        return(
        <>
      <div className='add-item' key={select.id} >
             <img src={select.image} alt="" className='add-img'/>
              <h2 className='add-name'>{select.title}</h2>
              <p className='add-price'>PRICE : ${select.price}</p>
              <p className="add-category">CATEGORY : {select.category} </p>
       </div>
       </>
       )
        })}
    </>
)





}