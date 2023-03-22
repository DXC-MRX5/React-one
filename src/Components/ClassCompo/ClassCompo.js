import './Class.css';
import React, { Component } from 'react'

export default class ClassCompo extends Component {
  render() {
    return (
      <div className='boxC'>
      <h2>This is created using Class Component</h2>
      <p>This is done using external CSS</p>
      <p style={{color: 'blue'}}>This is done using inline CSS</p>
      </div>
    )
  }
}
