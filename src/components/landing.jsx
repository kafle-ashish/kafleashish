import React from "react"
import Typography from "../core/components/typography/Typography"
import { Button } from "../core/components/button/Button"

const Landing = () => {
  return (
    <section className="landing__section">
      <div className="introo">
        <Typography type="h1" color="#333">
          Hi I am Ashish Kafle!
        </Typography>
        <Typography type="light__bold" color="#333">
          Freelance Full Stack Developer.
        </Typography>
        <Typography type="body" color="#333">
          Web UI and backend development,
          <br />
          Cross-platform Mobile development.
        </Typography>
        <div
          style={{ display: "grid", placeItems: "center", paddingTop: "20px" }}
        >
          <Button type="flat">Hire Me!</Button>
        </div>
      </div>
    </section>
  )
}

export default Landing
