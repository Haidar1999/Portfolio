import React from "react";
import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "FARM CATFISH COST & SALES DASHBOARD",
      des: "Designed and deployed three interactive dashboards (Sales, Cost, Trends) in Looker Studio, consolidating farm data to track KPIs like total sales (1.87M), expenses(#943,840), and profit (1.87M), expenses(#943,840), and net profit (#932,560). Identified 49.7% profit margin through cost optimization analysis, highlighting feed procurement (Skretting: 64% of feed costs) as the largest expense driver. Reduced manual reporting by 80% by automating data integration for 1,474 fish batches, tracking feed consumption (756kg total), and batch performance (Batch C: #538,840 spent for 401kg feed).",
      projectlink: "https://lookerstudio.google.com/reporting/9c749899-7692-44a2-89dc-c22cdc28065e?s=mkdEyRyq_80",
      techused: [
        {
          techname: "Looker Studio",
        },
        {
          techname: "Google Sheet",
        },
        {
          techname: "Google form",
        },
        {
          techname: "Virtualization",
        },
      ],
    },

    {
      name: "SALES DATA ANALYSIS & CLEANING",
      des: "Conducted end-to-end data cleaning on a 1,000-row sales dataset, addressing missing values and inconsistent data types. Identified top-performing sales managers and most loyal customers, enabling targeted retention strategies. Performed statistical analysis (Pearson correlation, ANOVA, t-tests) to uncover relationships, such as a strong correlation (0.99) between order value and cost, and no significant refund differences between France and Sweden (p-value: 0.52). Visualized key insights using Seaborn and Matplotlib, including heatmaps for sales manager performance and KDE plots for cost distribution, enhancing data-driven decision-making for stakeholders.",
      projectlink: "https://drive.google.com/file/d/17JB-eZyVZqUD_yl6KhebgIoFfcCHRHgW/view",
      techused: [
        {
          techname: "Python",
        },
        {
          techname: "Statitical Analysis",
        },
        {
          techname: "Seaborn",
        },
        {
          techname: "Matplotlib",
        },
      ],
    },

    {
      name: "AMERICA STD DASHBOARD",
      des: "Developed a Power BI dashboard to visualize and analyze America STD data, identifying trends and insights to inform public health strategies. Analyzed 1,000+ records to identify the most prevalent STDs (Chlamydia: 45%, Gonorrhea: 30%, Syphilis: 25%) and high-risk demographics (18-24 age group: 60% of cases). Created a heat map to visualize STD prevalence by state, highlighting California as the highest-risk region. Developed a predictive model to forecast STD cases based on historical data, enabling proactive resource allocation and prevention efforts.",
      projectlink: "https://drive.google.com/file/d/1ofbaQmVlDmqLvko8g_8mW4t0l4mdJAgv/view?usp=drive_link",
      techused: [
        {
          techname: "Power BI",
        },
        {
          techname: "Data Cleaning",
        },
        {
          techname: "virtualization",
        },
        {
          techname: "Analysis",
        },
      ],
    },

    {
      name: "CLIMATE CHANGE IMPACT ON AGRICULTURE",
      des: "Analyzed the impact of climate change on agriculture using a 10-year dataset of temperature, rainfall, and crop yield data. Conducted data cleaning to address missing values and outliers, and performed time series analysis to identify trends and seasonality. Developed a predictive model using ARIMA to forecast crop yields based on historical climate data, enabling farmers to anticipate and mitigate the effects of climate change on their crops.",
      projectlink: "https://drive.google.com/file/d/1PC_D21R9NFtTHmdKkPU6OtgL98V1SG-n/view?usp=drive_link",
      techused: [
        {
          techname: "Python",
        },
        {
          techname: "Statitical Analysis",
        },
        {
          techname: "Panda / Numpy",
        },
        {
          techname: "plotly / Matplotlib",
        },
      ],
    },
    
   
  ];

  return (
    <div className="accordion-body" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <ProjectList  {...item} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
