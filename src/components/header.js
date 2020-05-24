import React from 'react'
import Navigation from '../components/navigation'

export default ({ isHomepage = false }) => {
  if (isHomepage) {
    return <header>homepage header</header>
  }
  return (
    <header>
      <Navigation />
    </header>
  )
}
