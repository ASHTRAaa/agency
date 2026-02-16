import React from 'react'
import "./homeWork.css"
import WorkCard from '../../components/work-card/WorkCard';
import ai from "../../assets/ai.png";
import mobiledev from "../../assets/mobiledev.png";
import website from "../../assets/website.png";

const projects = [
  {
    title:"Knock Knock App",
    country:"New Zealand",
    image:ai,
    tagline:"BOOST YOUR BUSINESS VIA AI",
    bg:"#0a1e20"
  },
  {
    title:"Sales CRM Platform",
    country:"Australia",
    image:mobiledev,
    tagline:"MANAGE CUSTOMERS SMARTER",
    bg:"#ea9400"
  },
  {
    title:"AI Chat Assistant",
    country:"USA",
    image:website,
    tagline:"AUTOMATE CUSTOMER SUPPORT",
    bg:"#8c0176"
  }
];

export default function HomeWork() {


  return (
    <div className="main-container">
        <div className="work-texts service-texts">
            <h2>Our Work</h2>
        <p>
         Examples of how our services have helped clients achieve their business objectives.
        </p>
        </div>
       <section className="projects">
      <div style={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
        {projects.map((item,index)=>(
         <WorkCard
  key={index}
  title={item.title}
  country={item.country}
  image={item.image}
  tagline={item.tagline}
  bg={item.bg}
/>
        ))}
      </div>
    </section>
    </div>
  )
}
