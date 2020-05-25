import React from 'react'
import ItemStyles from './item.module.scss'

export default ({ title, content, slug }) => (
  <div>
    <h3 className={ItemStyles.title} id={slug}>
      {title}
    </h3>
    <div
      className={ItemStyles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
)
