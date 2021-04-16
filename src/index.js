import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch , Route,Redirect} from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Header from './components/Header';
import Bottom from './components/Bottom';
import Services from './components/Services';
import Places from './components/Places';
import Games from './components/Games';
import Products from './components/Products';
import GuestHouse from './components/GuestHouse';
import Events from './components/Events';
import "./i18nextConf"



const Main = ({match}) => {
  return(
  <>
  <div className="preloader">
  <div className="mainpreloader"><span></span></div>	
 </div>
  <div id="wraperexpedition" >
  <div className="bgexpedition" style={{backgroundImage:"url('/img/bg-5.jpg')"}}></div> 
  <div className="overlay-main"></div>

  <div id="logo" className="brand-expedition noselect animfadeInLeft" data-time="0">
    <h4> <a href="/">Zaghouane</a></h4>
 
  </div>
  <Header />
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







  </Switch>
  </div>
  <Bottom />
  </div>
  </>
  );
}


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route    path='/' exact render={props => <App {...props} />} />
    <Route path='/services' exact render={props => <Services {...props} />} />

    <Route path="/m" component={Main} />



    

  
     
    <Redirect to='/' />
  </Switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
