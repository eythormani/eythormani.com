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
          Landbúnaður sem virkar fyrir bændur
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
        title="Nýsköpunarstyrkir fyrir bændur"
        image="https://commercialwaste.trade/wp-content/uploads/2019/07/featured-image-of-vertical-farming.jpg"
        to="salfraedithjonusta"
        fullWidth
      />
      <Tile
        title="Búvörusamningar fyrir grænar afurðir"
        image="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
        to="plan"
        fullWidth
      />
      <Tile
        title="Nýtum jarðvarma til verðmætasköpunar"
        image="https://images.pexels.com/photos/2560900/pexels-photo-2560900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Virðiskeðjan til bænda"
        image="https://www.icelandphotography.com/images/xl/JAE-IcelandAutumn-21.jpg"
        to="plan"
        fullWidth
      />
      <Tile
        title="Gerum gott úr vannýttum hráefnum"
        image="https://images.unsplash.com/photo-1558567344-858438964240?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        to="plan"
        fullWidth
      />
    </div>
  </Layout>
)

export default PlanPage
