import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

export default Item = ({ title, content }) => (
  <h3>{title}</h3>
  <p>{content}</p>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
