import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations';
import './Testimonial.css'



export default function Testimonial(props) {

    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const options = {
        loop:true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed:2000,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            1000:{
                items:4,
            },
        },
    };


  return (
    <div>
        <ScreenHeading 
        title={'Projects'}
        subheading={'Work I Have Done'}/>
         <section className='testimonial-section' id={props.id || ""}>
            <div className='container'>
                <div className='row'>
                    <OwlCarousel className='owl-carousel' id='testimonial-carousel'{...options} >


                            <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>
                                    Landing page with login portal and wholsale locator for wholesale customers, or customers looking for places to purchase instore
                                    </p>
                                  <div className='client-info'>
                                      <img src="img/wholesalephoto.png" alt="hydrojugwholesale"></img>
                                      <h5>HydroJug WholeSale Page</h5>
                                      <p className='tech-used' >Technologies Used: Shopify Liquid, CSS, Javascript, APIs, HTML</p>
                                      </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>
                                    Product Information page. Displays photos, price product information, upsells and reviews. aslo add to cart functionality and swatches if there are multiple color options                                    </p>
                                  <div className='client-info'>
                                      <img src="img/ProductPage.png" alt="hydrojugproductpage"></img>
                                      <h5>HydroJug Product Page</h5>
                                      <p className='tech-used'>Technologies Used: Shopify Liquid, CSS, Javascript, APIs, HTML</p>
                                      </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>
                                    This page display all the products in a collection also has a quick add button for a better customer experience.                                    </p>
                                  <div className='client-info'>
                                      <img src="img/Collectionpage.png" alt="hydrojugproductcollection"></img>
                                      <h5>HydroJug Product Collection</h5>
                                      <p className='tech-used'>Technologies Used: Shopify Liquid, CSS, Javascript, APIs, HTML</p>
                                      </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>
                                    The About Us page for hydrojug features currrent employees , history about the company as well as featured articles sme fun facts and our linkedin

                                        </p>
                                  <div className='client-info'>
                                      <img src="img/OurStory.png" alt="hydrojugaboutus"></img>
                                      <h5>HydroJug Our Story</h5>
                                      <p className='tech-used'>Technologies Used: Shopify Liquid, CSS, Javascript, APIs, HTML, Swiperjs</p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='col-lg-12'>
                            <div className='testi-item'>
                                <div className='testi-comment'>
                                    <p>
                                    This was a complete site overhaul to a new theme to best suit the company feel and vision.                                </p>
                                  <div className='client-info'>
                                      <img src="img/cecelianewyork.png" alt="cecelianewyork"></img>
                                      <h5>Cecelia New York</h5>
                                      <p className='tech-used'>Technologies Used: Shopify Liquid, CSS, Javascript, APIs, HTML</p>
                                      </div>
                                    </div>
                                </div>
                            </div>

                    </OwlCarousel>
                    </div>
                </div>
        </section>
        <div className="footer-image">
        <img src="img/shape-bg.png" alt="Phot0 not responding" />
      </div>
    </div>
  )
}
