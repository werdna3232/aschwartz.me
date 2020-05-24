import React from 'react'
import PropTypes from 'prop-types'

import Footer from './footer'
import Container from './container'
import SEO from '../components/seo'

import '../../scss/global.scss'

const Layout = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
