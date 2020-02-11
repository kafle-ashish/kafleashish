import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './pages.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "70vh",
      }}
    >
      <h1 className="error__404">ERROR 404: NOT FOUND</h1>
      <p className="title__text">Oops! that page was not found.</p>
    </section>
  </Layout>
)

export default NotFoundPage
