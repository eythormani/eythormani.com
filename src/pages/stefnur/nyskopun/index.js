import React from "react"

import "../../../styles/plan.css"
import "../../../styles/stefnur.css"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Tile from "../../../components/tile"

const PlanPage = () => (
  <Layout>
    <SEO title="Stefnur" />
    <div style={{ marginBottom: 112 }}>
      <div className="yellow-header-container">
        <div className="yellow-header">Plön fyrir</div>
      </div>
      <div className="plan-header-container" style={{ marginTop: 40 }}>
        <div className="plan-header">
          Jafnt aðgengi um allt land
        </div>
        <div className="plan-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
          ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit amet
          massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit metus,
          accumsan a purus quis, tempor accumsan neque. Nullam placerat, enim
          vel volutpat pellentesque, erat dui scelerisque nisi, egestas
          dignissim ipsum metus sed metus.
        </div>
      </div>
    </div>
    <div className="tileContainer">
      <Tile
        title="Sköpunarsmiðjur í öllum menntastofnunum"
        image="https://images.unsplash.com/photo-1568792358202-0b9a9071b357?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        to="salfraedithjonusta"
        fullWidth
      />
      <Tile
        title="Ríkið sem englafjárfestir"
        image="https://adventures.is/media/136162/iceland-money-2.jpg"
        to="plan"
        fullWidth
      />
      <Tile
        title="Hakkaþon fyrir hið opinbera"
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        to="plan"
        fullWidth
      />
      
    </div>
  </Layout>
)

export default PlanPage
