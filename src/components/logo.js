import React from 'react'

import Logo from '../images/logo.svg'

export default ({ path, isNav }) => {
  return <img src={Logo} alt={isNav ? "Home" : "Andrew Schwartz logo"} />
}
