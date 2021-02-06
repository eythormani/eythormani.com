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
          Óflokkuð áform
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
        title="Titill á plani"
        image="https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="hlekkur"
        fullWidth
      />
      <Tile
        title="Titill á plani"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Titill á plani"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      
    </div>
  </Layout>
)

export default PlanPage
