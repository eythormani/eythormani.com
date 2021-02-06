import React from 'react';
import Header from "../components/header"

export default ({ children }) => {
  return (
    <>
      <Header siteTitle="Eyþór Máni"/>
      {children}
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}
