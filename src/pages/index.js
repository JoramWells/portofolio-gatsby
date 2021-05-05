import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {Card,Row,Col} from 'antd'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h2 style={{textAlign:"center"}}>Fast, Reliable, Secure</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Row justify="space-around">
      <Col>
      <Card>
        <h3>Fast</h3>
      </Card>
      </Col>
      <Col>
      <Card>
        <h3>Reliable</h3>
      </Card>
      </Col>
      <Col>
      <Card>
        <h3>Secure</h3>
      </Card>
      </Col>
    </Row>

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
