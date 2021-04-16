import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <>
         

    <div id="wraperexpedition">
      

     

      <div className="main-content">
        <div className="row">

          <div className="col-md-12 spacedown">
            <h1 className="animbounceInLeft" data-time="600">
              All services
            </h1>
            
            <div className="devider-page animfadeInLeft" data-time="1100"></div>
          </div>

          <div
            className="col-md-12 color-gray spacedown animfadeInUp"
            data-time="1300"
          >
            <h3>Games</h3>
            <div className="devider-page-content"></div>
            <img
              className="img-cont"
              alt="discoverimage"
              src="/img/discover/explorer.jpg"
            />
            <p>
              All jeux in zaghouan
            </p>
            <div className="btn-content">
              <a className="dlink-class" href={process.env.PUBLIC_URL+ `/m/games` }>Games</a>
            </div>
          </div>
          <div
            className="col-md-12 color-gray spacedown animfadeInUp"
            data-time="1300"
          >
            <h3>Events</h3>
            <div className="devider-page-content"></div>
            <img
              className="img-cont"
              alt="discoverimage"
              src="/img/discover/explorer.jpg"
            />
            <p>
              All events in zaghouan
            </p>
            <div className="btn-content">
              <a className="link-class" href="/m/events">Events</a>
            </div>
          </div>
          <div
            className="col-md-12 color-gray spacedown animfadeInUp"
            data-time="1300"
          >
            <h3>Maison d'hotes</h3>
            <div className="devider-page-content"></div>
            <img
              className="img-cont"
              alt="discoverimage"
              src="/img/discover/explorer.jpg"
            />
            <p>
              All maison d'hotes  in zaghouan
            </p>
            <div className="btn-content">
              <a className="link-class" href="/m/maison">Maison d'hotes</a>
            </div>
          </div>
          <div
            className="col-md-12 color-gray spacedown animfadeInUp"
            data-time="1300"
          >
            <h3>Products</h3>
            <div className="devider-page-content"></div>
            <img
              className="img-cont"
              alt="discoverimage"
              src="/img/discover/explorer.jpg"
            />
            <p>
              All products  in zaghouan
            </p>
            <div className="btn-content">
              <a className="link-class" href="/m/products">Products</a>
            </div>
          </div>

       

        </div>
      </div>

     

      

      </div>



            </>
        )
    }
}
