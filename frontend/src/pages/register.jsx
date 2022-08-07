import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import {toast} from "react-toastify"; 
import {useSelector, useDispatch} from "react-redux"; 
import {register, reset} from "../features/auth/authSlice"; 
import {useNavigate} from "react-router-dom"; 

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const dispatch= useDispatch(); 
  const {isLoading, isSuccess, message, isError, user}= useSelector(state=> state.auth); 
  const navigate= useNavigate(); 

  useEffect(()=> {
    if(isError){
      toast.error(message); 
    }
    if(isSuccess || user){
      navigate("/"); 
    }

    dispatch(reset()); 
  }, [isError, isSuccess, user, message, navigate, dispatch]); 

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit= (e)=> {
    e.preventDefault(); 
    if(password!== password2){
        toast.error("Password do not match"); 
    }else{
        const userData= {
            name, 
            email,
            password
        }
        dispatch(register(userData)); 
    }

  }


  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please Create an Account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              name= "name"
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder= "Name"
              required
            />
            <input
              className="form-control"
              name= "email"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder= "Email"
              required
            />
            <input
              className="form-control"
              name= "password"
              type="password"
              id="password"
              value={password}
              onChange={onChange}
              placeholder= "Password"
              required
            />
            <input
              className="form-control"
              name= "password2"
              type="password"
              id="password2"
              value={password2}
              onChange={onChange}
              placeholder= "Confirm Password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
