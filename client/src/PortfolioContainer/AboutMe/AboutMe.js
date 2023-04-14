import React, {useEffect} from 'react'
import './AboutMe.css'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'


export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)


        const SCREEN_CONSTANTS = {
            description:"My Name is Kaitlyn Branagan. I have a love for web development. I am excellent at creating and maintaining great client & Stake Holder relationships. I have 10 plus years of customer service, which is an excellent rescource for the customers journey. Proven management and organization skills. Proven ability to be able to manage a team of employees, while meeting KPI's. I am determined and a fast learner you won't be disapointed.",
            highlights: {
                    bullets:[
                        "Full Stack Web Development",
                        "Determined Fast Learner",
                        "Front End Design",
                        "Team Player",
                        "Management Experience",
                        "E-Commerce Shopify Experience",

                    ],
                    heading:" A Few Highlights:"
            }
        }

        const renderHighlights = () => {
            return(
                SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
                    <div className='highlight' key={i}>
                        <div className='highlight-blob'></div>
                            <span>{value}</span>
                        
                    </div>
                ))
            )
        }

  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading 
            title={'About Me'}
            subheading={'Why Choose Me?'}
            />
            <div className='about-me-card'>
                <div className='about-me-profile'></div>   
                  <div className='about-me-details'>
                      <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                      <div className='about-me-highlights'>
                          <div className='highlights-heading'>
                              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                          </div>
                          {renderHighlights()}
                      </div>
                      <div className='about-me-options'>
                      <button className='btn primary-btn'
                      onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        Work Together 
                      </button>
                        <a href='KaitlynBranagan.pdf' download='Kaitlyn KaitlynBranagan.pdf'>
                        <button className='btn highlighted-btn'>My Resume</button>
                        </a>
                     </div>
                </div>    
            </div>
        </div>
    </div>
  )
}
