import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./cv.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

import { Link } from "react-scroll";

const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p>
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <div className="container home-content">
        <Fade right>
          <h1>Hi I'm Afeez Ayedara</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Data Analyst",
                  "Business Analyst",
                  "Prompt Engineer",
                  "Data Engineer",
                  "Python Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h3>
        </Fade>

        <Fade bottom>
          <div className="button-for-action">
           
        
              <div className="hire-me-button">
                <a href="https://www.linkedin.com/in/afeez-ayedara-17225a315/" target="_blank" rel="noreferrer">
                  Hire Me
                </a>
              </div>
            
            <div className="get-resume-button">
              <a href={MyCv} download="Afeez_Ayedara_cv.pdf">
                Get Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
