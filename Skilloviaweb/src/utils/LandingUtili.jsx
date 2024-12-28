import React from 'react'
import Header from '../pages/LandingPage/Header'
import Banner from '../pages/LandingPage/Banner'
import Footer from '../pages/LandingPage/Footer'

const LandingUtili = ({children}) => {
  return (
    <div>
        <Header/>
      {children}
      <Banner />
      <Footer />
    </div>
  )
}

export default LandingUtili
