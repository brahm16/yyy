import React, { Component,useState,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { updateUser, isAuth, getCookie, signout, setCookie } from '../helpers/auth';
function UserProfile({history}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio:'',
        firstname:'',
        lastname:'',
        address:'',
        city:'',
        country:'',
        zipcode:'',
        pic:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        password1: '',
        textChange: 'Update',
        role: ''
      });
      useEffect(() => {
        loadProfile();
      }, []);
    
      const loadProfile = () => {
        const token = getCookie('token');
        axios
          .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(res => {
            const { role, name, email,bio,firstname,lastname,address,city,country,zipcode } = res.data;
            
           
            setFormData({ ...formData, role, name, email,bio,firstname,lastname,address,city,country,zipcode });
            console.log("bio"+formData.bio);
          })
          .catch(err => {
            toast.error(`Error To Your Information ${err.response.statusText}`);
            if (err.response.status === 401) {
              signout(() => {
                history.push('/login');
              });
            }
          });
      };
      const { name, email,bio ,firstname,lastname,address,city,country,zipcode,pic,password1, textChange, role } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
      const handleSubmit = e => {
        const token = getCookie('token');
        console.log(token);
        e.preventDefault();
        setFormData({ ...formData, textChange: 'Submitting' });
        let r="";
        role==="subscriber"? r="user":r=role
        axios
          .put(
            `${process.env.REACT_APP_API_URL}/${r}/update`,
            {
              name,
              email,
              bio,
              firstname,
              lastname,
              address,
              city,
              country,
              zipcode,
              password: password1
            },
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
          .then(res => {
            updateUser(res, () => {
              toast.success('Profile Updated Successfully');
              setFormData({ ...formData, textChange: 'Update' }); 
            });
          })
          .catch(err => {
            console.log(err.response);
          });
      };

        return (
            <>
            <div style={{paddingTop:"5rem;"}}>
            <div class="container" >
            <div class="row flex-lg-nowrap">
              
            
              <div class="col">
                <div class="row">
                  <div class="col mb-3">
                    <div class="card " >
                      <div class="card-body">
                        <div class="e-profile">
                          <div class="row">
                            <div class="col-12 col-sm-auto mb-3">
                              <div class="mx-auto" style={{width: "140px;"}}>
                                <div class="d-flex justify-content-center align-items-center rounded" style={{height: "140px;", backgroundColor: "rgb(233, 236, 239);"}} >
                                  <span style={{color: "rgb(166, 168, 170);" }}>140x140</span>
                                </div>
                            
                              </div>
                            </div>
                            <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                              <div class="text-center text-sm-left mb-2 mb-sm-0">
                                <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                                <p class="mb-0">@johnny.s</p>
                                <div class="text-muted"><small>Last seen 2 hours ago</small></div>
                                <div class="mt-2">
                                  <button class="btn btn-primary" type="button">
                                    <i class="fa fa-fw fa-camera"></i>
                                    <span>Change Photo</span>
                                  </button>
                                </div>
                              </div>
                           
                            </div>
                          </div>
                        
                          <div class="tab-content pt-3">
                            <div class="tab-pane active">
                              <form class="form" onSubmit={handleSubmit}>
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Full Name</label>
                                          <input class="form-control" type="text" placeholder='Name'
                          onChange={handleChange('name')}
                          value={name} />
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Username</label>
                                          <input class="form-control" type="text" placeholder='Name'
                          onChange={handleChange('name')}
                          value={name} />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>firstname</label>
                                          <input class="form-control" type="text" placeholder='Fistname'
                          onChange={handleChange('firstname')}
                          value={firstname} />
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Lastname</label>
                                          <input class="form-control" type="text" placeholder='Lastname'
                          onChange={handleChange('lastname')}
                          value={lastname} />
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Country</label>
                                          <input class="form-control" type="text" placeholder='Country'
                          onChange={handleChange('country')}
                          value={country} />
                                        </div>
                                      </div>
                                      <div class="col">
                                        <div class="form-group">
                                          <label>City</label>
                                          <input class="form-control" type="text" placeholder='city'
                          onChange={handleChange('city')}
                          value={city} />
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Email</label>
                                          <input class="form-control" type="text"placeholder='Name'
                          onChange={handleChange('email')}
                          value={email}/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col">
                                        <div class="form-group">
                                          <label>Address</label>
                                          <input class="form-control" type="text"placeholder='Address'
                          onChange={handleChange('address')}
                          value={address}/>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col mb-3">
                                        <div class="form-group">
                                          <label>About</label>
                                          <textarea class="form-control" rows="5"  onChange={handleChange('bio')}
                          value={bio}></textarea>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                               
                                <div class="row">
                                  <div class="col d-flex justify-content-end">
                                    <button class="btn btn-primary" type="submit">Save Changes</button>
                                  </div>
                                </div>
                              </form>
            
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            
                  <div class="col-12 col-md-3 mb-3">
                    <div class="card mb-3">
                      <div class="card-body">
                        <div class="px-xl-3">
                          <button class="btn btn-block btn-secondary">
                            <i class="fa fa-sign-out"></i>
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    </div>
                
                  </div>
                </div>
            
              </div>
            </div>
            </div>
            </div>
            </>

        )
    
}

export default UserProfile;
