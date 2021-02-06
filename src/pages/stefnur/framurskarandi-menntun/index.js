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
        <div className="yellow-header">Stefnurnar mínar</div>
      </div>
      <div className="plan-header-container" style={{ marginTop: 40 }}>
        <div className="plan-header">
          Framúrskarandi menntun
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
        title="Margrét Einarsdóttir"
        image="https://pbs.twimg.com/profile_images/917390241228615681/ZsZCUSE9.jpg"
        to="plan"
        fullWidth
      />
      <Tile
        title="Aðgengileg nýsköpun fyrir framtíðina"
        image="https://www.visir.is/i/D5CC38AF5F127CF8323E8457B14CD2ED13856F354E743AB541041806ABBA8236_713x0.jpg"
      />
      <Tile
        title="Framúrskarandi menntun"
        image="https://www.dv.is/wp-content/uploads/2018/04/Spurning3-1-324x350.png"
        to="/stefna1"
      />
      <Tile
        title="Framúrskarandi menntun"
        image="https://www.ruv.is/sites/default/files/fr_20190911_120409.jpg"
        to="/stefna1"
      />
      <Tile
        title="Framúrskarandi menntun"
        image="http://www.vb.is/media/cache/52/6f/526f3f76e573f6aeb3e8102583ca191e.jpg"
        to="/stefna1"
      />
      <Tile
        title="Framúrskarandi menntun"
        image="https://pbs.twimg.com/profile_images/1182999037550698501/cTSxSB60_400x400.jpg"
        to="/stefna1"
      />
    </div>
  </Layout>
)

export default PlanPage
