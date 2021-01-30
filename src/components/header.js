import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="row justify-space-between" style={{fontFamily: "HU Iceland", fontWeight: 400, marginTop: 56}}>
      <div>🌒Eyþór Máni</div>
      <div>
        Lestu <Link to="stefnur">stefnurnar mínar</Link>,{" "}
        <Link to="about">um mig</Link> eða{" "}
        <Link to="contact">hafðu samband</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
