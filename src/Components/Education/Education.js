import React from "react";
import "./Education.css";
import { FaGraduationCap } from "react-icons/fa";



import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  const data = [
    {
      name: "Kwara State University",
      degree: "B.sc in Computer Science",
      year: "2018-2022",
      des: "I graduated from Kwara State University, Malete with 2.1(second class upper). I have a strong passion for Data Science and I am always eager to learn new technologies.",
    },
      {

      name: "Folem High School",
      degree: "Secondary School Graduation(o'level)",
      year: "2011-2017",
      des: "I graduated from Folem High School, Lagos with 5 distinctions in my O'level result. I was the best student in my set and I was awarded the best student in Mathematics and Science Department.",
    }
    
  ];


  const colors = [
    "#001CCE",
    "#4B088A",
    "#FE2EF7",
    "#FF1042",
  ];

  return (
    <div className="container education-section" id="education">

      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>


      <div className="timeline-section">

        <VerticalTimeline lineColor="#FF1042">

          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                {item.degree}
              </h5>


              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


    </div>
  );
};

export default Education;
