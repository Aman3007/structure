
import { useNavigate } from "react-router-dom";
export const Home=()=>{
    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");  
  };

return(<>
<div className="middle-part">
  <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <h2 class="title">Privacy Guaranteed</h2>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
            <h2 class="title">Welcome to the Whishper</h2>
            <p> This is the place Where you share your secret without any fear of being judged by the other's</p>
       

<button onClick={handleClick}> <span>Register</span>
</button>

        
        </div>
    </div>
</div>
     
       
</div>

</>)
}
