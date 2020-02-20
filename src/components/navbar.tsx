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
        <Link style={{ textDecoration: "none", outline: "none" }} to="/about">
          <Button type="link">About</Button>
        </Link>
      </section>
    </nav >
  )
}

export default Navbar
