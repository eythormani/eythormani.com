import React from "react"
import { useEffect, useState, useRef } from "react"

import "../../../styles/plan.css"

import Layout from "../../../components/layout"
import SEO from "../../../components/seo"

const PlanMenu = () => {
  return (
    <div className="plan-menu-container">
      <div className="plan-menu">
        <div className="plan-menu-item selected-menu-item">
          1. Hvað er planið?
        </div>
        <div className="plan-menu-item">2. Vandamálið</div>
        <div className="plan-menu-item">3. Þriðji kafli</div>
        <div className="plan-menu-item">4. Meira af texta</div>
        <div className="plan-menu-item">5. Hann heldur áfram</div>
      </div>
    </div>
  )
}

const PlanPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div style={{ marginBottom: 160 }}>
          <div className="yellow-header-container">
            <div className="yellow-header">Framúrskarandi menntun</div>
            <div className="reading-length">X mín</div>
          </div>
          <div className="plan-header-container" style={{ marginTop: 40 }}>
            <div className="plan-header">
              Endurgjaldslausar samgöngur fyrir nema
            </div>
            <div className="plan-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
              ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit
              amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam
              velit metus, accumsan a purus quis, tempor accumsan neque. Nullam
              placerat, enim vel volutpat pellentesque, erat dui scelerisque
              nisi, egestas dignissim ipsum metus sed metus.
            </div>
          </div>
        </div>
      </Layout>
      <div className="plan-header-image"></div>
      <div className="plan-container">
        <PlanMenu />
        <div className="plan-text-container">
          <div className="plan-text-header">Hvað er planið?</div>
          <div className="plan-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit
            amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit
            metus, accumsan a purus quis, tempor accumsan neque. Nullam
            placerat, enim vel volutpat pellentesque, erat dui scelerisque nisi,
            egestas dignissim ipsum metus sed metus.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit
            amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit
            metus, accumsan a purus quis, tempor accumsan neque. Nullam
            placerat, enim vel volutpat pellentesque, erat dui scelerisque nisi,
            egestas dignissim ipsum metus sed metus.
          </div>
          <div className="spacer"></div>
          <div className="plan-text-header">Af hverju?</div>
          <div className="plan-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit
            amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit
            metus, accumsan a purus quis, tempor accumsan neque. Nullam
            placerat, enim vel volutpat pellentesque, erat dui scelerisque nisi,
            egestas dignissim ipsum metus sed metus.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit
            amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit
            metus, accumsan a purus quis, tempor accumsan neque. Nullam
            placerat, enim vel volutpat pellentesque, erat dui scelerisque nisi,
            egestas dignissim ipsum metus sed metus.
          </div>
          <div className="spacer"></div>
          <div className="plan-text-header">Hvað mun þetta kosta?</div>
          <div className="plan-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit
            amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit
            metus, accumsan a purus quis, tempor accumsan neque. Nullam
            placerat, enim vel volutpat pellentesque, erat dui scelerisque nisi,
            egestas dignissim ipsum metus sed metus.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit
            amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit
            metus, accumsan a purus quis, tempor accumsan neque. Nullam
            placerat, enim vel volutpat pellentesque, erat dui scelerisque nisi,
            egestas dignissim ipsum metus sed metus.
          </div>
          <div className="spacer"></div>
          <div className="two-column-container plan-text-container">
            <div className="two-columns-column">
              <div className="plan-text-header">Kostir</div>
              <div className="pros-cons plan-text">
                <div className="pro-con">- kostur 1</div>
                <div className="pro-con">- kostur 1</div>
                <div className="pro-con">- kostur 1</div>
                <div className="pro-con">- kostur 1</div>
                <div className="pro-con">- kostur 1</div>
                <div className="pro-con">- kostur 1</div>
                <div className="pro-con">- kostur 1</div>
                <div className="pro-con">- kostur 1</div>
              </div>
            </div>
            <div className="two-columns-column">
              <div className="plan-text-header">Gallar</div>
              <div className="pros-cons plan-text">
                <div className="pro-con">- galli 1</div>
                <div className="pro-con">- galli 1</div>
                <div className="pro-con">- galli 1</div>
                <div className="pro-con">- galli 1</div>
                <div className="pro-con">- galli 1</div>
              </div>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="plan-text-header">Tenglar</div>
          <div className="plan-text">
            Ég er ekki einn að tala fyrir þessu. Ef þér finnst tillagan
            áhugaverð eru hérna tenglar á greinar og rannsóknir sem styðja við
            málefnið, eða annað efni sem þér gæti þótt áhugavert.
            <br></br>
            <br></br>
          </div>
          <div className="plan-text two-column-container">
            <div className="two-columns-column">
              <div className="link-container">
                <a className="link" href="#">
                  www.reddit.com/r/politics
                </a>
              </div>
              <div className="link-container">
                <a className="link" href="#">
                  www.reddit.com/r/politics
                </a>
              </div>
              <div className="link-container">
                <a className="link" href="#">
                  www.reddit.com/r/politics
                </a>
              </div>
              <div className="link-container">
                <a className="link" href="#">
                  www.reddit.com/r/politics
                </a>
              </div>
            </div>
            <div className="two-columns-column">
              <div className="link-container">
                <a className="link" href="#">
                  www.reddit.com/r/politics
                </a>
              </div>
              <div className="link-container">
                <a className="link" href="#">
                  www.reddit.com/r/politics
                </a>
              </div>
              <div className="link-container">
                <a className="link" href="#">
                  www.reddit.com/r/politics
                </a>
              </div>
              <div className="link-container">
                <a className="link" href="#">
                  www.reddit.com/r/politics
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="plan-image" id="moresheep"></div>
      <div className="plan-container">
        <div className="plan-menu-container">
          <div className="plan-menu">
            <div className="plan-menu-item selected-menu-item"></div>
            <div className="plan-menu-item"></div>
            <div className="plan-menu-item"></div>
            <div className="plan-menu-item"></div>
            <div className="plan-menu-item"></div>
          </div>
        </div>
        <div className="plan-text-container">
          <div className="plan-text-header">
            Hvaða hópar eru að berjast fyrir þessu?
          </div>
          <div className="plan-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit
            amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit
            metus, accumsan a purus quis, tempor accumsan neque. Nullam
            placerat, enim vel volutpat pellentesque, erat dui scelerisque nisi,
            egestas dignissim ipsum metus sed metus.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit
            amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit
            metus, accumsan a purus quis, tempor accumsan neque. Nullam
            placerat, enim vel volutpat pellentesque, erat dui scelerisque nisi,
            egestas dignissim ipsum metus sed metus.
          </div>
          <div className="spacer"></div>
          <div className="plan-text-header">Vilt þú hjálpa?</div>
          <div className="plan-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius
            ornare sem, sit amet malesuada lectus dictum ac. Pellentesque sit
            amet massa ullamcorper, blandit enim ac, ultrices leo. Nullam velit
            metus, accumsan a purus quis, tempor accumsan neque. Nullam
            placerat, enim vel volutpat pellentesque, erat dui scelerisque nisi,
            egestas dignissim ipsum metus sed metus.
          </div>
          <div className="download">
            <a href="#" class="download-line">
              Niðurhala frumvarpi
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlanPage
