import React from 'react'
import { Link } from 'gatsby'
import Hr from './hr'
import CallsToActionStyles from './calls-to-action.module.scss'

export default ({ title, ctas }) => (
  <div>
    <Hr />
    <h2 className={CallsToActionStyles.title}>{title}</h2>
    <ul className={CallsToActionStyles.ctasList}>
      {ctas.map(cta => (
        <li>
          <Link to={cta.href}>{cta.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)
