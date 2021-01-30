import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SiteIcon from "../images/main-icon.png"
import Layout from "./layout"
const Header = ({ siteTitle }) => (
  <Layout>
    <header style={{ marginBottom: 125 }}>
      <div
        className="row justify-space-between"
        style={{ fontFamily: "HU Iceland", fontWeight: 400, marginTop: 56 }}
      >
        <Link className="row" to="/" style={{borderBottom: 'none'}}>
          <img src={SiteIcon} alt="Main Icon" width={25} height={25} style={{marginRight: 10}} />
          Eyþór Máni
        </Link>
        <div>
          Lestu <Link to="stefnur">stefnurnar mínar</Link>,{" "}
          <Link to="about">um mig</Link> eða{" "}
          <Link to="contact">hafðu samband</Link>
        </div>
      </div>
    </header>

  </Layout>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
