import React from 'react'
import Nav from './reuseables/Nav'
import Footer from './reuseables/Footer'

const Weblayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <Nav/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Weblayout