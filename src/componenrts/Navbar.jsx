import { NavLink } from "react-router-dom"


export const Navbar=()=>{
    return(<>
   
        <nav>
            <div className="navrow">
              <NavLink  className={({ isActive }) => (isActive ? "active-link" : "Nav")} to="/">Home</NavLink>
               <NavLink  className={({ isActive }) => (isActive ? "active-link" : "Nav")} to="/about">About</NavLink>
                <NavLink  className={({ isActive }) => (isActive ? "active-link" : "Nav")} to="/register">Register</NavLink>
                <NavLink  className={({ isActive }) => (isActive ? "active-link" : "Nav")} to="/login">Login</NavLink>
            </div>
          
        </nav>

    </>)
} 