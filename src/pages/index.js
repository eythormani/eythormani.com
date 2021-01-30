import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{marginBottom: 160}}>
      <div className="yellow-header">
        Velkomin!
      </div>
      <div className="big-header" style={{marginTop: 40}}>
        Lorem ipsum
      </div>
    </div>
  </Layout>
)

export default IndexPage
