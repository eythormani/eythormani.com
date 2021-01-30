import React from "react"
import { Link } from "gatsby"
const FrontImageSell = ({
  image,
  smallTitle,
  bigTitle,
  readMoreLink,
  imgSide,
}) => {
  return (
    <div className="row align-center" style={{ marginBottom: 83 }}>
      {imgSide === "left" && (
        <img
          src={image}
          className="clip-circle"
          style={{ transform: "translateX(-188px)" }}
        />
      )}
      <div
        className="column align-start"
        style={{
          minWidth: 600,
          transform: `translateX(${imgSide === "left" ? "-60px" : ""})`,
        }}
      >
        <div className="yellow-header" style={{ marginBottom: 32 }}>
          {smallTitle}
        </div>
        <div className="big-header" style={{ marginBottom: 16 }}>
          {bigTitle}
        </div>
        {readMoreLink && <Link to={readMoreLink}>Lesa meira</Link>}
      </div>
      {imgSide === "right" && (
        <img
          src={image}
          className="clip-circle"
          style={{ transform: "translateX(128px)" }}
        />
      )}
    </div>
  )
}

export default FrontImageSell
