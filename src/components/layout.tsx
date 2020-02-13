// @ts-check
import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <div className="app__container">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
