import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Home=()=>{
     const [data, setData] = useState([]);
 
  
useEffect(() => {
  axios
    .get("http://localhost:5000/api/data")
    .then((res) => {
      setData(res.data.message);
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
}, []);
     const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");  
  };


return(<>



    <h1>this is home</h1>
    <h1>React + Express</h1>
      <p>{data[0]}</p>
       <button onClick={handleClick}>Go to About</button>
</>)
}