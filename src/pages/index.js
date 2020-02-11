import React from "react"
import Landing from "../components/landing"
import Typography from "../core/components/typography/Typography"
import Server from "../images/computer.svg"
import Computer from "../images/browser.svg"
import SmartPhone from "../images/smartphone.svg"
import { Button } from "../core/components/button/Button"
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
          style={{
            letterSpacing: "1px",
            wordSpacing: "6px",
            fontWeight: "bolder",
            fontSize: "36px",
            padding: "20px",
          }}
          color="#1565c0"
        >
          What can I help you build?
        </Typography>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "230px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${Computer})`,
                width: "150px",
                height: "150px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                textAlign: "center",
              }}
            ></div>
            <Typography style={{ margin: "15px 0px" }} type="h5">
              Web/Front-end development
            </Typography>
            <Typography type="body">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "230px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${Server})`,
                width: "150px",
                height: "150px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                textAlign: "center",
              }}
            ></div>
            <Typography style={{ margin: "15px 0px" }} type="h5">
              API/Server side development.
            </Typography>
            <Typography type="body">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "230px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${SmartPhone})`,
                width: "150px",
                height: "150px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                textAlign: "center",
                flexWrap: "wrap",
              }}
            ></div>
            <Typography style={{ margin: "15px 0px" }} type="h5">
              Native App development.
            </Typography>
            <Typography type="body">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt
            </Typography>
          </div>
        </div>
      </section>
    </Layout>
  )
}
