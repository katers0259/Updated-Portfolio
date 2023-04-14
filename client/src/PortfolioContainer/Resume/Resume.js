import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    {skill:"Javascript", ratingPercentage:65},
    {skill: "React Js", ratingPercentage:65},
    {skill: "Shopify Liquid", ratingPercentage:85},
    {skill: "Express JS", ratingPercentage:65},
    {skill: "Node JS", ratingPercentage:75},
    {skill: "Mongo DB", ratingPercentage:55},
    {skill: "HTML", ratingPercentage:100},
    {skill: "CSS", ratingPercentage:95}, 
    {skill: "Figma", ratingPercentage:95}, 
  ];

  const projectsDetails = [
 {
    title:"HydroJug Projects", 
    duration:{fromDate: "2021", toDate:"2021"},
    description:"Completed 8 Larger Scale Projects with HydroJug, in my first year with them. These Projects include, a Product Page, Collection Page, Home page, Landing Pages, Wholesale Portal,  ETC.",
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
    <div className="resume-screen-container" key="education">
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

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
      <ResumeHeading
            heading={"HydroJug"}
            subheading={"Web Developer"}
            fromDate={" April 2021"}
            toDate={"June 2022"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Worked as a web developer at HydroJug a Start Up Company, Working on a team of 2 and has grown to team of 3 Developers.
                </span>
            </div>
            <div className='experience-description'>
                <span className='resume-description-text'>
                Responsible for all aspects of HydroJug US Site, as well as other assigned tasks for our
                HydroJug UK site as well as some of our other brands. Launching New Products, creating new
                and modern design for all websites brand wide. Helping with UX/UI Design.
                </span>
                <span className='resume-description-text'>
                Key Accomplishments:
                ● Learning an entirely new language (Shopify Liquid) for this position.
                ● Completed 8 Large Projects in less than 9 Months with the Company.
                ● Helping Deploy and Run our UK Site.
                </span>
                <br/>
                </div>
    
  
    <ResumeHeading
          heading={"Cecelia New York"}
          subheading={"Web Developer / Shopify Store Manager"}
          fromDate={" June 2022"}
          toDate={"Present"}
          />
          <div className='experience-description'>
              <span className='resume-description-text'>
                  Currently working as a solo developer and site manager to maintain the company site and shopify backend.
              </span>
          </div>
          <div className='experience-description'>
              <span className='resume-description-text'>
              Responsible for site maintence, speed, and updates including but not limited to Products (sku's, barcodes, images, descriptions, weights, metafieldss, varients, prices, sales, discounts )., Creating new custom sections, pages & features. Theme Updates. Product collection updates.
              Thirdparty App Intergrations
              Script/Pixels Intergrations
              Facebook/Meta Ads and Google Ads Manager
              Customer Service & Returns, Refuns, Exchanges
              Collaboration With Team Members

              </span>
              <br/>
              </div>
    </div>
  </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
             <ResumeHeading 
                heading='Home Renovations'
                description=" I love haveing a vision, and then making that vision become a reality. I have learned how to do so many new things from doing home rennovations ourselves."
                />
                <ResumeHeading 
                heading='Travel'
                description=" I love going to new coutries and cities and getting to know more cultures."
                />
                <ResumeHeading 
                heading='Animals'
                description=" I have a dream one day to run an animal sanctuary."
                />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;