import React, { Component } from 'react'
import { MAISON } from "./shared/Maisondhote";

export default class GuestHouse extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          maisons: MAISON,
        };
      }
    
    render() {
        const all = this.state.maisons.map((maison) => {
            return(
                <div
                className="col-md-12 color-gray spacedown animfadeInUp"
                data-time="1300"
              >
                <h3>{maison.name}</h3>
                <div className="devider-page-content"></div>
                <img
                  className="img-cont"
                  alt="discoverimage"
                  src={process.env.PUBLIC_URL+`/${maison.image}`}
                />
                <p>
                  {maison.description}
                </p>
                <div className="btn-content">
                  <a className="detail-page link-class" href="page-discover/exp.html">{maison.name}</a>
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
              All Guest house
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
