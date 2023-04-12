import { useState } from 'react'
import Body from './Component/Pages/Body'
import Features from './Component/Pages/Features'
import Footer from './Component/Pages/Footer'
import Goals from './Component/Pages/Goals'
import SignUp from './Component/Pages/SignUp'
import Testimonial from './Component/Pages/Testimonial'
import Nav from './Component/Ui-Component/Nav'
import { ModeContext } from './Component/Context/Context'

function App() {

  const [mode, setMode] = useState<string>("light")

  return (
    <div className={"relative " +mode } >
      <div className=' dark:bg-darkBlue dark:text-white'>
        <ModeContext.Provider value={{mode , setMode}}>
          <Nav />
          <Body />
          <Features />
          <Goals />
          <Testimonial />
          <SignUp name="Sign Up"/>
          <Footer />
        </ModeContext.Provider>
      </div>
    </div>
  )
}

export default App
