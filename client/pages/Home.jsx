import React from 'react'
import { Link } from 'react-router-dom'
import BGImg from '../Photos/HomeBGImg.png'
import '../styles/home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BGImg})`}}>
      <div className='headerContainer' >
        <h1> Blazin' Frozen</h1>
        <p> Better than the Best! </p>
        <Link to="/menu">
          <button> ORDER NOW!! </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
