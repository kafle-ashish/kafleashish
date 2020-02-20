import React from "react"
import Typography from "../core/components/typography/Typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { IoLogoPython, IoLogoHtml5 } from 'react-icons/io'
import { GiDart, GiProcessor } from 'react-icons/gi'
import { DiJavascript1, DiNodejs, DiCss3Full, DiReact } from 'react-icons/di'
import { FaReact, FaNodeJs } from 'react-icons/fa'

import './pages.css'

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
          height: "30vh",
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
        <div className="tools__container">
          <div className="tool">
            <IoLogoPython
              size={80}
              color={'#333'}
              title="Python"
            />
            <Typography type="light__bold" className="tool__name">Python</Typography>
          </div>
          <div className="tool">
            <DiJavascript1
              size={80}
              color={'#333'}
              title="JS"
            />
            <Typography type="light__bold" className="tool__name">JS</Typography>
          </div>
          <div className="tool">
            <DiNodejs
              size={80}
              color={'#333'}
              title="NodeJS"
            />
            <Typography type="light__bold" className="tool__name">NodeJS</Typography>
          </div>
          <div className="tool">
            <IoLogoHtml5
              size={80}
              color={'#333'}
              title="HTML5"
            />
            <Typography type="light__bold" className="tool__name">HTML5</Typography>
          </div>
          <div className="tool">
            <DiCss3Full
              size={80}
              color={'#333'}
              title="CSS3"
            />
            <Typography type="light__bold" className="tool__name">CSS3</Typography>
          </div>
          <div className="tool">
            <FaReact
              size={80}
              color={'#333'}
              title="ReactJS"
            />
            <Typography type="light__bold" className="tool__name">ReactJS</Typography>
          </div>
          <div className="tool">
            <GiDart
              size={80}
              color={'#333'}
              title="Flutter"
            />
            <Typography type="light__bold" className="tool__name">Flutter</Typography>
          </div>
          <div className="tool">
            <DiReact
              size={80}
              color={'#333'}
              title="React Native"
            />
            <Typography type="light__bold" className="tool__name">React Native</Typography>
          </div>
          <div className="tool">
            <FaNodeJs
              size={80}
              color={'#333'}
              title="ExpressJS"
            />
            <Typography type="light__bold" className="tool__name">ExpressJS</Typography>
          </div>
          <div className="tool">
            <DiReact
              size={80}
              color={'#333'}
              title="Electron"
            />
            <Typography type="light__bold" className="tool__name">Electron</Typography>
          </div>
          <div className="tool">
            <GiProcessor
              size={80}
              color={'#333'}
              title="Electron"
            />
            <Typography type="light__bold" className="tool__name">Embedded Systems</Typography>
          </div>
        </div>
      </section>
    </Layout>
  )
}
