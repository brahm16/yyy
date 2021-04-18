import React from "react";

import {  REACT_APP_CLIENT_INTRO_PROD,  REACT_APP_CLIENT_MAP_PROD } from "../constants";
import Header from "./Header";




/*
const [isToggled, setIsToggled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = React.useCallback(() => setIsToggled(!isToggled));

*/
const handleMap=() =>{
  console.log("aaaaaaaaaaaaa");
  window.location.replace(REACT_APP_CLIENT_MAP_PROD);
}
const handleIntro=()=> {
  console.log("aaaaaaaaaaaaa");
  window.location.replace(REACT_APP_CLIENT_INTRO_PROD);
}

const Landing=({history})=> {
 

  
 
    const style1 = {
      backgroundImage: "url('img/zagh/0.jpg')",
    };
    const style2 = {
      backgroundImage: "url('img/zagh/10.jpg')",
    };
    const style3 = {
      backgroundImage: "url('img/zagh/festival.jpg')",
    };
    return (
      <>
        <div className="preloader">
          <div className="mainpreloader">
            <span></span>
          </div>
        </div>

        <div id="wraperexpedition">
          <div className="bgexpedition">
            <div id="owl-slider-home" className="owl-carousel">
              <div className="item imgbg" style={style1}></div>
              <div className="item imgbg" style={style2}></div>
              <div className="item imgbg" style={style3}></div>
            </div>
          </div>
        </div>
        <div className="overlay-home noselect"></div>

        <div
          id="logo"
          className="brand-expedition noselect animfadeInLeft"
          data-time="0"
        >
          <a href="index.html">
            <h3>Hawas Bia</h3>
          </a>
        </div>

        <Header />

        <div className="contentexpedition">
          <div className="row">
            <div className="col-md-12">
              <h1 className="animfadeInUpBig" data-time="100">
                Zaghouane
              </h1>
              <div
                className="devider-center animfadeInUpBig"
                data-time="100"
              ></div>
              <div id="slidertext" className="animfadeInUpBig" data-time="400">
                <div className="main-text">wild experience</div>
                <div className="main-text">awesome life</div>
                <div className="main-text">challenge your life</div>
              </div>

              <div  className="animfadeInUpBig" data-time="500">
                <div>
                <i style={{ marginRight:"1rem"}} className="fa fa-map-marker fa-3" aria-hidden="true"></i>
                <span id="curentLoc" ></span>

                </div>
                    

                   
          
              </div>

              <div className="btn-home animfadeInLeft" data-time="400">
                <a className="link-className" href="https://serverhawas.herokuapp.com/map">
                  Take tour
                </a>
              </div>
              <div className="btn-home animfadeInRight" data-time="400">
                <a className="link-className" href="https://serverhawas.herokuapp.com/intro">
                  Discover
                </a>
              </div>
            </div>

         
          </div>
        </div>

        <div className="nav-bottom">
          <div id="opengal">
            <i className="fa fa-angle-up"></i>
            <span>All Circuit</span>
          </div>
        </div>

        <div className="bottom-option">
          <div className="nav-bottom-close">
            <span>close</span>
            <i className="fa fa-angle-down"></i>
          </div>
          <div id="owl-gal" className="owl-carousel">
                
                <div className="item">
                 <div className="port big-img">
                 <div className="hovereffect">
                 <a href="/img/archeologie.jpg">
                 <img className="gray-color" src="/img/archeologie.jpg" alt="imageportofolio" />
                 <div className="overlay">
                 <h2>Archeologie Circuit</h2>
                 <span className="info">click here</span>
                 </div>
                 </a>
                 </div>
                 </div>
                 </div>
                 
                 <div className="item">
                 <div className="port big-img">
                 <div className="hovereffect">
                 <a href="/img/romain.jpg">
                 <img className="gray-color" src="/img/romain.jpg" alt="imageportofolio" />
                 <div className="overlay">
                 <h2>Romain Circuit</h2>
                 <span className="info">click here</span>
                 </div>
                 </a>
                 </div>
                 </div>
                 </div>
                 
                 <div className="item">
                 <div className="port big-img">
                 <div className="hovereffect">
                 <a href="/img/andalous.jpg">
                 <img className="gray-color" src="/img/andalous.jpg" alt="imageportofolio" />
                 <div className="overlay">
                 <h2>Andalous Circuit</h2>
                 <span className="info">click here</span>
                 </div>
                 </a>
                 </div>
                 </div>
                 </div>
                 
                 <div className="item">
                 <div className="port big-img">
                 <div className="hovereffect">
                 <a href="/img/soufi.jpg">
                 <img className="gray-color" src="/img/soufi.jpg" alt="imageportofolio" />
                 <div className="overlay">
                 <h2>Circuit Soufi</h2>
                 <span className="info">click here</span>
                 </div>
                 </a>
                 </div>
                 </div>
                 </div>
                 
                 <div className="item">
                 <div className="port big-img">
                 <div className="hovereffect">
                 <a href="/img/portofolio/5.jpg">
                 <img className="gray-color" src="/img/portofolio/5.jpg" alt="imageportofolio" />
                 <div className="overlay">
                 <h2>Personal circuit</h2>
                 <span className="info">click here</span>
                 </div>
                 </a>
                 </div>
                 </div>
                 </div>
                 
                 
                 
                
 
  </div>
 
        </div>
      </>
    );
  
}
export default Landing;