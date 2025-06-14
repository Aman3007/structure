
import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "" });
    const [errors, setErrors] = useState({});

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
      const res = await axios.post("http://localhost:5000/api/users/register", formData);
      alert(res.data.message);
      setFormData({ name: "", email: "" }); // Reset form
      setErrors({});
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong!"); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Name" 
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      <input 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
      />
         {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Register;
