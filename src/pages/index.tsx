import React from "react"
import Landing from "../components/landing"
import Typography from "../core/components/typography/Typography"
import Layout from "../components/layout"
import "./pages.css"
import SEO from "../components/seo"

export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Ashish Kafle home page"
        meta={[
          {
            name: "keywords",
            content:
              "Ashish, Kafle, Ashish Kafle, Home, Ashish Kafle Home Page",
          },
        ]}
      />

      <Landing />
      <section style={{ display: "grid", placeItems: "center" }}>
        <Typography
          type="h1"
          className="build__call"
          color="#1565c0"
        >
          What can I help you build?
        </Typography>
        <div className="call__cards__container">
          <div className="call__cards">
            <div className="call__for__action computer"></div>
            <Typography style={{ margin: "15px 0px" }} type="h5">
              Web/Front-end development
            </Typography>
            <Typography type="body">
              Want to build your dream business? Or do you want to make your own
              personal webpage? <br />I can help you build beautiful,
              accessible, performant & fast websites either for personal or
              business purposes.
            </Typography>
          </div>

          <div className="call__cards">
            <div className="call__for__action server"></div>
            <Typography style={{ margin: "15px 0px" }} type="h5">
              API/Server side development.
            </Typography>
            <Typography type="body">
              Any good business or service usually needs an API to talk to. I
              can build a fully perfomant & scalable API for your mobile or
              desktop applications. Want to build an e-commerce or your own new
              brand? I am here to help!
            </Typography>
          </div>

          <div className="call__cards">
            <div className="call__for__action phone"></div>
            <Typography style={{ margin: "15px 0px" }} type="h5">
              Native App development.
            </Typography>
            <Typography type="body">
              Do you want to reach your customers directly? I can build a
              performant mobile application for ios or android. I can work with
              API integration and application development. Bring me your ideas
              and I will make them into a reality!
            </Typography>
          </div>
        </div>
      </section>
    </Layout>
  )
}
