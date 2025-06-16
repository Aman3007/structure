
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [formData, setFormData] = useState({ name: "", email: "" });
    const [errors, setErrors] = useState({});

   const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");  
  };
       const handleChange=(event)=>{


const{name,value}=event.target;
         setFormData((prevvalue)=>{
            return{
                ...prevvalue,  
                [name]:value,
            } 
        })
         }

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }else if(formData.name.trim().length<4 ) {
          newErrors.name = "Name is invalid";
    }


    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      if (!validate()) return;

    try {
      const res=await axios.post("http://localhost:5000/api/users/login", formData)
     const { message, user, token } = res.data;
      
  if (user && token) {
  console.log("Logged in user:", user);
  console.log("Token:", token);
     setFormData({ name: "", email: "" }); // Reset form
      setErrors({});
  navigate("/mypage", { state: { user, token } });
} else {
    setFormData({ name: "", email: "" }); // Reset form
      setErrors({});
  alert(message || "Login failed");
}
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong!"); 
    }
  };

  return (
    <>
       <div className="login-form">
      <form class="form" onSubmit={handleSubmit}>
     <span class="input-span">
    <label for="username"  class="label">UserName</label>
    <input type="text"  name="name"  value={formData.name}  onChange={handleChange}   id="name"
  />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
  </span>
  <span class="input-span">
    <label for="email" class="label">Email</label>
    <input type="email"  value={formData.email}  onChange={handleChange}  name="email" id="email"
  />  {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}</span>
 
  
  <input class="submit" type="submit" value="Log in" />
  <span class="span">Don't have an account? <a href="" onClick={handleClick}>Sign up</a></span>
</form>
  </div>




   {/* <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Name" 
      />

      <input 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
      />
       
      <button type="submit">Submit</button>
    </form> */}
    </>
   
  );
}

export default Login;

