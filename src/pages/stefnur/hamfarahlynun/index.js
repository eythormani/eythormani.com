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
          Umhverfið í fyrsta sæti
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
        title="Munasöfn í alla byggðarkjarna"
        image="https://s3-eu-west-1.amazonaws.com/kfunddynamic/project_content_pics/2452/medium/c8feb8e83710403f288b584c2b0f1c59.jpg"
        to="salfraedithjonusta"
        fullWidth
      />
      <Tile
        title="Stór fyrirtæki þurfa að skila kolefnisbókhaldi"
        image="https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Grænkerafæði í öllum ríkisreknum mötuneytum"
        image="https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Áróður fyrir loftslagið"
        image="https://images.pexels.com/photos/2561628/pexels-photo-2561628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Takmörkum sölu á flugeldum"
        image="https://images.pexels.com/photos/1573724/pexels-photo-1573724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Hættum að selja vatn í flöskum"
        image="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="plan"
        fullWidth
      />
      <Tile
        title="Verslanir ættu ekki að mega henda mat"
        image="https://allthatsinteresting.com/wordpress/wp-content/uploads/2015/11/food-waste-oranges-dumpster.jpg"
        to="plan"
        fullWidth
      />
    </div>
  </Layout>
)

export default PlanPage
