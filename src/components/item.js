import React from 'react'
import ItemStyles from './item.module.scss'

export default ({ title, content, url }) => (
  <div>
    {url ? (
      <h3 className={ItemStyles.title}>{title}</h3>
    ) : (
      <h3 className={ItemStyles.title}>
        <a href={url}>{title}</a>
      </h3>
    )}
    <p className={ItemStyles.content}>{content}</p>
  </div>
)
