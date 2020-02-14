import React from "react"
import Typography from "../core/components/typography/Typography"
import { Button } from "../core/components/button/Button"

const Landing = () => {
  return (
    <section className="landing__section">
      <div className="introo">
        <div>

          <Typography type="h1" className="home__name">
            Ashish Kafle
        </Typography>
          <Typography
            type="light__bold"
            color="#333"
            className="position__desc"
          >
            Freelance Full Stack Developer.
          </Typography>
        </div>


        <div
          style={{
            display: "grid",
            placeItems: "center",
            paddingTop: "20px",
          }}
        >
          <Button type="flat" intent="#1565c0">
            Hire Me!
            </Button>
        </div>
      </div>
      <section
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <Button style={{ margin: "10px" }}>About Me</Button>
        <Button style={{ margin: "10px" }}>Portfolio</Button>
        <Button style={{ margin: "10px" }}>Contact Me</Button>
      </section>
    </section>
  )
}

export default Landing
