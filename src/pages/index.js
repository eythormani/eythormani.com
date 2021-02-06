import React from "react"
import { Link } from "gatsby"
import FrontImageSell from "../components/frontImageSell"

import "../styles/index.css"

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
      bigTitle="Aðgengi að fjarnámi er jafnréttismál"
      smallTitle="Sterkari samfélög"
      imgSide="left"
      className="front-image"
      readMoreLink="/stefnur/sterkari-samfelog/adgengilegt-fjarnam"
      policyLink="/stefnur/sterkari-samfelog"
    />
    <FrontImageSell
      image="https://cdn.mbl.is/frimg/1/25/47/1254728.jpg"
      bigTitle="Eflum nýsköpun í landbúnaði"
      smallTitle="Sjálfbær landbúnaður"
      imgSide="right"
      className="front-image"
    />
    <FrontImageSell
      image="https://m2.mbl.is/tSsZDiE-FdO_KxBXrtg7nrE-O_w=/1640x1093/smart/frimg/1/25/47/1254796.jpg"
      bigTitle="Sköpunarrými í öllum skólum"
      smallTitle="Aðgengileg nýsköpun fyrir framtíðina"
      imgSide="left"
      className="front-image"
    />
    <FrontImageSell
      image="https://cdn.mbl.is/frimg/1/25/47/1254728.jpg"
      bigTitle="Sálfræðiþjónusta í gegnum fjarfundarbúnað"
      smallTitle="Sterkari samfélög"
      imgSide="right"
      className="front-image"
    />
  </Layout>
)

export default IndexPage