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
          Látum lýðræðið virka smurt
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
        title="Tveggja kjörtímabila hámark á þingsetu"
        image="https://www.visindavefur.is/myndir/althingi_thingsalur_stor_260117.jpg"
        to="salfraedithjonusta"
        fullWidth
      />
      <Tile
        title="Aðskilnaður framkvæmdar- og löggjafarvalds"
        image="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        to="plan"
        fullWidth
      />
      <Tile
        title="Lýðræðivæðum stjórnir stórra fyrirtækja"
        image="https://nfc-forum.org/wp-content/uploads/2019/08/1.jpg"
        to="plan"
        fullWidth
      />
      <Tile
        title="Þjóðaratkvæðagreiðslur ættu að vera bindandi"
        image="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        to="plan"
        fullWidth
      />
      <Tile
        title="Atkvæði ættu að vera jöfn um allt land"
        image="https://eoimages.gsfc.nasa.gov/images/imagerecords/62000/62109/Iceland.A2002252.1310.500m.jpg"
        to="plan"
        fullWidth
      />
      
    </div>
  </Layout>
)

export default PlanPage
