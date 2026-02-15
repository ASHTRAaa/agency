import React from 'react'
import "./Home.css"
import HomeService from '../../layout/home-service/HomeService'
export default function Home() {
  return (
    <>
    <div className="home">
      <h1>We <span>build, design</span> and deliver</h1>
      <p>Reach out for better performance</p>

    </div>
    <HomeService/>
    </>
    
  )
}
