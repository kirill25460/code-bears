import React from 'react'
import Contact from '../contact'
import { StyledMain } from './styled'
import Product from '../productList/Product'
import MiniBoxes from '../miniBoxes'
import Moon from '../animationMoon/Moon'
import Hero from '../hero'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Hero/>
      <Product/>
      <MiniBoxes/>
      <Moon />
      <Contact />
      <Footer />
    </StyledMain>
  )
}

export default Main