import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src="https://media.istockphoto.com/id/1356364268/photo/close-up-focus-on-persons-hands-typing-on-the-desktop-computer-keyboard-screens-show-coding.jpg?s=612x612&w=0&k=20&c=4R_9mWq9KzgpC_pVBMMM0FNzw1L-NyFLa7tDqFInMGs=" alt="image" />
    </div>
  )
}

export default Card
