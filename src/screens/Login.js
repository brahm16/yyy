import React, { useState } from "react";
import authSvg from "../assets/auth.svg";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { authenticate, isAuth, setCookie } from "../helpers/auth";
import { Link,  Redirect } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: "",
    password1: "",
    textChange: "Sign In",
  });
  const { email, password1 } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const sendGoogleToken = (tokenId) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/googlelogin`, {
        idToken: tokenId,
      })
      .then((res) => {
        console.log(res.data);
        setCookie("user",res.data.user);
        setCookie("username",res.data.user.name);
        informParent(res);
      })
      .catch((error) => {
        console.log("GOOGLE SIGNIN ERROR", error.response);
      });
  };
  const informParent = (response) => {
    authenticate(response, () => {
      
      if (isAuth() && isAuth().role === "admin") {   history.push("/admin")
    }
      else if (isAuth() && isAuth().role === "owner")         history.push("/owner")

      else if (isAuth() && isAuth().role === "subscriber")
      history.push("/subscriber")

      else  history.push("/login")
    });
  };

  const sendFacebookToken = (userID, accessToken) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/facebooklogin`, {
        userID,
        accessToken,
      })
      .then((res) => {
        console.log(res.data);
        setCookie("user",res.data.user);
        setCookie("username",res.data.user.name);
        informParent(res);
      })
      .catch((error) => {
        console.log("GOOGLE SIGNIN ERROR", error.response);
      });
  };
  const responseGoogle = (response) => {
    console.log(response);
    sendGoogleToken(response.tokenId);
  };

  const responseFacebook = (response) => {
    console.log(response);
    sendFacebookToken(response.userID, response.accessToken);
  };

  const handleY = (e) => {
    console.log(process.env.REACT_APP_API_URL);
    e.preventDefault();
    if (email && password1) {
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          email,
          password: password1,
        })
        .then((res) => {
          authenticate(res, () => {
            setCookie("user",res.data.user);
            setCookie("username",res.data.user.name);
            setFormData({
              ...formData,
              email: "",
              password1: "",
              textChange: "Submitted",
            });
            if (isAuth() && isAuth().role === "admin")   history.push("/admin/dashboard")

            else if (isAuth() && isAuth().role === "owner")
            history.push("/owner")
            else if (isAuth() && isAuth().role === "subscriber")
            history.push("/subscriber")
            else  history.push("/login")
            toast.success(`Hey ${res.data.user.name}, Welcome back!`);
          });
        })
        .catch((err) => {
          setFormData({
            ...formData,
            email: "",
            password1: "",
            textChange: "Sign In",
          });
          console.log(err.response);
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Please fill all fields");
    }
  };
//window.location.replace("https://hawasss.herokuapp.com")

  return (
    <>

    {isAuth()  ? window.location.replace("http://localhost:3000")  : null}
     
      <div class="login-container animated fadeInDown bootstrap snippets bootdeys">
      <ToastContainer />


        <div class="loginbox bg-white">

            <div class="loginbox-title">SIGN IN</div>
            <div class="loginbox-social">
                <div class="social-title ">Connect with Your Social Accounts</div>
                <div class="social-buttons">
                <GoogleLogin
                  clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="button-google"
                    >
                    <i class="social-icon fa fa-google-plus"></i>

                    </button>
                  )}
                ></GoogleLogin>
                 <FacebookLogin
                  appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
                  autoLoad={false}
                  callback={responseFacebook}
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      className="button-facebook"
                    >
                  <i className="social-icon fa fa-facebook"></i>

                    </button>
                  )}
                />
                <a href="" className="button-twitter">
                            <i className="social-icon fa fa-twitter"></i>
                        </a>
                  
                </div>
            </div>
            <div class="loginbox-or">
                <div class="or-line"></div>
                <div class="or">OR</div>
            </div>
            <form
               
                onClick={handleY}
              >
            <div class="loginbox-textbox">
                <input type="text"
                  placeholder="Email"
                  onChange={handleChange("email")}
                  className="form-control"
                  value={email} />
            </div>
            <div class="loginbox-textbox">
                <input   type="password"
                  placeholder="Password"
                  onChange={handleChange("password1")}
                  className="form-control"
                  value={password1} />
            </div>
            <div class="loginbox-forgot">
                <Link to="/r/users/password/forget">Forgot Password?</Link>
            </div>
            <div class="loginbox-submit">
                <button type="submit" class="btn btn-primary btn-block">Login</button> 
            </div>
            <div class="loginbox-signup">
            <Link
                    to="/r/register">Register</Link>
            </div>
            </form>
        </div>
        
    </div>


     
      
    </>
  );
};

export default Login;
