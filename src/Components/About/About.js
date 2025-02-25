import React from "react";
import "./About.css";
import ProfilePic from "../../Image/a.jpg";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="Profile Photo" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>

            <Fade right>
              <p>
              Results-driven Data Analyst with two years of experience in data analysis, visualization, and presentation. Possesses a strong foundational knowledge of communication technology. Proficient in Microsoft Excel for generating reports and graphs and creating visual representations of data through charts, graphs, and infographics. Skilled in data cleaning, Python programming, and statistical analysis. Demonstrates excellent problem-solving and analytical skills, with a proven ability to extract key insights from complex datasets. Additionally, proficient in utilizing SQL queries and tools for data extraction and analysis.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
