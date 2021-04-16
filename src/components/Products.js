import React, { Component } from 'react'
import { PRODUCTS } from "./shared/productsS";

export default class Products extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products: PRODUCTS,
        };
      }
    
    render() {
        const all = this.state.products.map((product) => {
            return(
                <div
                className="col-md-12 color-gray spacedown animfadeInUp"
                data-time="1300"
              >
                <h3>{product.name}</h3>
                <div className="devider-page-content"></div>
                <img
                  className="img-cont"
                  alt="discoverimage"
                  src={process.env.PUBLIC_URL+`/${product.img}`}
                />
                <p>
                  {product.description}
                </p>
                <div className="btn-content">
                  <a className="detail-page link-class" href="page-discover/exp.html">{product.name}</a>
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
              All products
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
