import { useState } from 'react'

const Input = ({ type, placeholder, className }) => {
  const [name, setName] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="input-container">
      <input className={className} type={type} placeholder={placeholder} onChange={handleChange} value={name} />
      <h3 className="input-text">Your name is: {name}</h3>
    </div>
  )
}

export default Input
