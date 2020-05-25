import React from 'react'
import Item from './item'
import SectionStyles from './section.module.scss'

export default ({ title, items }) => (
  <div>
    <h2 className={SectionStyles.title}>{title}</h2>
    {items.map(item => (
      <Item
        key={item.title}
        title={item.title}
        content={item.description}
        url={item.url}
      />
    ))}
  </div>
)
