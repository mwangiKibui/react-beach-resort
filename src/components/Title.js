import React from 'react'
//notice that am destructuring in the parenthesis
export default function Title({title}) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div></div>
    </div>
  )
}
