import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const userData = {
        username,
        password
    }

    const handleRegister = async () => {
        try{
        const response = await axios.post('http://localhost:4000/user', userData)
        console.log(response.data)
        navigate('/login')
        }catch(err){
            console.log(err)
        }
    }


 return (
    <section className="vh-100 m-5">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 text-black">
          <div className="px-5 ms-xl-4">
            <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color: '#709085'}}></i>
          </div>

          <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <form style={{width: '23rem'}}>
              <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Register</h3>

              <div className="form-outline mb-4">
               <input type="email" id="email-address" className="form-control form-control-lg" onChange={(e) => setUsername(e.target.value)} />
               <label className="form-label" htmlFor="email-address">Email address</label>
              </div>

              <div className="form-outline mb-4">
               <input type="password" id="password" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
               <label className="form-label" htmlFor="password">Password</label>
              </div>

              <div className="pt-1 mb-4">
               <button className="btn btn-info btn-lg btn-block" type="button" onClick={handleRegister}>Register</button>
              </div>

              <p>Already have an account? <Link to={'/login'} className="text-info" >Login</Link></p>
            </form>
          </div>
        </div>
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image" className="w-75 h-75" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </div>
      </div>
    </div>
  </section>
 );
};

export default Register;