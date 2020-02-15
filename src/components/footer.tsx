import React from "react"
import Typography from "../core/components/typography/Typography"
import Facebook from "../images/facebook.svg"
import Github from "../images/github.svg"
import Instragram from "../images/instagram.svg"
import WhatsApp from "../images/whatsapp.svg"
import "./index.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer__main">
        <div className="social__container">
          <Typography type="h4" color="#1565c0" className="follow__me">
            Follow me on
          </Typography>
          <div
            style={{ backgroundImage: `url('${Facebook}')` }}
            className="social__icons"
          ></div>
          <div
            className="social__icons"
            style={{ backgroundImage: `url(${Instragram})` }}
          ></div>
          <div
            className="social__icons"
            style={{ backgroundImage: `url(${WhatsApp})` }}
          ></div>
          <div
            className="social__icons"
            style={{ backgroundImage: `url(${Github})` }}
          ></div>
        </div>
        <div className="copy__right">
          <Typography type="title" style={{ marginTop: "20px" }}>
            Ashish Kafle | Kathmandu, Nepal
          </Typography>
          <Typography type="body">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
}

export default Footer
