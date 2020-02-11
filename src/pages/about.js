//@ts-check
import React from "react"
import Typography from "../core/components/typography/Typography"
import Card from "../core/components/card/Card"
//@ts-ignore
import Image from "../images/hero.jpg"
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
          height: "91vh",
          marginTop: "2vh",
          justifyContent: "space-around",
        }}
      >
        <Card
          bg="white"
          style={{
            backgroundImage: `url(${Image})`,
            height: "500px",
            width: "400px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            flex: 1,
          }}
        ></Card>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
            facilisis sed odio morbi quis commodo. Nisi quis eleifend quam
            adipiscing vitae proin sagittis nisl. Pellentesque elit ullamcorper
            dignissim cras tincidunt lobortis. Ut enim blandit volutpat maecenas
            volutpat blandit aliquam. Sagittis aliquam malesuada bibendum arcu
            vitae elementum curabitur vitae. Vitae justo eget magna fermentum
            iaculis eu non diam. Malesuada nunc vel risus commodo viverra
            maecenas accumsan. Sagittis orci a scelerisque purus semper eget
            duis. Leo integer malesuada nunc vel risus commodo viverra maecenas.
            Cras ornare arcu dui vivamus arcu felis bibendum.
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
          Technologies I am familiar with!
        </Typography>
      </section>
    </Layout>
  )
}
