import React, { Component } from 'react'
import { JEUX } from "./shared/Jeux";

export default class Games extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          jeux: JEUX,
        };
      }
    
    render() {
        const all = this.state.jeux.map((jeu) => {
            return(
                <div
                className="col-md-12 color-gray spacedown animfadeInUp"
                data-time="1300"
              >
                <h3>{jeu.jeuxName}</h3>
                <div className="devider-page-content"></div>
                <img
                  className="img-cont"
                  alt="discoverimage"
                  src={process.env.PUBLIC_URL+`/${jeu.image}`}
                />
                <p>
                  {jeu.description}
                </p>
                <div className="btn-content">
                  <a className="detail-page link-class" href="page-discover/exp.html">{jeu.jeuxName}</a>
                </div>
              </div>

            )
        })

        return (
            <>
         

    <div id="wraperexpedition">
      

     

      <div className="main-content">
        <div className="row">

          <div className="col-md-12 spacedown">
            <h1 className="animbounceInLeft" data-time="600">
              All Games
            </h1>
            
            <div className="devider-page animfadeInLeft" data-time="1100"></div>
          </div>

        {all}
        
       

       

        </div>
      </div>

     

      

      </div>



            </>
        )
    }
}
