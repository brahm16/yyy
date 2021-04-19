import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch , Route,Redirect} from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import HeaderA from './components/HeaderA';

import Bottom from './components/Bottom';
import Services from './components/Services';
import Places from './components/Places';
import Games from './components/Games';
import Products from './components/Products';
import GuestHouse from './components/GuestHouse';
import Events from './components/Events';
import Register from './screens/Register';
import Login from './screens/Login';
import ForgetPassword from './screens/ForgetPassword';
import 'react-toastify/dist/ReactToastify.css';



import "./i18nextConf"
import ResetPassword from './screens/ResetPassword';
import MyLogin from './components/MyLogin';
import UserProfile from './screens/UserProfile';
import Private from './screens/Private';
import MyHeader from './components/MyHeader';



const Main = ({match}) => {
  return(
  <>

  <div id="wraperexpedition" >
  <div className="bgexpedition" style={{backgroundImage:"url('/img/bg-5.jpg')"}}></div> 
  <div className="overlay-main"></div>

  
  <MyHeader />
  <div className="nav-top-block"></div>
  <div className="main-content">

  <Switch>

  <Route path={`${match.path}/about`}  component={About} />
  <Route path={`${match.path}/contact`} exact={true} component={Contact} />
  <Route path={`${match.path}/services`} exact={true} component={Services} />
  <Route path={`${match.path}/places`} exact={true} component={Places} />
  <Route path={`${match.path}/products`} exact={true} component={Products} />
  <Route path={`${match.path}/games`} exact={true} component={Games} />
  <Route path={`${match.path}/maison`} exact={true} component={GuestHouse} />
  <Route path={`${match.path}/events`} exact={true} component={Events} />
  <Route path={`${match.path}/login`} exact={true} component={MyLogin} />








  </Switch>
  </div>
  <Bottom />
  </div>
  </>
  );
}

const MainAuth=({match})=>{
return(
  <>

  <div id="wraperexpedition" >
  <div className="bgexpedition" style={{backgroundImage:"url('/img/bg-5.jpg')"}}></div> 
  <div className="overlay-main"></div>

  
  <div className="nav-top-block"></div>
  <div className="main-content">

  <Switch>
  <Route path={`${match.path}/login`}   render={(props) => <Login {...props} />} />
  <Route
  path={`${match.path}/register`}
 
  render={(props) => <Register {...props} />}
/>
<Route
path={`${match.path}/users/password/forget`}
  
  render={(props) => <ForgetPassword {...props} />}
/>

<Route
path={`${match.path}/users/password/reset/:token`}

  
  render={(props) => <ResetPassword {...props} />} />


    </Switch>
    </div>
    </div>
    </>

)
}
const SpaceUser= ({match}) => {
  return(
    <>
  
    <div id="wraperexpedition" >
    <div className="bgexpedition" style={{backgroundImage:"url('/img/bg-4.jpg')"}}></div> 
    <div className="overlay-main"></div>
  
    <MyHeader />
    <div className="nav-top-block"></div>
    <div className="main-content">
  
    <Switch>
    <Route path={`${match.path}/profile`}   render={(props) => <UserProfile {...props} />} />

      </Switch>
      </div>
      </div>
      </>
);
}


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route    path='/' exact render={props => <App {...props} />} />
    <Route path='/services' exact render={props => <Services {...props} />} />
    <Route path="/login"  render={(props) => <Login {...props} />} />
    <Route path="/m" component={Main} />
    <Route path="/r" component={MainAuth} />
    <Route path="/s" component={SpaceUser} />




<Route
  path="/register"
 
  render={(props) => <Register {...props} />}
/>
<Route
  path="/users/password/forget"
  
  render={(props) => <ForgetPassword {...props} />}
/>

<Route
  path="/users/password/reset/:token"
  
  render={(props) => <ResetPassword {...props} />} />




    

  
     
    <Redirect to='/' />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
