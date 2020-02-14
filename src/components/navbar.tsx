import React from "react"
import { Button } from "../core/components/button/Button"
import { Link } from "gatsby"
import "./index.css"

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <div className="logo__main"></div>
      </Link>
      <section style={{ display: "flex" }}>
        <Link style={{ textDecoration: "none", outline: "none" }} to="/">
          <Button type="link">Home</Button>
        </Link>
        <Link style={{ textDecoration: "none", outline: "none" }} to="/lab">
          <Button type="link">Lab</Button>
        </Link>
        <Button type="link">Projects</Button>
      </section>
    </nav >
  )
}

export default Navbar
