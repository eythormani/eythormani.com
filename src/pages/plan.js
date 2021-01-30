import React from "react"
import { Link } from "gatsby"

import "../styles/plan.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import placeholderImage from "../images/placeholder.jpg"

const PlanPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{marginBottom: 160}}>
      <div className="yellow-header-container">
        <div className="yellow-header">
          Framúrskarandi menntun
        </div>
        <div className="reading-length">
          4 mín
        </div>
      </div>
      <div className="plan-header-container" style={{marginTop: 40}}>
        <div className="plan-header">
          Fjölbreyttara val í grunn- og framhaldsskólum
        </div>
        <div className="plan-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit metus, accumsan a purus quis, tempor accumsan neque. Nullam placerat, enim vel volutpat pellentesque, erat dui scelerisque nisi, egestas dignissim ipsum metus sed metus.
        </div>
      </div>
    </div>
    <div className="plan-header-image-container">
      <div className="plan-header-image">
        <img src={placeholderImage}/>
      </div>
    </div>
  </Layout>
  

)

export default PlanPage