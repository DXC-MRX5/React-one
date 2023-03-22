import "./Function.css"
import React from 'react'

function FunctionCompo() {
  return (
    <div className='boxF'>
      <h2>This is created using Functional Component</h2>
      <p>This is done using external CSS</p>
      <p style={{color: 'blue'}}>This is done using inline CSS</p>
    </div>
  )
}

export default FunctionCompo;
