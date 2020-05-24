import React from "react"
import containerStyles from "./container.module.scss"

export default ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>
}
