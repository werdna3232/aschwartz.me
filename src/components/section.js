import React from 'react'
import Item from './item'

export default ({ title, items }) => (
  <div>
    <h2>{title}</h2>
    {items.map(item => (
      <Item title={item.title} content={item.description} url={item.url} />
    ))}
  </div>
)
