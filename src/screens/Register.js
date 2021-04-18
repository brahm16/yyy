import React, { useState } from 'react';
import authSvg from '../assets/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {  isAuth } from '../helpers/auth';
import {  Link, NavLink, Redirect } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
    textChange: 'Sign Up'
  });

  const { name, email, password1, password2, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name && email && password1) {
      if (password1 === password2) {
        setFormData({ ...formData, textChange: 'Submitting' });
        axios
          .post(`${process.env.REACT_APP_API_URL}/register`, {
            name,
            email,
            password: password1
          })
          .then(res => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              password1: '',
              password2: '',
              textChange: 'Submitted'
            });

            toast.success(res.data.message);
          })
          .catch(err => {
            setFormData({
              ...formData,
              name: '',
              email: '',
              password1: '',
              password2: '',
              textChange: 'Sign Up'
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
      } else {
        toast.error("Passwords don't matches");
      }
    } else {
      toast.error('Please fill all fields');
    }
  };

  return (
    <>
    <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
    {isAuth() ? <Redirect to='/' /> : null}
            <div className="loginbox bg-white">
                <div className="loginbox-title">SIGN UP</div>
              
                <div className="loginbox-or">
                    <div className="or-line"></div>
                    <div className="or">OR</div>
                </div>
                <form
              className='w-full flex-1 mt-8 text-indigo-500'
              onSubmit={handleSubmit}
            >
                <div className="loginbox-textbox">
                    <input  type='text'
                  placeholder='Name'
                  onChange={handleChange('name')}
                  value={name}
                  
                  />
                </div>
                <div className="loginbox-textbox">
                <input
                  className='form-control'
                  type='text'
                  placeholder='Email'
                  onChange={handleChange('email')}
                  value={email}
                />
                </div>
                <div className="loginbox-textbox">
                <input
                  className='form-control'
                  type='password'
                  placeholder='Password'
                  onChange={handleChange('password1')}
                  value={password1}
                />

                </div>
                <div className="loginbox-textbox">
                <input
                  className='form-control'
                  type='password'
                  placeholder='Confirm Password'
                  onChange={handleChange('password2')}
                  value={password2}
                />

                </div>
               
                <div class="loginbox-submit">
                <button type="button" class="btn btn-primary btn-block">Registre</button> 
                </div>
                <div className="loginbox-signup">
                <Link
                    to="/r/login">Login</Link>
                </div>
                </form>
            </div>
         
        </div>
   
    </>
  );
};

export default Register;
