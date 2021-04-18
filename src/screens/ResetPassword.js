import React, { useState, useEffect } from 'react';
import authSvg from "../assets/auth.svg";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const ResetPassword = ({match}) => {
  const [formData, setFormData] = useState({
      password1: '',
      password2: '',
      token: '',
    textChange: 'Submit'
  });
    const { password1, password2, textChange, token } = formData;
    
    useEffect(() => {
        let token = match.params.token
        if(token) {
            setFormData({...formData, token,})
        }
        
    }, [])
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
    const handleSubmit = e => {
      console.log(password1, password2)
    e.preventDefault();
    if ((password1 === password2) && password1 && password2) {
      setFormData({ ...formData, textChange: 'Submitting' });
      axios
        .put(`${process.env.REACT_APP_API_URL}/resetpassword`, {
            newPassword: password1,
            resetPasswordLink: token
        })
        .then(res => {
          console.log(res.data.message)
            setFormData({
              ...formData,
               password1: '',
              password2: ''
            });
            toast.success(res.data.message);
          
        })
        .catch(err => {
          toast.error('Something is wrong try again');
        });
    } else {
      toast.error('Passwords don\'t matches');
    }
  };
  return (
    <>
    <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
      <ToastContainer />
            <div className="loginbox bg-white">
                <div className="loginbox-title">Reset</div>
              
                <div className="loginbox-or">
                    <div className="or-line"></div>
                    <div className="or">OR</div>
                </div>
                <form
                className='mx-auto max-w-xs relative '
                onSubmit={handleSubmit}
              >
                <input
                  className='form-control'
                  type='password'
                  placeholder='password'
                  onChange={handleChange('password1')}
                  value={password1}
                  />
                  <input
                  className='form-control'
                  type='password'
                  placeholder='Confirm password'
                  onChange={handleChange('password2')}
                  value={password2}
                />
                <button
                  type='submit'
                  className="btn btn-primary btn-block"
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  <span className='ml-3'>Submit</span>
                </button>
              </form>
            </div>
            
        </div>
   
    </>
  );
};

export default ResetPassword;
