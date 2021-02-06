import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => {
  return (
    <div style={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Header siteTitle="Eyþór Máni" />

      {children}
      <Footer />
    </div>
  )
}
