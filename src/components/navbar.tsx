import React from "react"
import { Button } from "../core/components/button/Button"
import { Link } from "gatsby"
import "./index.css"

const Navbar = () => {
  return (
    <nav>
      <Link style={{ textDecoration: "none", outline: "none" }} to="/">
        <div className="logo__main"
        ></div>
      </Link>
      <section style={{ display: "flex" }}>
        <Button type="link">Lab</Button>
        <Button type="link">Projects</Button>
        <Link style={{ textDecoration: "none", outline: "none" }} to="/about">
          <Button type="link">About</Button>
        </Link>
        <Button type="link">Contact</Button>
      </section>
    </nav >
  )
}

export default Navbar
