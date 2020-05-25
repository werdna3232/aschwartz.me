import React from 'react'
import { Link } from 'gatsby'
import Hr from './hr'
import CallsToActionStyles from './calls-to-action.module.scss'

export default ({ title, ctas }) => (
  <div className={CallsToActionStyles.container}>
    <Hr />
    <h2 className={CallsToActionStyles.title}>{title}</h2>
    <ul className={CallsToActionStyles.ctasList}>
      {ctas.map(cta => (
        <li key={cta.name}>
          <Link to={cta.href}>{cta.name}</Link>
        </li>
      ))}
    </ul>
    <a className={CallsToActionStyles.topLink} href="#nav">
      Back to top.
    </a>
  </div>
)
