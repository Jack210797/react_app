import React, { useState } from 'react'

const Button = ({ text, type, className }) => {
  const [count, setCount] = useState(0)

  return (
    <div className="input-container">
      <button className={className} text={text} type={type} onClick={() => setCount(count + 1)}>
        {text}
      </button>
      <p className="btn-text">You clicked {count} times</p>
    </div>
  )
}

export default Button
