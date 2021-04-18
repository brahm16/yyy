import React, { useState } from 'react';
import authSvg from '../assets/forget.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const ForgetPassword = ({history}) => {
  const [formData, setFormData] = useState({
    email: '',
    textChange: 'Submit'
  });
  const { email } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      setFormData({ ...formData, textChange: 'Submitting' });
      axios
        .put(`${process.env.REACT_APP_API_URL}/forgotpassword`, {
          email
        })
        .then(res => {
          
            setFormData({
              ...formData,
              email: '',
            });
            toast.success(`Please check your email`);
          
        })
        .catch(err => {
        console.log(err.response)
          toast.error(err.response.data.error);
        });
    } else {
      toast.error('Please fill all fields');
    }
  };
  return (
    <>
    <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
            <div className="loginbox bg-white">
                <div className="loginbox-title">Reset password</div>
              
                
                <form
                onSubmit={handleSubmit}
              >
                                <div className="loginbox-textbox">
                                <input
                  className='form-control'
                  type='email'
                  placeholder='Email'
                  onChange={handleChange('email')}
                  value={email}
                />

                                </div>
                                <div className="loginbox-submit">
                                <button type="button" class="btn btn-primary btn-block">Submit</button> 


                                </div>


            
              </form>
                
            </div>
           
        </div>
  
    </>
  );
};

export default ForgetPassword;
