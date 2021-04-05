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
        title="Myndavélar á allt lögreglufólk"
        image="https://images.unsplash.com/photo-1557081999-aed1863cacb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=800"
        to="hlekkur"
        fullWidth
      />
      <Tile
        title="Ríkið ætti bara að nota frjálsan hugbúnað"
        image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        to="plan"
        fullWidth
      />
      <Tile
        title="Heyrnatæki og gleraugu ættu að vera ókeypis"
        image="https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        to="plan"
        fullWidth
      />
      <Tile
        title="Afnemum bann við hnefaleikum"
        image="https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        to="plan"
        fullWidth
      />
      <Tile
        title="Hættum að takmarka opnunartíma skemmtistaða"
        image="https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        to="plan"
        fullWidth
      />
      <Tile
        title="Íslensk tungumálagögn ættu að vera alveg frí og aðgengileg"
        image="https://images.unsplash.com/photo-1467688695332-6b486449d78f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
        to="plan"
        fullWidth
      />
      <Tile
        title="Hætta að rukka virðisauka af rafmagni, vatni og fráveitu"
        image="https://www.on.is/static/aad1f6a0136c6622dc5580e80b599deb/057f6/hellisheidarvirkjun3.jpg"
        to="plan"
        fullWidth
      />
      <Tile
        title="Glæpavæðum stafrænt kynferðisofbeldi"
        image="https://images.unsplash.com/photo-1606323518213-ba20fcddec0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        to="plan"
        fullWidth
      />
      
    </div>
  </Layout>
)

export default PlanPage
