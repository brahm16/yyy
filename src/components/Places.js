import React, { Component } from 'react'
import { PLACES } from "./shared/places";

export default class Places extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          places: PLACES,
        };
      }
    
    render() {
        const all = this.state.places.map((place) => {
            return(
                <div
                className="col-md-12 color-gray spacedown animfadeInUp"
                data-time="1300"
              >
                <h3>{place.name}</h3>
                <div className="devider-page-content"></div>
                <img
                  className="img-cont"
                  alt="discoverimage"
                  src={place.image}
                />
                <p>
                  {place.description}
                </p>
                <div className="btn-content">
                  <a className="detail-page link-class" href="page-discover/exp.html">{place.name}</a>
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
              All places
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
