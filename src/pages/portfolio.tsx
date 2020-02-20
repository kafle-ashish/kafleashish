import React from "react"
import Typography from "../core/components/typography/Typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Ashish Kafle portfolio page"
        meta={[
          {
            name: "keywords",
            content: "Ashish, Kafle, Ashish Kafle, Portfolio, Portfolio Ashish Kafle",
          },
        ]}
      />
      <section
        style={{
          display: "flex",
          padding: "10px 20px",
          height: "80vh",
          justifyContent: "space-around",
        }}
      >

      </section>
    </Layout>
  )
}
