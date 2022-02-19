import React from 'react'

export default function ScreenHeading(props) {
  return (
    <div className='heading-container'>
        <div className='screen-heading'>
            <span>{props.title}</span>
        </div>

        {
            (props.subheading)?(
                <div className='screen-sub-heading'>
                    <span>{props.subheading}</span>
                </div>
            ): <div></div>
        }
        <div className='heading-seperator'>
            <div className='seperator-line'>
                
            </div>
        </div>
    </div>
  )
}
