import React from 'react'
import Cards from '../components/cards/Cards'
import Hero from '../components/hero/Hero'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
     <Cards />
     <Footer />
    </div>
  )
}

export default Home
