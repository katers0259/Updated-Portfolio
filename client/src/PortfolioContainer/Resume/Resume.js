import React , {useState}from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'


export default function Resume(props) {

    const [selectedBulletIndex, setselectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

    const ResumeHeading =(props) => {
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <dov className='heading-date'>
                            {props.fromDate + "_" + props.toDate}
                        </dov>
                    ) : ( 
                    <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subheading ? props.subheading : ""}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description  ? props.description : ""}</span>
                </div>
            </div>
        </div>
    }

    const resumeBullets = [
        {label: "Education", logoSrc: "education.svg"},
        {label: "Work History", logoSrc:"work-history.svg"},
        {label: " Programming Skills", logoSrc:"programming-skills.svg"},
        {label: "Projects", logoSrc:"projects.svg"},
        {label: "Inerests", logoSrc:"interests.svg"},
    ];

const programminigSkillDetails = [
    {skill:"Javascript", ratingPercentage:65},
    {skill: "React Js", ratingPercentage:65},
    {skill: "Shopify Liquid", ratingPercentage:85},
    {skill: "Express JS", ratingPercentage:65},
    {skill: "Node JS", ratingPercentage:75},
    {skill: "Mongo DB", ratingPercentage:55},
    {skill: "HTML", ratingPercentage:100},
    {skill: "CSS", ratingPercentage:95}, 
];

const projectDetails = [
    {
        title:"HydroJug Projects", 
        duration:{fromDate: "2021", toDate:"2021"},
        description:"Completed 8 Larger Scale Projects with HydroJug, in my first year with them.",
        subheading:"Technologies Used: Shopify Liquid, React, HTML, CSS, Javasript"
    },
    {
        title:"Pixi.Pics", 
        duration:{fromDate: "2020", toDate:"2020"},
        description:"A Website were you can purchase digital copies of photos.",
        subheading:"Technologies Used: TailwindCSS, React, HTML, CSS, Javasript, AWS, MongoDB"
    },

];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
            heading={"University Of Utah, Utah"}
            subheading={"Certificate of Coding Bootcamp Completion"}
            fromDate={"2020"}
            toDate={"2021"}
            />
             <ResumeHeading
            heading={"High School"}
            subheading={"WestLake High School"}
            fromDate={"2007"}
            toDate={"2010"}
            />
        </div>,
        <div className='resume-screen-container' key="work-experience">
          <ResumeHeading
            heading={"HydroJug"}
            subheading={"Web Developer"}
            fromDate={"2021"}
            toDate={"Present"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Currently working as a web developer at HydroJug a Start Up Company, Working on a team of 2 and has grown to team of 3 Developers.
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                Responsible for all aspects of HydroJug US Site, as well as other assigned tasks for our
HydroJug UK site as well as some of our other brands. Launching New Products, creating new
and modern design for all websites brand wide. Helping with UX/UI Design.
Key Accomplishments:
● Learning an entirely new language (Shopify Liquid) for this position.
● Completed 8 Large Projects in less than 9 Months with the Company.
● Helping Deploy and Run our UK Site.
                </span>
                <br/>
                
            </div>
        </div>
    ]

    let fadeInScreenHandler = (screen) =>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  return (
    <div className='resume-container screen-container' id={props.id || ""}>
        <div className='resume-contents'>
            <ScreenHeading 
            title={'Resume'}
            subheading={'Bio Details'}
            />
            </div> 
    </div>
  )
}
