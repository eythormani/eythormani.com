import React from "react"
import { Link } from "gatsby"
import FrontImageSell from "../components/frontImageSell"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ marginBottom: 160 }}>
      <div className="yellow-header">Velkomin!</div>
      <div className="big-header" style={{ marginTop: 40 }}>
        Lorem ipsum
      </div>
    </div>
    <FrontImageSell
      image="https://m2.mbl.is/tSsZDiE-FdO_KxBXrtg7nrE-O_w=/1640x1093/smart/frimg/1/25/47/1254796.jpg"
      bigTitle="Vá, flottur sloppur"
      smallTitle="HR"
      imgSide="left"
    />
    <FrontImageSell
      image="https://cdn.mbl.is/frimg/1/25/47/1254728.jpg"
      bigTitle="Hvaða kona var þetta"
      smallTitle="Hver veit"
      imgSide="right"
    />
    <FrontImageSell
      image="https://m2.mbl.is/tSsZDiE-FdO_KxBXrtg7nrE-O_w=/1640x1093/smart/frimg/1/25/47/1254796.jpg"
      bigTitle="Vá, flottur sloppur"
      smallTitle="HR"
      imgSide="left"
    />
  </Layout>
)

export default IndexPage