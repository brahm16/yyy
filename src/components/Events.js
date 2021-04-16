import React, { Component } from 'react'
import { EVENTS } from "./shared/events";

export default class Events extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          events: EVENTS,
        };
      }
    
    render() {
        const all = this.state.events.map((event) => {
            return(
                <div
                className="col-md-12 color-gray spacedown animfadeInUp"
                data-time="1300"
              >
                <h3>{event.eventName}</h3>
                <div className="devider-page-content"></div>
                <img
                  className="img-cont"
                  alt="discoverimage"
                  src={process.env.PUBLIC_URL+`/${event.image}`}
                />
                <p>
                  {event.description}
                </p>
                <div className="btn-content">
                  <a className="detail-page link-class" href="page-discover/exp.html">{event.eventName}</a>
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
              All Events
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
