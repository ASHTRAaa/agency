import React from 'react'
import "./Home.css"
import HomeService from '../../layout/home-service/HomeService'
import let_talk from '../../assets/let_talk.png';
import HomeWork from '../../layout/home-work/HomeWork';

export default function Home() {
  return (
    <>
    <div className="home">
      <h1>We <span>build, design</span> and deliver</h1>
      <p>Reach out for better performance</p>
    </div>
    <HomeService/>
    <div className="let-talk">
        <div className="let-talk-left">
            <spam className="left-header">
            <h1>Let's Talk!</h1>
            <button className='cta-btn talk-btn'><i className="fa-solid fa-arrow-right"></i></button>
            </spam>
            <p>Get in Touch for free Website Proposal</p>
        </div>
       <div class="let-talk-right">
  <img src={let_talk} alt="Let's talk"/>
  </div>
</div>

    <HomeWork/>
    </>

  )
}
