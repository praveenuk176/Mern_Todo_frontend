import React from 'react'
import '../Css/Footer.css'
import {Instagram, LinkedIn, YouTube} from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='con'>
    <div>
        <hr></hr>
        <div className="icon-container">
        <span className="icon"><a href="https://www.instagram.com/praveen_17_6?igsh=MXR4M2w1NmhldXdpeg==" class="instagram-link"> <Instagram /> </a></span>
        <span className="icon"><a href="https://in.linkedin.com/in/praveen-palanisamy-90086525a" className="linkedin-link"><LinkedIn /></a></span>
        <span className="icon"><a href="https://www.youtube.com/channel/UCi1mshqTRUzqS6xLIVuvoJg" className="youtube-link"><YouTube /></a></span>
        </div>
        <h3 id='foot'>Contact Email: praveenuk176@gmail.com<br></br>
        Mobile: +91 8610 510 254 </h3>
    </div>
    </div>
  )
}

export default Footer