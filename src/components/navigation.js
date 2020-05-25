import React from 'react'
import { Link } from 'gatsby'
import Logo from './logo'
import NaviagationItems from '../../content/navigation.yaml'
import NaviagationStyles from './navigation.module.scss'

export default ({ homepage = false }) => (
  <div className={NaviagationStyles.wrapper} id="nav">
    {!homepage && (
      <div className={NaviagationStyles.logoContainer}>
        <Logo />
      </div>
    )}
    <nav className={NaviagationStyles.container}>
      {NaviagationItems.nav.map(item => (
        <Link to={item.href} key={item.name}>
          {item.name}
        </Link>
      ))}
    </nav>
  </div>
)
