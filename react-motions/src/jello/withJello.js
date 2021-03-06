import React from 'react'
import styles from './styles'
import memoize from 'fast-memoize'

function withJello(Component) {
  const style = {
    WebkitAnimationName: "jello",
    animationName: "jello",
    WebkitTransformOrigin: "center",
    transformOrigin: "center",
    WebkitAnimationDuration: "1s",
    animationDuration: "1s",
    WebkitAnimationFillMode: "both",
    animationFillMode: "both"
  }

  return (
    <div style={style}>
      {Component}
    </div>
  )
}

export default memoize(withJello)
