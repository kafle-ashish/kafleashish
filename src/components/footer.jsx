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
      <Typography type="h4" color="#1565c0">
        Follow me on
      </Typography>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundImage: `url(${Facebook})`,
            width: "30px",
            height: "30px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            textAlign: "center",
            margin: "10px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${Instragram})`,
            width: "30px",
            height: "30px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            textAlign: "center",
            margin: "10px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${WhatsApp})`,
            width: "30px",
            height: "30px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            textAlign: "center",
            margin: "10px",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${Github})`,
            width: "30px",
            height: "30px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            textAlign: "center",
            margin: "10px",
          }}
        ></div>
      </div>
      <Typography type="title" style={{ marginTop: "20px" }}>
        Ashish Kafle | Kathmandu, Nepal
      </Typography>
      <Typography type="body">
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </Typography>
    </footer>
  )
}

export default Footer
