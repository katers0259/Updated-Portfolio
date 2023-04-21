import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href='https://www.facebook.com/katers0259'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/kaitlyn-branagan-a119891b1/'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a href='https://codepen.io/katers0259'>
                        <i className='fa fa-codepen'></i>
                    </a>
                    <a href='https://www.instagram.com/ohbranagans/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://github.com/katers0259'>
                        <i className='fa fa-github'></i>
                    </a>
                    </div>
                </div>
            
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello I'm <span className='highlighted-text'>Kaitlyn</span>
                </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                        {" "}
                        <Typical 
                        loop={Infinity}
                        steps={[
                            "React/React Native",
                            3000,
                            "Motivated",
                            3000,
                            "Full Stack Dev",
                            3000,
                        ]}
                        />
                        </h1>
                        <span className='profile-role-tagline'>
                            Passion for Full Stack Development.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                        Work Together 
                    </button>
                    <a href='KaitlynBranagan1.pdf' download='Kaitlyn KaitlynBranagan1.pdf'>
                        <button className='btn highlighted-btn'>My Resume</button>
                    </a>
                </div>
            </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>

        </div>

    </div>
  )
}
