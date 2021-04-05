import React from "react"

import "../../../styles/plan.css"
import "../../../styles/stefnur.css"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Tile from "../../../components/tile"

import robot from "../../../images/robot.jpg"
import forritun from "../../../images/forritun.jpg"


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
        title="Endurgjaldslausar samgöngur fyrir nema"
        image="https://maelabord.reykjavik.is/extensions/MaelabordBorgarbua/UmhverfiogSamgongur.jpg"
        to="friar-samgongur"
        fullWidth
      />
      <Tile
        title="Gróðurhús í grunn- og leikskóla"
        image="https://solarimpulse.com/files/solutionrewrites/picture_1/2019-09-13-141533/Smart-Greenhouse-Family22.jpg"
        to="grodurhus-i-grunnskolum"
        fullWidth
      />
      <Tile
        title="Fjölbreyttara val í grunn- og framhalsskólum"
        image={robot}
        to="val"
        fullWidth
      />
      <Tile
        title="Aðgengi að fjarnámi er jafnréttismál"
        image="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        to="adgengi-ad-fjarnami"
        fullWidth
      />
      <Tile
        title="Kennum kynfræðslu"
        image="https://epe.brightspotcdn.com/dims4/default/9778fcc/2147483647/strip/true/crop/924x627+138+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.amazonaws.com%2Fb6%2Ffc%2F78eeef574651ae380f5e264ec9f1%2Fsex-ed-soc-2.jpg"
        to="kynfraedsla"
        fullWidth
      />
      <Tile
        title="Endurhugsum samfélagsfræði og lífsleikni"
        image="https://images.pexels.com/photos/5212336/pexels-photo-5212336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="samfelagsfraedi"
        fullWidth
      />
      <Tile
        title="Forritun fyrir alla"
        image={forritun}
        to="forritun"
        fullWidth
      />
      <Tile
        title="Lýðræðislegt endurmat á kennsluskránni"
        image="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="endurmat-a-kennsluskra"
        fullWidth
      />
    </div>
  </Layout>
)

export default PlanPage
