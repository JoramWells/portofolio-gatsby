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
    <Row justify="space-around">
      <Col>
        <Card
          cover={
            <StaticImage
              src="../images/fast.svg"
              width={200}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="A fast"
            />
          }
        >
          <h3>Fast</h3>
        </Card>
      </Col>
      <Col>
        <Card
          cover={
            <StaticImage
              src="../images/Success.svg"
              alt="success"
              width={200}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              style={{marginBottom:"2rem"}}
            />
          }
        >
          <h3>Reliable</h3>
        </Card>
      </Col>
      <Col>
        <Card
          cover={
            <StaticImage
              src="../images/Server.svg"
              alt="server"
              width={200}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          }
        >
          <h3>Secure</h3>
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
