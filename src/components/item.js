import React from 'react'

export default ({ title, content, url }) => (
  <div>
    {url ? (
      <h3>{title}</h3>
    ) : (
      <h3>
        <a href={url}>{title}</a>
      </h3>
    )}
    <p>{content}</p>
  </div>
)
