import React from 'react'

/**
 * Implement a function component that accepts children in props
 * and render them inside a div
 */
export default function WithChildren(props) {
  return(
    <div>{props.children}</div>
  )
  // Your code
}
