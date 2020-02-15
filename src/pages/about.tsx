import React from "react"
import Typography from "../core/components/typography/Typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About"
        description="Ashish Kafle about page"
        meta={[
          {
            name: "keywords",
            content: "Ashish, Kafle, Ashish Kafle, About, About Ashish Kafle",
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
        <div
          style={{
            display: "flex",
            flex: 2,
            padding: "10px 20px",
            flexDirection: "column",
          }}
        >
          <Typography type="h1" style={{ opacity: "0.6", flexWrap: "wrap" }}>
            About Me
          </Typography>
          <Typography style={{ maxWidth: "640px" }}>
            I am an Electronics & Communication graduate (2020) working as a
            software developer. I love to work on projects and new ideas.
          </Typography>
        </div>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          type="h1"
          style={{
            letterSpacing: "1px",
            wordSpacing: "6px",
            fontWeight: "bolder",
            fontSize: "26px",
            padding: "20px",
          }}
          color="#1565c0"
        >
          Tools & Technologies
        </Typography>
      </section>
    </Layout>
  )
}
