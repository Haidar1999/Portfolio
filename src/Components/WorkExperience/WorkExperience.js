import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Freelance",
      position: "Data Analyst / Prompt Engineer",
      des: "Utilized SQL queries to extract relevant data from databases for analysis purposes. Created visual representations of data with charts, graphs, or infographics. Utilized Microsoft Excel to generate reports and graphs from intricate datasets. Developed and maintained databases to store, track, and analyze customer data. Designed and developed reports and analytics using Looker Studio and Power BI. Extracted key observations and insights from internal and external data sources to drive decision-making using Python. Used automated reports to help stakeholders understand complex data.",
      year: "November 2023 - Present",
      techskills: [
        {
          techname: "SQL",
        },
        {
          techname: "Excel",
        },
        {
          techname: "Python",
        },
        {
          techname: "Power BI / Looker",
        },
      ],
    },

    {
      companyname: "Tizeti Network Limited",
      position: "Customer Experience Analyst Intern",
      des: "Gathering customer feedback through surveys, reviews, social media interactions, website analytics, CRM data, and other channels. Using statistical methods to identify trends, patterns, and correlations within customer data to pinpoint pain points and areas of high customer satisfaction. Visualizing the customer journey across all touchpoints to identify potential friction points and opportunities for optimization. Monitoring key customer experience metrics like customer satisfaction score (CSAT), Net Promoter Score (NPS), and customer churn rate.Proposing data-driven strategies to enhance customer experience based on analysis results. ",
      year: "June 2023 - November 2023",

      techskills: [
        {
          techname: "Excel",
        },
        {
          techname: "CRM",
        },
        { 
          techname: "Power BI",
        },
        {
          techname: "Statistical Analysis",
        },
      ],
       
    },

    {
      companyname: "Exalt Application Limited",
      position: "Digital Analyst Intern",
      des: "Utilized SQL queries to extract relevant data from databases for analysis purposes. Created visual representations of data with charts, graphs, or infographics. Utilized Microsoft Excel to generate reports and graphs from intricate datasets. Developed and maintained databases to store, track, and analyze customer data. Designed and developed reports and analytics using Looker Studio and Power BI. Extracted key observations and insights from internal and external data sources to drive decision-making using Python. Used automated reports to help stakeholders understand complex data.",
      year: "February 2021 - August 2021",

      techskills: [
        {
          techname: "Sql / Python",
        },
        {
          techname: "Figma",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Excel",
        },
      ],
    },

    // {
    //   companyname: "Microsoft",
    //   position: "Full Stack Developer",
    //   des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    //   year: "2018-2019",

    //   techskills: [
    //     {
    //       techname: "Python",
    //     },
    //     {
    //       techname: "Express JS",
    //     },
    //     {
    //       techname: "Vue JS",
    //     },
    //     {
    //       techname: "Material UI",
    //     },
    //   ],
    // },

    
    
  ];

  const colors = [
    "#800000",
    "#FF8042",
    "#001CCE",
    "#4B088A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Work Experience</h5>
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
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


      
    </div>
  );
};

export default WorkExperience;
