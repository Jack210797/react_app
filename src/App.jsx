import Button from './components/Button'
import Input from './components/Input'

const App = () => {
  return (
    <form className="form">
      <div className="container">
        <Input className="input input-form" type="text" placeholder="Enter your text" />
        <Button className="input input-btn" type="button" text="Click me" />
      </div>
    </form>
  )
}

export default App
