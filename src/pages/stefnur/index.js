import React from "react"

import "../../styles/plan.css"
import "../../styles/stefnur.css"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Tile from "../../components/tile"

import placeholderImage from "../../images/placeholder.jpg"
import menntunImage from "../../images/menntun.jpg"
import innovationImage from "../../images/innovation.jpg"

const PlanPage = () => (
  <Layout>
    <SEO title="Stefnur" />
    <div style={{ marginBottom: 112 }}>
      <div className="yellow-header-container">
        <div className="yellow-header">Stefnurnar mínar</div>
      </div>
      <div className="plan-header-container" style={{ marginTop: 40 }}>
        <div className="plan-header">
          Ég er heitur fyrir mörgu, en þessu er ég heitastur fyrir.
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
        title="Aðgengileg nýsköpun fyrir framtíðina"
        image={innovationImage}
        to="/stefnur/nyskopun"
      />
      <Tile
        title="Landbúnaður sem virkar fyrir bændur"
        image="https://images.pexels.com/photos/2659484/pexels-photo-2659484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="/stefnur/landbunadur"
      />
      <Tile
        title="Jafnt aðgengi um allt land"
        image="https://images.pexels.com/photos/318427/pexels-photo-318427.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        to="/stefnur/sterkari-samfelog"
      />
      <Tile
        title="Framúrskarandi menntun"
        image={menntunImage}
        to="/stefnur/framurskarandi-menntun"
      />
      <Tile
        title="Komum ungu fólki til áhrifa"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="/stefnur/ungt-folk"
      />
      <Tile
        title="Jörðin okkar er að deyja"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="/stefnur/hamfarahlynun"
      />
      <Tile
        title="Lýðræði í verki"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="/stefnur/lydraedi"
      />
      <Tile
        title="Annað"
        image="https://images.pexels.com/photos/1660990/pexels-photo-1660990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        to="/stefnur/annad"
      />
    </div>
  </Layout>
)

export default PlanPage
