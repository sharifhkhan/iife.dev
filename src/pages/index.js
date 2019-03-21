import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Typography variant="h1" gutterBottom>
      Hello World
    </Typography>
    <p>A new site in progress with PWA in place.</p>
    <Button variant="contained" color="primary">
      Now with material-ui
    </Button>
    <div style={{ maxWidth: `300px`, margin: `1.45rem 0` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
