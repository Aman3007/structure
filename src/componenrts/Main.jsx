import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Fotter"

export const Main=()=>{
return(<>
<Header></Header>
    <Outlet></Outlet>
   <Footer></Footer>
</>)
}