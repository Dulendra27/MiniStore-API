import fashion from '../assets/fashion.jpg'
import Items from './Items'
import {Link,Routes,Route } from "react-router-dom"
export default function Home(){
    return(
        <>
        <div className="home-container">
         <div className="img-container">
         <img src={fashion} alt="" />
         </div>
         <div className="btn-container">
        <Link to="/Items"><button >SHOPING NOW</button></Link>
         </div>
        </div>
        <Routes>
        <Route path="/Items" element={<Items/>}/>
        </Routes>

        </>
    )


}