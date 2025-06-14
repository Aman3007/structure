

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./componenrts/Main";
import { Home } from "./componenrts/Home";
import { About } from "./componenrts/About";
import Login from "./componenrts/Login";
import Register from "./componenrts/Register";
import "./App.css"
import Home2 from "./componenrts/Home2";

const router = createBrowserRouter([{
  path:"/",
  element:<Main></Main>,
  children:[{
     path:"/",
  element:<Home></Home>,
  },{
     path:"/about",
  element:<About></About>,
  }
,{
   path:"/login",
  element:<Login></Login>,
},
,{
   path:"/register",
  element:<Register></Register>,
},{
   path:"/mypage",
  element:<Home2></Home2>,
}]
}])
function App() {
 
  return (


    <div>
 
    <RouterProvider router={router}>
      
    </RouterProvider>
      
    
    </div>
  );
}

export default App;


