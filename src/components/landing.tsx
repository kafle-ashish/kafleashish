import React, { useState } from "react"
import Typography from "../core/components/typography/Typography"
import { Button } from "../core/components/button/Button"
import { Link } from "gatsby"
import Dialog from "./dialog"

const Landing = () => {

  const [isHireDialogShown, setHireDialogShown] = useState(false);

  return (
    <section className="landing__section">
      <Dialog
        setIsOpen={setHireDialogShown}
        isOpen={isHireDialogShown}
        header="Hire me!"
        footer="Hire me as well!"
      >
        Hello World!
      </Dialog>
      <div className="introo">
        <div className="name__pos">
          <Typography type="h1" className="home__name">
            Ashish Kafle
        </Typography>
          <Typography
            type="light__bold"
            color="#1D7324"
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
          <Button type="flat" intent="#1565c0"
            onClick={() => { setHireDialogShown(true) }}
          >
            Hire Me!
            </Button>
        </div>
      </div>
      <section
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <Link style={{ textDecoration: "none", outline: "none" }} to="/about">
          <Button style={{ margin: "10px" }}>About Me</Button>
        </Link>
        <Button style={{ margin: "10px" }}>Portfolio</Button>
        <Button style={{ margin: "10px" }}>Contact Me</Button>
      </section>
    </section>
  )
}

export default Landing
