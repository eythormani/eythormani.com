import React from "react"
import { Link } from "gatsby"
import FrontImageSell from "../components/frontImageSell"

import "../styles/index.css"

import headshot from "../images/e1c.png"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="header-container" style={{ marginBottom: 160 }}>
      <div className="yellow-header">Velkomin!</div>
      <div className="big-header" style={{ marginTop: 40 }}>
        Geggjuð og grípandi setning sem vekur athygli og áhuga
      </div>
      <div className="headshot">
        <img height="500px" src={headshot}></img>
      </div>
    </div>
    <div className="spacer"></div>
    <FrontImageSell
      image="https://images.unsplash.com/photo-1568792358202-0b9a9071b357?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      bigTitle="Sköpunarsmiðjur í öllum menntastofnunum"
      smallTitle="Framúrskarandi menntun"
      imgSide="left"
      className="front-image"
      readMoreLink="/stefnur/sterkari-samfelog/adgengilegt-fjarnam"
      policyLink="/stefnur/sterkari-samfelog"
    />
    <FrontImageSell
      image="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
      bigTitle="Búvörusamningar fyrir grænar afurðir"
      smallTitle="Sjálfbær landbúnaður"
      imgSide="right"
      className="front-image"
      readMoreLink="/stefnur/sterkari-samfelog/adgengilegt-fjarnam"
      policyLink="/stefnur/sterkari-samfelog"
    />
    <FrontImageSell
      image="https://maelabord.reykjavik.is/extensions/MaelabordBorgarbua/UmhverfiogSamgongur.jpg"
      bigTitle="Endurgjaldslausar samgöngur fyrir nema"
      smallTitle="Framúrskarandi menntun"
      imgSide="left"
      className="front-image"
      readMoreLink="/stefnur/sterkari-samfelog/adgengilegt-fjarnam"
      policyLink="/stefnur/sterkari-samfelog"
    />
    <FrontImageSell
      image="https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      bigTitle="Sálfræðiþjónusta í gegnum fjarfundarbúnað"
      smallTitle="Sterkari samfélög"
      imgSide="right"
      className="front-image"
      readMoreLink="/stefnur/sterkari-samfelog/adgengilegt-fjarnam"
      policyLink="/stefnur/sterkari-samfelog"
    />
  </Layout>
)

export default IndexPage