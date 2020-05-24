import React from 'react'
import { Link } from 'gatsby'
import NaviagationItems from '../../content/navigation.yaml'
import NaviagationStyles from './navigation.module.scss'

export default () => (
  <nav className={NaviagationStyles.container}>
    {NaviagationItems.nav.map(item => (
      <Link to={item.href}>{item.name}</Link>
    ))}
  </nav>
)
