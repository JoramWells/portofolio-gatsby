import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card, Row, Col } from "antd"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2 style={{ textAlign: "center" }}>Fast, Reliable, Secure</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Row justify="space-around" style={{ fontFamily: "Arial" }}>
      <Col>
        <Card
          cover={
            <StaticImage
              src="../images/secure.svg"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A fast"
            />
          }
          style={{ width: "15rem", border:"0" }}
        >
          <h3>Secure</h3>
          <p style={{ color: "grey" }}>
            Google authentication for fast user signin, encrypted data,
            increased cyber crimes, protect user data
          </p>
        </Card>
      </Col>
      <Col>
        <Card
          cover={
            <StaticImage
              src="../images/stars.svg"
              alt="success"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          }
          style={{ width: "15rem", border:"0" }}
        >
          <h3>Fast</h3>
          <p style={{color:"grey", fontSize:"14px"}}>
            Applications that run fast and smoothless, ensure amazing client
            experience
          </p>
        </Card>
      </Col>
      <Col>
        <Card
          cover={
            <StaticImage
              src="../images/success.svg"
              alt="server"
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          }
          style={{ width: "15rem", border:"0" }}
        >
          <h3>Reliable</h3>
          <p style={{color:"grey", fontSize:"14px"}}>
            Applications that meet user expectations and your companies demands.
          </p>
        </Card>
      </Col>
    </Row>

    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
