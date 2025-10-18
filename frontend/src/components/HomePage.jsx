import React from 'react'
import Navbar from './navbar/Navbar'
import Body from './body/Body'
import Clients from './clients/Clients'
import Price from './price/Price'
import Statistic from './statistics/Statistic'
import About from './about/About'
import Services from './services/Services'
import Offer from './offer/Offer'
import Footeri from './footeri/Footeri'
import Footer from './footer/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Body/>
<Statistic/>
<About/>
<Services/>
<Price/>
<Clients/>
<Offer/>
<Footeri/>
<Footer/>
    </>
  )
}

export default HomePage
