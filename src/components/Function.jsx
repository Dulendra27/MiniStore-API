import {createContext, useEffect, useState } from "react";
import axios from 'axios'
export const DataContext = createContext()
export default function Function(props){
   const [originalProduct,setOriginalProduct] = useState([])
    const [products,setProducts] = useState([]);
    const [searchProduct,setSearchProduct] = useState()
    const [selected,setSelected] = useState([])
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then(response =>{
           setProducts(response.data)
          setOriginalProduct(response.data)
        })
        .catch(error => {
           console.log(error)
        });
       },[])
         const handleSearch = () => {
            if(searchProduct===''){
               setProducts(originalProduct)
            }
         else{ const filteredProducts =
           products.filter((product)=>product.title.toLowerCase().includes(searchProduct.toLowerCase()))
           setProducts(filteredProducts)
          }
         }
         const handleInputChange = (e) => {
            setSearchProduct(e.target.value)
         }
         const handleProductClick  = (products) => { 
            if(!selected.includes(products)){
               setSelected([...selected,products])
            }
         }
     return(
         <DataContext.Provider value={{products,searchProduct,handleInputChange,handleSearch,selected,handleProductClick}}>
            {props.children}
         </DataContext.Provider>
        
     )  

}