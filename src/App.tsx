import { useState } from 'react'
import Body from './Component/Pages/Body'
import Features from './Component/Pages/Features'
import Footer from './Component/Pages/Footer'
import Goals from './Component/Pages/Goals'
import SignUp from './Component/Pages/SignUp'
import Testimonial from './Component/Pages/Testimonial'
import Nav from './Component/Ui-Component/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative">
      <Nav />
      <Body />
      <Features />
      <Goals />
      <Testimonial />
      <SignUp />
      <Footer />
    </div>
  )
}

export default App
