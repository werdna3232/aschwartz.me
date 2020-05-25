import React from 'react'
import HeroStyles from './hero.module.scss'

export default () => (
  <h1 className={HeroStyles.hero}>
    <span role="img" aria-label="wave">
      👋
    </span>{' '}
    I’m Andrew
  </h1>
)
