import React from "react"
import {Link} from 'gatsby'

import '../styles/stefnur.css'
const Tile = ({ image, title, to, fullWidth=false }) => (
  <Link to={to} className="tile" style={fullWidth ? {width: '100%', height: 400} : {}}>
    <div className="tileImageContainer">
      <img src={image} alt={title} />
    </div>
    <div style={{zIndex: 99}}><span className="tileTitle">{title}</span></div>
  </Link>
)

export default Tile
