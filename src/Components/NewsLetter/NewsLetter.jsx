import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div>
      <div className="newsletter">
        <h1>Get Exlusive Ofeers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
      </div>
      <input type="email" placeholder='Your Email id' />
      <button>Subscribe</button>
    </div>
  )
}

export default NewsLetter
